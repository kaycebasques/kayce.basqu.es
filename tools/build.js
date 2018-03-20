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

fs.readdir(blogSource, (error, files) => {
  files.forEach(file => {
    fs.readFile(`${blogSource}/${file}`, 'utf8', (error, markdownContent) => {
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
      fs.writeFile(`${blogDestination}/${file}`, minifiedHtml, (error) => {
        if (error) { throw error; }
      });
    });
  });
});
