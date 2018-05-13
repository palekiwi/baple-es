import * as React from 'react';
import styled from 'styled-components';

const StyledLayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
interface Props {
  children: any
}

const LayoutMain: React.SFC<Props> = ({ children }) => (
  <StyledLayoutMain>{children}</StyledLayoutMain>
);

export default LayoutMain;
