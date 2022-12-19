import { FunctionComponent } from "react";

import { Nav, Logo, LinkStyledLogo } from "./styles";

export const Navbar: FunctionComponent = () => {
  return (
    <Nav>
      <LinkStyledLogo to="/">
        <Logo
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          alt="Alexandria logo"
        />
      </LinkStyledLogo>
    </Nav>
  );
};
