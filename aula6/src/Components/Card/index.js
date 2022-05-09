import React from "react";
import { Button } from "../../style/global";

import { Container, ContainerImage, Img, Title, SubTitle } from "./styled";

function Card({ filme, onClick, textButton }) {
  return (
    <Container>
      <ContainerImage>
        <Img src={filme.Poster} alt={filme.Title} />
      </ContainerImage>
      <Title>{filme.Title}</Title>
      <SubTitle>Tipo: {filme.Type}</SubTitle>
      <Button onClick={onClick}>{textButton}</Button>
    </Container>
  );
}

export default Card;
