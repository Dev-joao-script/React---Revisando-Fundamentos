import erroImg from '../assets/erro.gif';
import style from './Componenterror.module.css';

const Componenterror = (Myerror) => {
    <div className={style.erroclass}>
      <p><img src={erroImg} alt='Erro'></img>{Myerror}</p>
    </div>
}


export default Componenterror