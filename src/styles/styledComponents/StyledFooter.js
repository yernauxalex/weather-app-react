import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  border-top: solid 3px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #root {
    width: 100%;
    margin: 0;
  }
  h4 {
    font-size: 1rem;
    margin: 1rem 0 0 0;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default StyledFooter;
