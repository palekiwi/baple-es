import * as React from 'react';
import Helmet from 'react-helmet';
import { getLocale, saveLocale } from '../utils/locale';

import Header from '../components/Header';
import Container from '../components/Container';

const initialState = {lang: ''};
type State = typeof initialState;

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
    const {data, children} = this.props;

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Baple Group' },
            { name: 'keywords', content: 'baple, consulting' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <p>lang: {this.state.lang}</p>
        <button onClick={() => this.setLang('en')}>en</button>
        <button onClick={() => this.setLang('zh')}>cn</button>
        {children()}
      </div>
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
