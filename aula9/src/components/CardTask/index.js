import React from "react";
import IconDelete from "../../assets/lixeira.png";

import { ContainerTask, ContainerText, Status, ContainerImage } from "./styled";

function CardTask({ data, onClick, onDone }) {
  return (
    <ContainerTask status={data.done}>
      <ContainerText onClick={onDone}>
        <p>{data.task}</p>
        <Status status={data.done}>
          {data.done ? "Finalizado" : "Pendente"}
        </Status>
      </ContainerText>

      <ContainerImage onClick={onClick}>
        <img src={IconDelete} alt="Deletar tarefa" />
      </ContainerImage>
    </ContainerTask>
  );
}

export default CardTask;
