module.exports = config => {
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/**/*.css');
  return {
    dir: {
      input: 'src',
      layouts: '_layouts'
    },
    htmlTemplateEngine: 'njk'
  };
};
