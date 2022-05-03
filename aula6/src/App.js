import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Input from "./Components/Input";
import Nav from "./Components/Nav";
import { GetFilmes } from "./service/getFilmes";
import { ContainerCard, ContainerInput } from "./style/style-app";

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [titulo, setTitulo] = useState("");

  const handleGetFilmes = async () => {
    const response = await GetFilmes();
    console.log(response);

    setFilmes(response);
  };

  const handleName = (value) => {
    console.log(value);
    setTitulo(value);
  };

  useEffect(() => {
    handleGetFilmes();
  }, []);

  return (
    <>
      <Nav />

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
              <Card filme={item} />
            </div>
          );
        })}
      </ContainerCard>
    </>
  );
};

export default App;
