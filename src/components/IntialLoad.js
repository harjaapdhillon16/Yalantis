import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .columns {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  height: 100vh;
  width: 100%;
  img {
    padding-top: 40vh;
    width: 100%;
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const InitialLoad = () => {
  return (
    <Container>
      <div className="columns is-centered is-gapless is-mobile">
        <div className="column is-6">
          <img src="images/yalantis.svg" alt="y" />
        </div>
      </div>
    </Container>
  );
};
export default InitialLoad;
