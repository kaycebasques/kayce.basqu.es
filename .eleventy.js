module.exports = config => {
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/**/*.css');
  config.addPassthroughCopy('src/**/*.pdf');
  return {
    dir: {
      input: 'src',
      layouts: '_layouts'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
