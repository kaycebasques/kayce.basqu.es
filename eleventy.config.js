module.exports = config => {
  config.addPassthroughCopy('src/**/*.css');
  config.addPassthroughCopy('src/**/*.jpg');
  config.addPassthroughCopy('src/**/*.pdf');
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'out',
    },
    markdownTemplateEngine: 'njk',
  };
};
