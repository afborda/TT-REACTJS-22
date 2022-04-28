import { useState } from "react";
import Button from "./components/button";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      email: email
    };
    console.log(data);
    handleSubmitUser(data);
  }

  const handleSubmitUser = async (user) => {
    const response = await fetch(
      "https://61d3bc23b4c10c001712ba53.mockapi.io/user",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );

    const data = await response.json();
  };

  return (
    <div className="App">
      <h1>Inputs</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email"> E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /> */}

        <Input
          id="name"
          label="Nome"
          placeholder="Informe seu nome"
          type="text"
          name="name"
          value={name}
          setValue={setName}
        />

        <Input
          id="email"
          placeholder="Informe seu email"
          label="E-mail"
          type="email"
          name="email"
          value={email}
          setValue={setEmail}
        />

        <Button>Enviar</Button>
      </form>
    </div>
  );
}

export default App;
