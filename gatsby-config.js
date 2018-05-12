module.exports = {
  siteMetadata: {
    title: 'Baple',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.tsx'
      }
    }
  ],
}
