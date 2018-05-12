import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components'

import Header from '../components/header';

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

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout: React.SFC<Props> = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
