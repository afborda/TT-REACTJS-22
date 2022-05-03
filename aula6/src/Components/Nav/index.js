import React from "react";

import {
  Container,
  Image,
  ContainerImage,
  NavStyle,
  LinkStyle
} from "./styled";

function Nav() {
  return (
    <Container>
      <ContainerImage>
        <Image
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt="logo TTFlix"
        />
      </ContainerImage>
      <NavStyle>
        <LinkStyle href="/">Home</LinkStyle>
        <LinkStyle href="/">Filmes</LinkStyle>
        <LinkStyle href="/">Login</LinkStyle>
      </NavStyle>
    </Container>
  );
}

export default Nav;
