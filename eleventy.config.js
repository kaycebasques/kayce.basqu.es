module.exports = config => {
  config.addPassthroughCopy('src/**/*.css');
  config.addPassthroughCopy('src/**/*.jpg');
  config.addPassthroughCopy('src/**/*.pdf');
  config.addPassthroughCopy('src/**/*.woff2');
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'out',
    },
    markdownTemplateEngine: 'njk',
  };
};
