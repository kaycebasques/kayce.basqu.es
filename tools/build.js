const showdown = require('showdown'),
    converter = new showdown.Converter(),
    fs = require('fs'),
    buildDirectory = 'build',
    blogSource = 'posts',
    blogDestination = `${buildDirectory}/on`,
    handlebars = require('handlebars'),
    source = fs.readFileSync('templates/template.html', 'utf8'),
    template = handlebars.compile(source),
    js = require('uglify-js'),
    css = require('clean-css'),
    html = require('html-minifier'),
    postIndexData = {};

function getName(filename) {
  return filename.substring(0, filename.indexOf('.'));
}

function getStylesheet() {
  const src = fs.readFileSync('styles/main.css', 'utf8');
  return new css().minify(src).styles;
}

function getScript() {
  const src = fs.readFileSync('scripts/main.js', 'utf8');
  return js.minify(src).code;
}

function getTitle(content) {
  const end = content.indexOf('</h1>');
  const start = content.substring(0, end).lastIndexOf('>') + 1;
  return content.substring(start, end);
}

function compile(path, filename, destination) {
  const markdownContent = fs.readFileSync(`${path}/${filename}`, 'utf8');
  const htmlContent = converter.makeHtml(markdownContent);
  const title = getTitle(htmlContent),
  name = getName(filename),
  data = {
    body: htmlContent,
    title: title,
    script: getScript(),
    stylesheet: getStylesheet()
  };
  if (destination.includes('/on/') && !filename.includes('index')) {
    postIndexData[name] = {};
    postIndexData[name].url = `/on/${name}.html`;
    postIndexData[name].title = title;
  }
  const unminifiedHtml = template(data);
  const minifiedHtml = html.minify(unminifiedHtml, {
    collapseWhitespace: true
  });
  fs.writeFileSync(destination, minifiedHtml);
}

const indexes = {
  home: { source: 'index.md', destination: 'build/index.html' },
  blog: { source: 'posts/index.md', destination: 'build/on/index.html' }
};

for (let key in indexes) {
  compile('indexes/', indexes[key].source, indexes[key].destination);
}

const posts = fs.readdirSync(blogSource);

posts.forEach(file => compile('posts/', file, `build/on/${getName(file)}.html`));

let postIndexContent = '';

for (const key in postIndexData) {
  const post = postIndexData[key];
  const item = `<li><a href="${post.url}">${post.title}</a></li>`;
  postIndexContent += item;
}

const unminifiedPostIndex = template({
  body: postIndexContent,
  title: "Kayce on...",
  script: getScript(),
  stylesheet: getStylesheet()
});

minifiedPostIndex = html.minify(unminifiedPostIndex, {
  collapseWhitespace: true
});

fs.writeFileSync('build/on/index.html', minifiedPostIndex);
