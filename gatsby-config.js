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
    title: "Full-Stack Developer. AWS Certified Cloud Practitioner  ",
    author: 'KyungWon Park'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
};
// For dynamically rendering blog posts: ONLY if posts are listed in the assets.
// npm install gatsby-source-filesystem
// npm install gatsby-transformer-remark
// Adding images for blogging
// npm install gatsby-plugin-sharp
// npm install gatsby-remark-images
// npm install gatsby-remark-relative-images