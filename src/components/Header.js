/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '../utils/theme';

const Section = styled.section`
  background-color: ${theme.backgroundColor};
  width: 100%;
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  color: ${props => props.theme.white};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      top: 50px;
      width: 100%;
      transition: 0.6s;
      background-color: ${theme.backgroundColor};
    }
  }
  .navbar-item {
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    color: ${props => props.theme.white};
    transition: 0.4s;
    :hover {
      color: ${props => props.theme.underLineColor};
      text-decoration-color: ${theme.underLineColor};
      text-decoration: underline;
      background-color: ${theme.backgroundColor};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  button {
    border-radius: 100rem;
    background-color: ${theme.backgroundColor} !important;
    border: 1px solid ${theme.white} !important;
    font-size: 1rem;
    :hover {
      background-color: ${theme.underLineColor} !important;
      text-decoration: none solid !important;
    }
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/yalantis.svg" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  WORKS
                </Link>
                <Link to="/about" className="navbar-item">
                  TECHNOLOGIES
                </Link>
                <Link to="/news" className="navbar-item">
                  SERVICES
                </Link>
                <Link to="/contact" className="navbar-item">
                  COMPANY
                </Link>
                <Link to="/contact" className="navbar-item">
                  BLOG
                </Link>
                <Link to="/contact" className="navbar-item">
                  <button className="button is-primary is-medium" type="button">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
