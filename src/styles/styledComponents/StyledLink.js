import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../colors";

// Lien dans la navbar
const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  color: ${colors.text};
  padding: 1.5%;
`;
export default StyledLink;
