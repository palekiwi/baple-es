import * as React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Container from '../components/Container';

interface Props {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layout: React.SFC<Props> = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Baple Group' },
        { name: 'keywords', content: 'baple, consulting' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Container>
      {children()}
    </Container>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
