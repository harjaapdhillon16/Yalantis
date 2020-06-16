import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import AnimatedTechnologyPartnerImage from './AnimatedTechnologyPartnerImage';

const Container = styled.div`
  .is-1 {
    font-size: 4rem;
  }
  .subtitle {
    padding-top: 2rem;
  }
  button {
    background-color: transparent;
    border-color: ${theme.underLineColor};
    color: ${theme.underLineColor};
    border-radius: 100px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .hidden {
    opacity: 0;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .fadeIn {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;
const Data = [
  {
    title: 'Agile Approach',
    img: 'agile',
  },
  {
    title: 'Deep Tech Expertise',
    img: 'deeptech',
  },
  {
    title: 'Personal Commitment',
    img: 'personalcommitment',
  },
  {
    title: 'Regular reporting',
    img: 'regularreporting',
  },
  {
    title: 'Time Tracking',
    img: 'timetracking',
  },
  {
    title: 'Scalability',
    img: 'scalability',
  },
];

const TechnologyPartner = () => {
  return (
    <Container className="has-text-centered container">
      <div className="paddingTop" />
      <div className="columns is-centered has-text-centered is-multiline is-gapless">
        <div className="column is-10">
          <h1 className="title is-1 ">Your dedicated technology partner</h1>
        </div>
        <div className="column is-8">
          <h2 className="subtitle is-5 ">
            Yalantis brings together the best dedicated iOS, Android, and web
            app developers, so you can outsource your project and get a
            top-quality product. We have all the expertise you need to produce
            fully fledged, stable, and scalable web or mobile applications.
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="columns is-multiline is-centered ">
          {Data.map(data => (
            <div className="column is-4">
              <AnimatedTechnologyPartnerImage
                img={data.img}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="button is-large hidden">
        Explore Our Services
      </button>
    </Container>
  );
};
export default TechnologyPartner;
