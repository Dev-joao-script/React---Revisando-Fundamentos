import style from './MyFormulario.module.css'
import {useState} from 'react'

const MyFormulario = ({user}) => {

    const [name,setName] = useState(user ? user.name : '')
    const [email,setEmail] = useState(user ? user.email : '')
    const[bio,setBio] = useState(user ? user.bio : '')
    const[role,setRole] = useState(user ? user.role : '')

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(name,email);
        console.log(bio);

        //Limpar Formulario
        setEmail("");
        setName("");
        setBio("");
        setRole("");
    }

console.log(name);
console.log(email);
console.log(bio);
console.log(role);

    return (
        <div >
            <div>
                <form className={style.MyStye} onSubmit={handleSubmit}>
                    {/*primeira forma de usar a latel */}
                    <label htmlFor="mname">Nome:</label>
                    <input type="text" name="mname" placeholder="Digite o seu nome..." value={name} onChange={(e) => setName(e.target.value)} />

                    {/*segunda forma de usar a latel */}
                    <label >
                        <span htmlFor="email">Email:</span>
                        <input type="Email" name="email" placeholder="Digite o seu E-mail..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <span htmlFor="Bio">Biografia</span>
                            <textarea name="Bio" placeholder='Descrição do usuario...' value={bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                    </label>
                    <label >
                        <span htmlFor="">Função no sistema</span>
                        <select name="role" value={role} onChange={(e) => e.target.value}>
                            <option value="">Selecione um valor!</option>
                            <option value="User">User</option>
                            <option value="Editor">Editor</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>
                    <input type="submit" value="Enviar" />

                </form>
                </div>
        </div>
    )
}

export default MyFormulario