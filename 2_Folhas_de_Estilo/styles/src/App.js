import './App.css';
import Title from './Components/Title';

function App() {

  const n = 10;
  const redTitle = true

  return (
    <div className="App">
      <h1>Reac com CSS</h1>
      <h1 style={{ color: "red", border: "solid 2px blue" }} >Este Elemento possui Inline style</h1>
      <h1 style={n <= 10 ? { color: "Blue" } : { color: "red" }}>Css Dinamico</h1>
      <br />
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo tera classe dinamica</h2>
      <br />
      <h1>css Modulos...</h1>
      <br />
      <Title/>
      <h1 className='MyTitle'>Testando se vazou</h1>

    </div>
  );
}

export default App;
