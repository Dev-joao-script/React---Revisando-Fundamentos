import './App.css';
import React, { useState } from 'react';
import FirestCp from './Components/FirestCp.js';
import RenderiarLista from './Components/Renderiar_Lista';
import PreviousState from './Components/previousState';
import RenderCondicionalSimples from './Components/RenderCondicionalSimples';
import RenderCondicionalTernario from './Components/RenderCondicionalTernario';
import Porps from './Components/Porps';
import DestructingProps from './Components/DestructingProps';
import ContainerChildrem from './Components/ContainerChildrem';
import ShowMessage from './Components/ShowMessage';
import ChangeMessage from './Components/ChangeMessage';

function App() {

  const carss = [
    {nome:"Lamborghine", km: 1000, color:"purple",  novo:true},
    {nome:"Lamborghine", km: 1000, color:"red",  novo:true},
    {nome:"Lamborghine", km: 1000, color:"gren",  novo:true},
    {nome:"Lamborghine", km: 1000, color:"black",  novo:true},
    {nome:"Lamborghine", km: 1000, color:"white",  novo:true}
  ]

const [messaage,setMessage] = useState("");

const handleMessage = (msg) => {
  console.log(msg);
  setMessage(msg);
  return msg;
}

  return (
    <div className="App">
      <h1>UseState</h1>
    <FirestCp/>
    <br />
    <h1>Renderizar lista</h1>
    <RenderiarLista/>
    <br />
    <h1>Previous state</h1>
    <PreviousState/>
    <br />
    <h1>Renderiação condicional simples</h1>
    <RenderCondicionalSimples/>
    <br />
    <h1>Renderiação condicional Ternario</h1>
    <RenderCondicionalTernario/>
    <br />
    <h1>Props </h1>
    <Porps name = "João" />
    <br />
    <h1>Props Destructing</h1>
    <DestructingProps name="Ferrari" km={1000} color="red" novo={false} />
    <br />
    <h1>Reaproveitando Componentes</h1>
    <DestructingProps name="Lamborghine" km={1000} color="purple"  novo={true}/>
    <DestructingProps name="Toiota" km={1000} color="yelow"  novo={true}/>
    <DestructingProps name="Honda" km={1000} color="gren"  novo={false}/>
    <DestructingProps name="Porche" km={1000} color="black"  novo={true}/>
    <h1>Lista em Loop</h1>
    {carss.map((cars, i) => (
      <div key={i}>
    <DestructingProps name={cars.nome} km={cars.km} color={cars.color}  novo={cars.novo}/>
      </div>
    ))}
    <br />
    <h1>Children content</h1>
    <ContainerChildrem>
      <p>este conteudo é inserido como se fosse um props so que é passado como um html</p>
    </ContainerChildrem>
    <h1>State lift</h1>
    <ShowMessage msg={messaage}/>
    <h5>este componente recebe e exibe o resultado da função que esta na pai</h5>
    <ChangeMessage MyhandleMessage={handleMessage}/>
    <h5>este componente recebe executa a função do pai e envia ao outro componente</h5>
    </div>
    
  );
}

export default App;
