import * as React from 'react'
import Link from 'gatsby-link'

interface Props {
  siteTitle: string
}

const Header: React.SFC<Props> = ({ siteTitle }) => (
  <div>
    {siteTitle}
  </div>
)

export default Header
