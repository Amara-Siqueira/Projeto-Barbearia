import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import style from './EstiloCss/Perfil.module.css'
import { AiOutlineMenu } from "react-icons/ai";

export const Perfil = () => {
 const { name } = useContext(UserContext)
const {email} = useContext(UserContext)
  const [menuAberto, setMenuAberto] = useState(false);
const [date, setDate] = useState(new Date());


  console.log(name,email)
    const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className={style.container}>
       <button>
          <AiOutlineMenu 
        onClick={toggleMenu} 
        size={30} 
        style={{ cursor: 'pointer' }}
        className={style.menu}
      />
       </button>
          {menuAberto && (
      <div className={style.perfil}>
          <h1 className={style.titlePremium} >Perfil </h1>
              <div className="foto">foto de perfil   aqui</div>
                   <h2> Usuario: <strong>{name}</strong></h2>
                      <p>{email}</p>
                      <p>telefone do usuario</p>  
              <div className="proxAgendamento">
                  
                      <p>Horário</p>
                      <p>Serviço</p>
        </div>
      </div>
      )}
     
        <div className={style.agendamentos} >
           <div className="promo">
                <h2 className={style.titlePremium}>
                  Promoçoes ativas
                  </h2>
            </div>
            <h2 className={style.titlePremium}>
             calendario
             </h2>   
                <form>
                  <label>  Marque uma data: </label>
                       <input type="date"onChange={(e) => setDate(new Date(e.target.value))} />
                        <input type="submit"  value="Marcar Horario"/>
                    <h2>
                      Data marcada: {date ? date.toLocaleDateString('pt-BR') : 'Nenhuma data selecionada'}
                    </h2>
                      </form>
               
        </div>
    </div>
  )
}
