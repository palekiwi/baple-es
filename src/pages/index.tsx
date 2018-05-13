import * as React from 'react'
import Link from 'gatsby-link'

import LandingPage from '../components/LandingPage';

interface Props {
  lang: string
}

const IndexPage: React.SFC<Props> = ({lang}) => (
  <LandingPage lang={lang} />
)

export default IndexPage
