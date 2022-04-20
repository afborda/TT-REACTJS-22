import { useState } from "react";
import { NavDois } from "./component/nav";
import "./style.css";

function App() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [dadosPessoa, setDadosPessoa] = useState({
    nome: "Abner",
    idade: "27"
  });

  const menor = () => {
    if (contador !== 0) {
      setContador(contador - 1);
    }
  };

  const maior = () => {
    setContador(contador + 1);
  };

  const handleAtivo = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="App">
      <NavDois />
      <h1>Comprar</h1>
      <h1>{contador}</h1>
      <h1>{contador * 150}</h1>
      <button onClick={maior}>Somar</button>
      <button onClick={menor}>Diminuir</button>
      <button onClick={handleAtivo} className={ativo ? "ativo" : "inativo"}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}

export default App;
