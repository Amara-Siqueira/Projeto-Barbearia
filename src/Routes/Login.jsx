import React from 'react'
import { useState  } from 'react'
import { BtnComp } from '../Botaoes/BtnComp'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import style from './cssRoutes/Login.module.css'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Login = () => {
  const {id} =  useParams()
    const navigate =  useNavigate() 
  const [form,setForm] = useState({email:'',senha:''})
  const Add = `http://localhost:3001/usuarios/`
    const {name,setName} = useContext(UserContext)
    const {email,setEmail } = useContext(UserContext)
    const {date,setDate } = useContext(UserContext)
    
  async function handlerLogin(e)  {
    e.preventDefault()
    const logando = {
        email: form.email,
        senha: form.senha
    }
  try {
    const res = await fetch(`${Add}?email=${form.email}&senha=${form.senha}`)
    const data = await res.json()
    const usuario = data[0]
    setName(usuario.nome)
    setEmail(usuario.email)
    setDate(usuario.agendamento)
    if (data.length == 1) {
      alert(`Bem-vindo(a), ${data[0].nome}!`)
          navigate(`/perfil/${data[0].id}`)
    } else {
      alert("Email ou senha inválidos!")
    }
  } catch (error) {
    alert("Erro no login: " + error)
  }
   }
  return (
    <form className={`${style.Form } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}method='POST'>
   <div className={style.FormLogin}>
       <label>
          Seu email: 
        <input type="text"
       value={form.email} 
          onChange= {(e) => setForm({...form, email:e.target.value})}
         />
      </label>
       <label>
          Sua senha: 
        <input type="password" 
     value={form.senha}
        onChange={(e) => setForm({...form,senha:e.target.value})}
        />
      </label>
      <button onClick={handlerLogin} className={style.btn} > Logar!</button>
      <p>Não tem conta? <Link to={'/cadastro'} >Cadastra-se</Link> </p>
   </div>
    </form>
  )
}
