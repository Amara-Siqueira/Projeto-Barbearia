// import React, { useEffect, useState } from 'react'
import { useState,useEffect } from 'react'

import { useFetch } from '../hooks/useFetch'
import { BtnComp } from '../Botaoes/BtnComp'
import style from './cssRoutes/Servicos.module.css'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/Pacotes"
export const Servicos = () => {
const [get , setGet] = useState([])
  const [loading ,  setLoading] = useState(false)  
   const [select , setSelect] = useState()

useEffect(()=>{
 try {
  setLoading(true)
  async function reqDados () {
    const req = await fetch(url)
    const res   = await req.json()
    setGet(res)
    setLoading(false)
  } reqDados()
  } catch (error) {
      console.error(error.message)
  }
},[])

async function selectServico(id) {
    const req = await fetch(`${url}/${id}`)
      const res = await req.json()  
      
    console.log(res)
  }


  return (
    <div className={style.containerServicos}>
      {loading && <h1>Seus dados estâo carregando!</h1>}
        {
          get && get.map((dados) =>(
            <li key={dados.id}>
             Seviços: <h1> {dados.name}   </h1> 
              <img src={dados.imagem} alt="bannerServiço" className={style.img} />
              <br/>
             Preço: {dados.preco}    <br/>
              <p className={style.detalhes}>{dados.detalhes}   
                  <br/>
               <Link to={`servicos/${dados.id}/selecionar`}> 
              <button className={style.agendar}  onClick={() => selectServico(dados.id)}  > Agendar</button>
                  </Link>  
                </p> 
                <br/>
            </li> 
          ))
        }
    

    </div>
  )
}
