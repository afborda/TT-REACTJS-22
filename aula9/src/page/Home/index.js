import React, { useEffect, useState } from "react";

import LogoTT from "../../assets/tt.png";
import AddIcons from "../../assets/adicionar.png";
import {
  Container,
  ContainerBox,
  ContainerImg,
  Image,
  ContainerForm,
  Input,
  Button
} from "./styled";
import CardTask from "../../components/CardTask";
import { GetTasks } from "../../service/getTasks";

function Home() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const handleGetTasks = async () => {
    const response = await GetTasks();
    console.log(response);
    setListTasks(response);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <Container>
      <ContainerBox>
        <ContainerImg>
          <Image src={LogoTT} alt="Logo targettrust" />
        </ContainerImg>
        <ContainerForm>
          <Input
            type="text"
            id="task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <Button>
            <img src={AddIcons} alt="Botão de adicionar task" />
          </Button>
        </ContainerForm>

        <CardTask />
      </ContainerBox>
    </Container>
  );
}

export default Home;
