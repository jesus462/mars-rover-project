import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 12px;
  border-bottom: 1px solid #201e1e;
  position: fixed;
  top: 0;
  background: #000
    url(https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/starfield-banner.jpg);
  z-index: 100;
  height: 60px;
`;

export const Logo = styled.img`
  width: 80px;
  margin-right: 10px;
`;

export const LinkStyledLogo = styled(Link)`
  display: flex;
  align-items: center;
`;
