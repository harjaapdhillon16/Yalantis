import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes imgResize {
    0% {
      opacity: 0;
      width: 0%;
      height: 0%;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      width: 30%;
      height: 100%;
      transform: translateY(0px);
    }
  }
  .hidden {
    opacity: 0;
  }
  img {
    width: 10%;
  }
  .title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .fadeIn {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .imgResize {
    animation: imgResize ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

const AnimatedTechnologyPartnerImage = ({ img, title }) => {
  return (
    <Container className="has-text-centered">
      <img src={`images/${img}.svg`} className="hidden" alt="agile" />
      <h1 className="title is-4 has-text-weight-normal has-text-white hidden">
        {title}
      </h1>
    </Container>
  );
};
export default AnimatedTechnologyPartnerImage;
