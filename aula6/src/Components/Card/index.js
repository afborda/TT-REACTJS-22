import React from "react";
import { Button } from "../../style/global";

import { Container, ContainerImage, Img, Title, SubTitle } from "./styled";

function Card({ filme }) {
  return (
    <Container>
      <ContainerImage>
        <Img src={filme.Poster} alt={filme.Title} />
      </ContainerImage>
      <Title>{filme.Title}</Title>
      <SubTitle>Tipo: {filme.Type}</SubTitle>
    </Container>
  );
}

export default Card;
