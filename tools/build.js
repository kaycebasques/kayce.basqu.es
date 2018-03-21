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
    html = require('html-minifier');

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

function compile(file, destination) {
  fs.readFile(file, 'utf8', (error, markdownContent) => {
    if (error) throw error;
    const htmlContent = converter.makeHtml(markdownContent);
    const data = {
      body: htmlContent,
      title: getTitle(htmlContent),
      script: getScript(),
      stylesheet: getStylesheet()
    };
    const unminifiedHtml = template(data);
    const minifiedHtml = html.minify(unminifiedHtml, {
      collapseWhitespace: true
    });
    fs.writeFile(destination, minifiedHtml, (error) => {
      if (error) { throw error; }
    });
  });
}

const indexes = {
  home: { source: 'indexes/index.md', destination: 'build/index.html' },
  blog: { source: 'indexes/posts/index.md', destination: 'build/on/index.html' }
};

for (let key in indexes) {
  compile(indexes[key].source, indexes[key].destination);
}

fs.readdir(blogSource, (error, files) => {
  if (error) throw error;
  files.forEach(file => compile(`posts/${file}`, `build/on/${getName(file)}.html`));
});
