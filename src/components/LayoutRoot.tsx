import * as React from 'react';
import styled from 'styled-components';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface Props {
  children: any
}

const LayoutRoot: React.SFC<Props> = ({ children }) => (
  <StyledLayoutRoot>{children}</StyledLayoutRoot>
);

export default LayoutRoot;
