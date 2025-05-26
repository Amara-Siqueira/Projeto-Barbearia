import React from 'react'
import { BtnComp,BtnConfig } from '../Botaoes/BtnComp'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './Dashboard.module.css'

export const Dashboard = () => {
 // const url = "http://localhost:3000/Pacotes"
 const url = "http://localhost:3000/Pacotes"
 
  const [servicos , setServicos] = useState()
  const [form, setForm]= useState({name:'',preco:'',detalhes:'',imagem:''})
       
    const config = BtnComp(BtnConfig)
    const modal = (id) => {
    console.log("modal clicado = " + id )
    }
      useEffect(() =>{
          async function requisiscao () {
     const reqDados = await fetch(url)
          const res =  await reqDados.json()
        console.log(res)
          setServicos(res)
  }
  requisiscao()
      },[])

//Adicionar 
 async function enviar(e) {
    e.preventDefault()

  const dados = {
        name:form.name,
        preco:form.preco,
        detalhes:form.detalhes,
        imagem:form.imagem
       }

              const req =  await fetch(url,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify(dados)
                })
                const res = await req.json()
                  setServicos((prevServicos) => [...prevServicos,res])    
                      console.log(res)
 
  
      }

      async function deletarServico(id) {
  const confirmar = window.confirm("Tem certeza que deseja deletar este serviço?")
  if (!confirmar) return

  const req = await fetch(`${url}/${id}`, {
    method: "DELETE",
  })

  if (req.ok) {
    setServicos(prevServicos => prevServicos.filter(servico => servico.id !== id))
  } else {
    console.error("Erro ao deletar o serviço")
  }
}
  return (
    <div>
        <div className={style.Cpanel}>
            <h1>Painel de controle</h1>
              <h2>Seus serviços atuais</h2>
                <div className={style.servicos}>
                  {!servicos && <h1>Seus dados ta sendo carregado!</h1>}
                  <ul>
                  {
                    servicos && servicos.map((services) => (
                      <li key={services.id}>
                      Serviços : <strong> {services.name}</strong>
                      <br />
                      Preço: <strong>{services.preco}</strong> reais <br />
                        <Link to={`/servicos/${services.id}/editar`}>Editar</Link>
                        <button onClick={() => deletarServico(services.id)} className={style.btnDel}>Deletar</button>

                      <br />
                      <br />
                      <hr /> 
                    </li>
                   ))   
                  }
                  </ul>
            <form className={style.formAdd}>  
                      <h1>Adicionar novos serviços!</h1>
                <label>Nome do serviço: 
                    <input type="text" onChange={(e) => setForm({...form,name: e.target.value})} />
                </label>
                <label>Imagem do serviço: 
                    <input type="url" onChange={(e) => setForm({...form,imagem: e.target.value})} />
                </label>      
                 <label> Valor do serviço: 
                    <input type="text"   onChange={(e) => setForm({...form,preco: e.target.value})}/>
                 </label>
                 <label >Descrição do serviço: 
                    <textarea  onChange={(e) => setForm({...form,detalhes: e.target.value})}></textarea>
                 </label>
                    <button onClick={enviar} className={style.adicionar}  >Adicionar o serviço!</button>
            </form>
                </div>
             
        </div>

    </div>
  )
}
