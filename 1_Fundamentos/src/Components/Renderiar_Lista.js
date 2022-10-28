import React from 'react'
import {useState} from 'react'

function RenderiarLista() {

    const[list] = useState(["joão","carlos", "andre"]);

  return (
    <div>
        <p>Renderiação de lista (array) dentro do react</p>
        <ul>
            {list.map((iten, i) => (
                <li key={i}>{iten}</li>
                ))}
        </ul>
    </div>
    /*muito importante prestar atenção na chave unica do map(i) = index*/
  )
}

export default RenderiarLista