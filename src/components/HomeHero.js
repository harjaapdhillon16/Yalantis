import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  background-image: url('images/y.png');
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  min-height: 80vh;
  h1 {
    color: ${theme.white} !important;
  }
  .paddingTop {
    min-height: 7rem;
  }
  align-items: center;
`;

const HomeHero = () => {
  return (
    <Container>
      <div className="paddingTop" />
      <div className="columns is-centered is-gapless">
        <div className="column is-6">
          <h1 className="subtitle is-3 ">
            We help brands and businesses solve their challenges with gratifying
            and meaningful web and mobile solutions
          </h1>
        </div>
      </div>
    </Container>
  );
};
export default HomeHero;
