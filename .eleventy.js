const { DateTime } = require('luxon');
const fs = require('fs');
const includes = {
  sabbatical: fs.readFileSync('./src/_includes/sabbatical.html', 'utf-8')
};
const rss = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  config.addPlugin(rss);
  config.addPassthroughCopy('media');
  config.addNunjucksShortcode('sabbatical', () => includes.sabbatical);
  // https://github.com/11ty/eleventy-base-blog/commit/096ff9f3deeab3b393a496a202f1353f16f81572
  config.addFilter('htmlDateString', (dateObj) => {
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
