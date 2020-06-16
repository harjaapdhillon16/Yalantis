/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';
import HomeHero from '../components/HomeHero';
import InitialLoad from '../components/IntialLoad';
import TechnologyPartner from '../components/TechnologyPartner';
import ProductExample from '../components/ProductExamples';

const Container = styled.div`
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  background-color: ${theme.backgroundColor};
  h1 {
    color: ${theme.white} !important;
  }
  h2 {
    color: ${theme.secondaryColor} !important;
  }
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    const me = this;
    setTimeout(() => {
      me.setState({ animate: true });
    }, 2000);
    let elements;
    let windowHeight;
    setTimeout(() => {
      function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
      }

      function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const elementType = element.nodeName;
          const positionFromTop = elements[i].getBoundingClientRect().top;
          if (
            positionFromTop - windowHeight <= 0 &&
            (elementType === 'H1' || elementType === 'BUTTON')
          ) {
            element.classList.add('fadeIn');
            element.classList.remove('hidden');
          } else if (
            positionFromTop - windowHeight <= 0 &&
            (elementType === 'IMG' || elementType === 'DIV')
          ) {
            element.classList.add('imgResize');
            element.classList.remove('hidden');
          }
        }
      }

      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);

      init();
      checkPosition();
    }, 3000);
  }

  render() {
    return (
      <div style={{ backgroundColor: theme.backgroundColor }}>
        {this.state.animate ? (
          <Container className="animate">
            <Layout>
              <Seo title="Home" description="Welcome to GatsbyJs v1" />
              <HomeHero />
              <TechnologyPartner />
              <ProductExample />
            </Layout>
          </Container>
        ) : (
          <InitialLoad />
        )}
      </div>
    );
  }
}
export default IndexPage;
