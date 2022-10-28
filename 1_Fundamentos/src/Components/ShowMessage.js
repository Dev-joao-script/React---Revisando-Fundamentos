const ShowMessage = ({msg}) => {
  return (
    <div>
        {msg === null || msg === "" ? (
<div>
    <h3>
        Não temos mensagem alguma no momento!!!
    </h3>
</div>
        ) : (
<div>
    <h3>
        {msg}
    </h3>
</div>
        )}
    </div>
  )
}

export default ShowMessage