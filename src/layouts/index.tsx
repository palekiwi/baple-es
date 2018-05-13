import * as React from 'react';
import Helmet from 'react-helmet';
import { getLocale, saveLocale } from '../utils/locale';

import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import Header from '../components/Header';
import Footer from '../components/Footer';

const initialState = {lang: ''};
type State = typeof initialState;

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

class Layout extends React.Component<Props, State> {
  state = initialState;

  componentDidMount () {
    this.setState({lang: getLocale()});
  }

  private setLang = (lang: string) => {
    saveLocale(lang);
    this.setState({lang});
  }

  render () {
    const {data, location, children} = this.props;

    return (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Baple Group' },
            { name: 'keywords', content: 'baple, consulting' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutMain>
          {children({...this.props, ...this.state})}
        </LayoutMain>
        {location.pathname !== '/' && <Footer />}
      </LayoutRoot>
    )
  }
}
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
