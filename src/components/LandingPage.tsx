import * as React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: lightgray;
`
const Title = styled.h1`
  text-transform: uppercase;
`

interface Props {
  lang: string
}

const LandingPage: React.SFC<Props> = ({ lang }) => (
  <StyledLanding>
    <Title>Welcome to Baple Group</Title>
  </StyledLanding>
);

export default LandingPage;
