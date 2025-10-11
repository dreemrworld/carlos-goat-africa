module.exports = {
  siteUrl: 'https://dev.goat.africa',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
