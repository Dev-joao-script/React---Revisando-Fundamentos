import { useState } from "react"

const FirestCp = () => {

  const [number, setNumber] = useState(15);

  console.log(number)

  return (
    <div>
      <div>
        <p>novo valor: {number}</p>
        <button onClick={() => setNumber(24)}>Mudar Variavel</button>
      </div>
    </div>
  )
}

export default FirestCp