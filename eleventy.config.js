module.exports = config => {
  config.addPassthroughCopy('src/**/*.css');
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'out',
    },
    markdownTemplateEngine: 'njk',
  };
};
