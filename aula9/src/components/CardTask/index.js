import React from "react";
import IconDelete from "../../assets/lixeira.png";

import { ContainerTask, ContainerText, Status, ContainerImage } from "./styled";

function CardTask() {
  return (
    <ContainerTask>
      <ContainerText>
        <p>Tarefa que devo fazer</p>
        <Status>status da tarefa</Status>
      </ContainerText>

      <ContainerImage>
        <img src={IconDelete} alt="Deletar tarefa" />
      </ContainerImage>
    </ContainerTask>
  );
}

export default CardTask;
