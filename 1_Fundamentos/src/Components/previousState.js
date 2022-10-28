import React from 'react';
import {useState} from 'react';


function PreviousState() {

    const[users, setUsers] = useState([
        {id:0,nome: "João Otavio",idade:31},
        {id:1,nome: "Maria Luiza",idade:21},
        {id:2,nome: "Emanuele Silva",idade:24},
        {id:3,nome: "Matheus Garcia",idade:21}
    ]);

    const deleteRandom = () =>{
        const randomNumer = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumer !== user.id);
        })
    }

  return (
    <div>
         <ul>
            {users.map((user) => (
                <li key={user.id}>Nome: {user.nome}, idade: {user.idade}</li>
                ))}
        </ul>
        <button onClick={deleteRandom}>Deletar Aleatorio</button>
    </div>
  )
}

export default PreviousState