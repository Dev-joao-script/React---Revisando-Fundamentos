import React from 'react'
import { useState } from 'react'

function RenderCondicionalSimples() {

    let [x,Stado] = useState(true);

    console.log(x)
    const mudarStado = () => {
        if(x === false) {
            x = true
        }else{
            x = false     
        }
        Stado(() => {
            return x;
        });
        }

    return (
        <div>
                <h5>Resultado</h5>
                    {/*isso é o if */}
                {x && <p>X é verdadeiro</p> }
                {!x && <p>X é Falso</p> }
                <button onClick={mudarStado}>Mudar estado</button>
        </div>
    )
}

export default RenderCondicionalSimples