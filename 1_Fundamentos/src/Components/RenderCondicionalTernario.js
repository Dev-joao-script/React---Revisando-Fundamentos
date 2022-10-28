import React from 'react'
import {useState} from 'react'

function RenderCondicionalTernario() {
    let [nome,setNome] = useState("João");

    const mudarPessoa = ()=>{
        if (nome === "João") {
            nome = "Pedro"
            console.log(nome)
        }else{
            nome = "João"
        }
        setNome(() =>{
            return nome;
        })
    }

  return (
    //passa o componente para o pai "fragment <>"
    <>
        {nome === "João" ? (
            <>
                <p>O nome é: joão</p>
            </>
        ): (            
        <>
            <p>O nome não é: joão</p>
        </>) }

        <button onClick={mudarPessoa} > Mudar Nome</button>
    </>
  )
}

export default RenderCondicionalTernario