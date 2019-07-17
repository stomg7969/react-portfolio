/**
 * Configure your Gatsby site with this file.
 * 
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * My memo: This where we list out names like plugins.
 * If npm run develop, gatsby will look at THIS gatsby-config.js then initiate.
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hello! I'm KyungWon Park. I'm a full-stack developer",
    author: 'KyungWon Park'
  },
  plugins: [
    'gatsby-plugin-sass'
  ]
};
