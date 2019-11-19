import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-light py-0 bg-light navbar-expand-lg py-md-0">
        <Link to="/">
          <div>
            <img src={logo} alt="store" className="navbar-brand" />
          </div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-cart btn3d btn-lg" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: white;
  .nav-link {
    // color: #0d0d0d !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
