import React from "react";
import { Link } from "react-router-dom";

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
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="filmes">Filmes</LinkStyle>
        <LinkStyle to="/">Login</LinkStyle>
      </NavStyle>
    </Container>
  );
}

export default Nav;
