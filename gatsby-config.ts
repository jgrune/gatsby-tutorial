/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'A simple recipe website',
    author: "Jon's Gatsby site",
    person: {
      name: 'Jon', age: '30',
    },
    simpleData: ['one', 'two', 'three'],
    complexData: [
      { name: 'Jon', age: '30' },
      { name: 'Jane', age: '25' },
      { name: 'Bob', age: '35' },
    ]
  },
  plugins: [`gatsby-plugin-provide-react`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images 
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/assets/css`,
      }
    }
  ],
};
