module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('media');
  return {
    dir: {
      input: 'content',
    },
    templateFormats: [
      'md',
      'css',
    ],
    markdownTemplateEngine: 'njk',
  };
};