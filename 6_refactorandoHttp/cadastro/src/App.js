
import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch.js'
import loading from './assets/load.gif'

function App() {

  const url = "http://localhost:3000/users";

  const [name, setName] = useState("");
  const [years, setYears] = useState("");
  const [deployment, setDeployment] = useState("");

  const { data: usuarios, error, load, httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = {
      name,
      years,
      deployment
    }
    console.log(users)
    httpConfig(users, "POST")
    setName("");
    setDeployment("");
    setYears("");
  }

  return (
    <div className="App" onLoad={useFetch}>
      <h1>Cadastro de clientes</h1>
      {error && <p>{error}</p>}
      {load && <img src={loading} alt='loading' style={{ width: "50px" }}></img>}
      {!load && <div>
        <ul>
          {usuarios && usuarios.map((usuario) => (
            <li key={usuario.id}>
              <div>
                Nome: {usuario.name} <br />
                Idade : {usuario.years} <br />
                Profissão: {usuario.deployment} <br />
                <br />
              </div>
            </li>
          ))}
        </ul>
      </div>}
      <br />
      <br />
      <hr />
      <form onSubmit={handleSubmit}>
        <label >
          <span htmlFor="nome">Nome:</span><br />
          <input type="text" name='nome' value={name} onChange={(e) => setName(e.target.value)} />
        </label><br />

        <label >
          <span htmlFor="idade">Idade:</span><br />
          <input type="number" name='idade' value={years} onChange={(e) => setYears(e.target.value)} />
        </label><br />

        <label >
          <span htmlFor="profissao">Profissão:</span><br />
          <input type="text" name='profissao' value={deployment} onChange={(e) => setDeployment(e.target.value)} />
        </label><br />
        <br />
        {load && <input type="submit" disabled value="Aguarde..."/>}
        {!load && <input type="submit" value="Enviar"/>}
      </form>
    </div>
  );
}

export default App;
