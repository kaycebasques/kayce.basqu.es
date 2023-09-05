module.exports = config => {
  config.addPassthroughCopy('src/**/*.css');
  config.addPassthroughCopy('src/**/*.jpg');
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'out',
    },
    markdownTemplateEngine: 'njk',
  };
};
