const showdown = require('showdown'),
    converter = new showdown.Converter(),
    fs = require('fs'),
    buildDirectory = 'out',
    blogSource = 'content/blog',
    blogDestination = `${buildDirectory}/blog`,
    handlebars = require('handlebars'),
    source = fs.readFileSync('templates/base.html', 'utf8'),
    template = handlebars.compile(source),
    subscription = fs.readFileSync('partials/subscription.html', 'utf8'),
    js = require('uglify-js'),
    css = require('clean-css'),
    html = require('html-minifier'),
    postIndexData = [],
    categories = {};

function getName(filename) {
  return filename.substring(0, filename.indexOf('.'));
}

function getStylesheet() {
  const src = fs.readFileSync('styles/main.css', 'utf8');
  return new css().minify(src).styles;
}

function getScript() {
  return fs.readFileSync('scripts/main.js', 'utf8');
  // TODO minification not working
  //return js.minify(src).code;
}

function getTitle(content) {
  const end = content.indexOf('</h1>');
  const start = content.substring(0, end).lastIndexOf('>') + 1;
  return content.substring(start, end);
}

function isTechnicalWritingPost(content) {
  const query = '<p id="category">';
  const startIndex = content.indexOf(query) + query.length;
  const shiftedContent = content.substring(startIndex);
  const endIndex = shiftedContent.indexOf('</p>');
  return shiftedContent.substring(0, endIndex) === 'Technical Writing';
}

function getDate(html) {
  // TODO use the datetime attribute instead
  const end = html.indexOf('</time>');
  const start = html.substring(0, end).lastIndexOf('>') + 1;
  return html.substring(start, end);
}

function getSummary(html) {
  const search = '<p id="summary">';
  const start = html.lastIndexOf(search) + search.length;
  const substring = html.substring(start);
  let summary = substring.substring(0, substring.indexOf('</p>'));
  if (summary[0] == '\n') summary = summary.substring(1);
  if (summary[summary.length - 1] == '\n') summary = summary.substring(0, summary.length - 1);
  summary = summary.replace(/\n/g, ' ');
  summary = summary.replace(/^ +/g, '');
  summary = summary.replace(/ +$/g, '');
  summary = summary.replace(/  +/g, ' ');
  debugger;
  return summary;
}

function compile(path, filename, destination) {
  const markdownContent = fs.readFileSync(`${path}/${filename}`, 'utf8');
  const htmlContent = converter.makeHtml(markdownContent);
  const title = getTitle(htmlContent),
  date = getDate(htmlContent),
  name = getName(filename),
  summary = getSummary(htmlContent);
  data = {
    body: htmlContent,
    title: title,
    script: getScript(),
    stylesheet: getStylesheet(),
    description: summary
  };
  if (isTechnicalWritingPost(htmlContent)) data.subscription = subscription;
  if (destination.includes('/blog/') && !filename.includes('index')) {
    post = {};
    post.url = `/blog/${name}.html`;
    post.title = title;
    post.date = date;
    post.summary = summary;
    postIndexData.push(post);
  }
  const unminifiedHtml = template(data);
  const minifiedHtml = html.minify(unminifiedHtml, {
    collapseWhitespace: true
  });
  fs.writeFileSync(destination, minifiedHtml);
}

const indexes = {
  home: { source: 'index.md', destination: 'out/index.html' },
  portfolio: { source: 'portfolio/index.md', destination: 'out/portfolio/index.html' }
};

for (let key in indexes) {
  compile('content/', indexes[key].source, indexes[key].destination);
}

const posts = fs.readdirSync(blogSource);

posts.forEach(file => compile('content/blog/', file, `out/blog/${getName(file)}.html`));

let postIndexItems = [];

postIndexData.forEach(post => {
  post.html =
    `<li class="blog--post">
       <h2 class="blog--title"><a href="${post.url}">${post.title}</a></h2>
       <time class="blog--time">${post.date}</time>
       <p class="blog--summary">${post.summary}</p>
     </li>`;
});

sortedPostIndexData = postIndexData.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

let postIndexContent = '<h1>Blog</h1><ul class="blog--list">';

postIndexData.forEach(post => {
  postIndexContent += post.html;
});

postIndexContent += '</ul>';

const unminifiedPostIndex = template({
  body: postIndexContent,
  title: 'Blog',
  script: getScript(),
  stylesheet: getStylesheet(),
  description: 'The blog of Kayce Basques.'
});

minifiedPostIndex = html.minify(unminifiedPostIndex, {
  collapseWhitespace: true
});

fs.writeFileSync('out/blog/index.html', minifiedPostIndex);
