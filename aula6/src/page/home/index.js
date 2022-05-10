import React, { useEffect, useState } from "react";
import { GetFilmes } from "../../service/getFilmes";

import Input from "../../Components/Input";
import Card from "../../Components/Card";
import { ContainerCard, ContainerInput } from "./styled";
import { useNavigate } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [titulo, setTitulo] = useState("");

  const navigation = useNavigate();

  const handleGetFilmes = async (nomeFilme) => {
    const response = await GetFilmes(nomeFilme);
    console.log(response);
    setFilmes(response);
  };

  const handleGetDetails = (id) => {
    navigation(`details/${id}`);
  };

  const handleName = (value) => {
    setTitulo(value);
  };

  useEffect(() => {
    handleGetFilmes("hulk");
  }, []);

  return (
    <>
      <ContainerInput>
        <Input
          id="name"
          label="Nome"
          setValue={handleName}
          placeholder="Informe o filme"
        />
      </ContainerInput>

      <ContainerCard>
        {filmes.map((item) => {
          return (
            <div key={item.imdbID}>
              <Card
                filme={item}
                textButton="Saiba mais"
                onClick={() => handleGetDetails(item.imdbID)}
              />
            </div>
          );
        })}
      </ContainerCard>
    </>
  );
}

export default Home;
