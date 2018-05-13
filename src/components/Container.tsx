import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
interface Props {
  children: any
}

const Container: React.SFC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
