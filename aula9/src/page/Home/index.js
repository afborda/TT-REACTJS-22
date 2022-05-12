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
import { AddTask } from "../../service/postTasks";
import { DeleteTask } from "../../service/deleteTask";
import { updateTask } from "../../service/putTask";

function Home() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const handleGetTasks = async () => {
    const response = await GetTasks();

    if (response) {
      setListTasks(response);
    }
  };

  const handleAddTodoList = async (event) => {
    event.preventDefault();

    const data = {
      task: task,
      done: false,
      createdAt: new Date()
    };

    await AddTask(data);

    setTask("");
    handleGetTasks();
  };

  const deleteTask = async (id) => {
    await DeleteTask(id);
    handleGetTasks();
  };

  const handleUpdateTask = async (item) => {
    const data = {
      done: !item.done
    };

    await updateTask(item.id, data);
    handleGetTasks();
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
          <Button onClick={handleAddTodoList}>
            <img src={AddIcons} alt="Botão de adicionar task" />
          </Button>
        </ContainerForm>
        {listTasks.map((item) => {
          return (
            <div key={item.id}>
              <CardTask
                data={item}
                onClick={() => deleteTask(item.id)}
                onDone={() => handleUpdateTask(item)}
              />
            </div>
          );
        })}
      </ContainerBox>
    </Container>
  );
}

export default Home;
