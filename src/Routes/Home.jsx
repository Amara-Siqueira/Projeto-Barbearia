import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../imagens_Gifs/bgHeader.gif'
import style from './cssRoutes/Home.module.css'
export const Home = () => {
  return (
    <div>
      <div className={style.banner}>
        <div className={style.ovelay}></div>
          <div className={style.intro}>
            <h1>Bem vindo </h1>
            <h2>Barbearia Club da lâmina  </h2> 
          </div>
              <img src={gif} alt="Homem fazendo a barba em gif" className={style.gif} />
      </div>
      <button><Link to={'/login'} >Login/Cadastrar</Link></button>

    </div>
  )
}
