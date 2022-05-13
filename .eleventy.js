module.exports = () => {
  return {
    dir: {
      input: 'src',
    },
    templateFormats: [
      'md',
      'njk'
    ],
    markdownTemplateEngine: 'njk',
  };
};