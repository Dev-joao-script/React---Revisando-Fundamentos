import './App.css';
import MyFormulario from './Component/MyFormulario';


function App() {
  return (
    <div className="App">
      <h1>Formulario</h1>
      <MyFormulario user={{name: "João Otavio", email: "joao@email.com.br", bio:"Sou um Desenvolvedor", role:"Editor"}}/>
    </div>
  );
}

export default App;
