import './App.css';
import { useState } from 'react';
import { useFetch } from './hook/useFetch';
import loading from './assets/load.gif'
function App() {

  const url = "  http://localhost:3000/products"

  const [products] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { data: produtos, httpConfig, load, error } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    }

    /*
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product),
  });

  //conveter o objeto json em string
  const addedProduct = await response.json();

  setProducts((prevProducts) => [...prevProducts, addedProduct])
*/
    httpConfig(product, "POST", load)
    setName("");
    setPrice("");

  }

  /*
    useEffect( () => {
     async function fetchData(){
     const res = await fetch(url)
     const data = await res.json()
     setProducts(data)
   }
   fetchData();
    },[])
  */

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <br />
      {error && <p>{error}</p>}
      {load && <img src={loading} alt='loading' className='load'></img>}
      {!load &&
        <ul>
          {produtos && produtos.map((produto) => (
            <li key={produto.id}>{produto.name} - R$: {produto.price}</li>
          ))}
        </ul>
      }
      <br />
      <hr />
      <br />
      <div>
        <form onSubmit={handleSubmit} className="add-procuts">
          <label >
            <span htmlFor="Myname">Nome do Produto</span>
            <br />
            <input type="text" name='Myname' onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <br />
          <br />
          <label >
            <span htmlFor="Myprice">Preço do Produto</span>
            <br />
            <input type="number" name='Myprice' onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          <br />
          <br />
          {load && <input type="submit" disabled value="Aguarde..." />}
          {!load && <input type="submit" value="cadastrar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
