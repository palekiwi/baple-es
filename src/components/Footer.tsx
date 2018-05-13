import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  background-color: blue;
`
interface Props {
  children?: any
}

const Footer: React.SFC<Props> = ({ children }) => (
  <StyledFooter>Footer</StyledFooter>
);

export default Footer;
