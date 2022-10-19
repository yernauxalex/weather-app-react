import styled from "styled-components";
import colors from "../colors";

const StyledNavBar = styled.nav`
  #root {
    width: 100%;
    margin: 0;
  }
  height: 60px;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: ${colors.text};
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  h1 {
    text-decoration: none;
    color: ${colors.text};
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .nav-menu {
    margin-left: auto;
  }
  ul {
    display: flex;
    padding: 0;
  }
  .nav-menu li {
    list-style-type: none;
    margin: 0 1rem;
  }
  .nav-menu li a {
    text-decoration: none;
    display: block;
    width: 100%;
  }
  .hamburger {
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  }
  .hamburger:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: block;
    }
    .nav-menu ul {
      display: none;
      // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
      position: absolute;
      top: 60px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }
    .nav-menu.expanded ul {
      display: block;
    }
    .nav-menu li {
      text-align: center;
      margin: 0;
    }
    .nav-menu li a {
      color: black;
      width: 100%;
      padding: 1.2rem 0;
    }
    .nav-menu li:hover {
      background-color: #eee;
    }
  }
`;

export default StyledNavBar;
