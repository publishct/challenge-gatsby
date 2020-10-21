module.exports = {
  siteMetadata: {
    title: `Gatsby Challenges`,
    description: `1.5 hours of just code each day for 150 days. This is day 1 of that challenge. I am using Shanika Wickramasinghe's article on Medium.com called: 10 Top GatsbyJS Plugins for 2020.`,
    author: `Cynthia Trujillo, they, them, theirs developercynthia@gmail.com`,
  },
  plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    },
  },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: `pages`,
        },  
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },  
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }, 
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
   `gatsby-plugin-offline`,
  ],
}
