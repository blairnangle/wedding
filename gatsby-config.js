module.exports = {
  siteMetadata: {
    title: 'Blair & Helena',
    titleTemplate: '%s | We are getting married',
    description: 'We are getting married',
    siteUrl: 'https://blairandhelena.com',
    author: 'Blair Nangle',
    authorSite: 'https://blairnangle.com',
    twitterUsername: '@blairnangle',
    twitterURL: 'https://twitter.com/',
    githubURL: 'https://github.com/blairnangle/wedding',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
    },
  ],
};
