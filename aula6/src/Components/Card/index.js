import React from "react";

import {
  Container,
  ContainerImage,
  Img,
  Title,
  SubTitle,
  Button
} from "./styled";

function Card({ filme }) {
  return (
    <Container>
      <ContainerImage>
        <Img src={filme.Poster} alt={filme.Title} />
      </ContainerImage>

      <Title>{filme.Title}</Title>
      <SubTitle>Tipo: {filme.Type}</SubTitle>
      <Button> Saiba Mais</Button>
    </Container>
  );
}

export default Card;
