import { useContext, useState,useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import style from './EstiloCss/Perfil.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Perfil = () => {
 const { name } = useContext(UserContext)
const {email} = useContext(UserContext)
  const [menuAberto, setMenuAberto] = useState(false);
const [date, setDate] = useState(new Date());
const [telefone,setTelefone] = useState("")
const [servico,setServico] = useState("")
const [horario ,setHorario] = useState("")
const {id} = useParams()

const url = `http://localhost:3001/usuarios/${id}`  
// loop de req 
 useEffect(()=>{
   async function requisao() {
        const req = await fetch(url)
          const res = await req.json()
          setTelefone(res.telefone)
          setServico(res.agendamentos[0].servico)
        setHorario(new Date(res.agendamentos[0].date).toLocaleDateString('pt-BR'))
   }
   requisao()
 },[url])

  const navigate = useNavigate();
  useEffect(() => {
    const user = name
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

async function selectServicos(e) {
const marcaHorario= {
    date:date

}
  e.preventDefault()
try {
     const req = await fetch(url)
     const user = await req.json()
    const atualizar =  await fetch(url,{
      method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(marcaHorario)
      
      })
      async (value) => {
        setDate((prev)  => {
          return{...prev,[id]:value}
        })
      }
    if(atualizar.ok){
    }
} catch (error) {
  alert("ocorreu um erro " + error)
}

    }
  

 
    const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className={`${style.container} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
       <button>
          <AiOutlineMenu 
        onClick={toggleMenu} 
        size={30} 
        style={{ cursor: 'pointer' }}
        className={style.menu}
      />
       </button>
          {menuAberto && (
      <div className={`${style.perfil} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
          <h1 className={style.titlePremium} >Perfil </h1>
              <div className="foto">foto de perfil   aqui</div>
                   <h2> Usuario: <strong>{name}</strong></h2>
                  <h2>{email}</h2>
                     <h2>Whatsapp: {telefone} </h2>
              <div className="proxAgendamento">
                  <h1>Agendamento atual</h1>
                      <h2>Horário {horario} </h2>
                      <h2>Serviço {servico} </h2>
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
                <form onSubmit={selectServicos}>
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
