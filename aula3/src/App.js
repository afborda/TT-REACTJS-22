import { useEffect, useState } from "react";
import { CardMovie } from "./components/cardMovie";
import "./global/style-app.css";

function App() {
  const [contador, setContador] = useState(0);
  const [filmes, setFilmes] = useState([]);
  const [soma, setSoma] = useState(0);

  const buscaValor = () => {
    fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks")
      .then((response) => response.json())
      .then((data) => {
        setFilmes(data);
      });
  };

  useEffect(() => {
    buscaValor();
  }, []);

  useEffect(() => {
    console.log("contador");
  }, [contador]);

  useEffect(() => {
    console.log("Foi somado!");
  }, [soma]);

  return (
    <div className="App">
      <h1>Target</h1>
      {contador}
      <h1>Total</h1>
      {soma}

      <div className="container-app">
        {filmes.map((item) => {
          return <CardMovie movie={item} />;
        })}
      </div>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      <button onClick={() => setSoma(contador * 100)}>Soma</button>
    </div>
  );
}

export default App;
