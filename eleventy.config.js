module.exports = config => {
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'out',
    },
    markdownTemplateEngine: 'njk',
  };
};
