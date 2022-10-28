const ChangeMessage = ({MyhandleMessage}) => {

    const msg = [
        "Ola joão, continue se esforçando, vc vai conseguir!!",
        "Ola joão, Não desista nunca!!",
        "Ola joão, acredite em si mesmo, vai dar tudo certo!",
    ]

  return (
    <div>
        <button onClick={() => MyhandleMessage(msg[0])}>cansado</button>
        <button onClick={() => MyhandleMessage(msg[1])}>muito cansado</button>
        <button onClick={() => MyhandleMessage(msg[2])}>cansado pra kralho</button>
    </div>
  )
}

export default ChangeMessage