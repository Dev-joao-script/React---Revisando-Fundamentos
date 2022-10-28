import React from 'react'

const DestructingProps = ({name, km, color, novo}) => {
  return (
    <div>
        <ul>
            <li>
                <p>marca: {name} </p>
            </li>
            <li>
                <p>rodagem: {km} </p>
            </li>
            <li>
                <p>cor: {color} </p>
            </li>
            { novo ? (
                <li>
                    <p>Este carro é Novo</p>
                </li>
            ) : (
                <li>
                <p>Este Carro é Semi Novo</p>
            </li>
            )
            }
        </ul>
        <br />
    </div>
  )
}



export default DestructingProps
