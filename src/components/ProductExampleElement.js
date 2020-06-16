import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  .back {
    background-color: ${theme.secondaryColor};
    padding: 0.4rem;
    border-radius: 100px;
    text-align: center;
  }
  .hidden {
    opacity: 0;
  }
  img {
    max-height: 35rem;
  }
  .is-6 {
    font-size: 0.7rem;
  }
  .title {
    margin-bottom: 1rem;
  }
  background-color: ${theme.blueBackgroundColor};
  button {
    background-color: transparent;
    color: ${theme.white};
    border-radius: 100px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .reverse {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      height: 0%;
    }
    100% {
      opacity: 1;
      height: 100%;
    }
  }
  .imgResize {
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;
const ProductExample = ({ reverse, img }) => {
  return (
    <Section className="section" reverse={reverse}>
      <div className="columns is-multiline reverse">
        <div className="column is-6  has-text-centered">
          <img src={`images/${img}.png`} alt="mobile/Tablet" />
        </div>
        <div className="column is-5 hidden">
          <h1 className="title is-1 ">KPMG</h1>
          <h2 className="title is-3 has-text-grey has-text-weight-light">
            A mobile online communication channel for KPMG clients
          </h2>
          <div className="columns is-mobile">
            <div className="column is-3">
              <h1 className="title is-6 back">IOS</h1>
            </div>
            <div className="column is-3">
              <h1 className="title is-6 back">USA</h1>
            </div>
            <div className="column is-3">
              <h1 className="title is-6 back">Health</h1>
            </div>
          </div>
          <h1 className="title is-5 has-text-weight-normal">
            KPMG was looking to improve communication between the company and
            its clients. We helped KPMG design and develop a mobile portal where
            clients can contact consultants or request a callback from a
            particular specialist in real time, depending on the nature of their
            question.
          </h1>
          <button className="button is-large" type="button">
            See full case study
          </button>
        </div>
      </div>
    </Section>
  );
};
export default ProductExample;
