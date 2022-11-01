import './App.css';
import { useState } from 'react'
import { useFetch } from './hook/useFetch'
import imgError from './assets/erro.gif'
import imgLoad from './assets/load.gif'

function App() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  let url = "http://localhost:3000/products";
  const { data: products, load, error, httpConfig } = useFetch(url);


  const handleSubmit = (e) =>{
    e.preventDefault()
    const products = {
      name,
      price
    }
    httpConfig(products, "POST");
    setName("");
    setPrice("");
  }

  return (
    <div className="App" onLoad={useFetch}>
      <h1>Controle de ativos</h1>
      <hr />
      {error && <p> <img src={imgError} alt="error" style={{ width: "50px" }} />  {error}</p>}
      {load && <img src={imgLoad} alt="Loading" style={{ width: "50px" }} />}
      {!load &&
        <div>
          <ul>
            {products && products.map((product) => (
              <li key={product.id}>Ativo: {product.name} - Valor: R$ {product.price}</li>
            ))}
          </ul>
        </div>
      }
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
      <label >
            <span htmlFor="Myname">Nome do Ativo Imobilizado</span>
            <br />
            <input type="text" name='Myname' onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <br />
          <br />
          <label >
            <span htmlFor="Myprice">Preço</span>
            <br />
            <input type="number" name='Myprice' onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          <br />
          <br />
          {load && <input type="submit" disabled value="Aguarde..." />}
          {!load && <input type="submit" value="cadastrar" />}
      </form>
    </div>
  );
}

export default App;
