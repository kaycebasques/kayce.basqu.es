const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('media');
  // https://github.com/11ty/eleventy-base-blog/commit/096ff9f3deeab3b393a496a202f1353f16f81572
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });
  return {
    dir: {
      input: 'src',
    },
    templateFormats: [
      'md',
      'css',
      'njk'
    ],
    markdownTemplateEngine: 'njk',
  };
};
