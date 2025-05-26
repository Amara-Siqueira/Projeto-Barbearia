// 
import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './cssRoutes/Selecionar.module.css'

export const Selecionar_servicos = () => {
  const { id } = useParams()
  const url = `http://localhost:3000/Pacotes/${id}`
  const [get, setGet] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const reqDados = async () => {
      try {
        setLoading(true)
        const req = await fetch(url)
        const res = await req.json()
        setGet(res)
        setLoading(false)
      } catch (error) {
        console.error(error.message)
        setLoading(false)
      }
    }
    reqDados()
  }, [url])

  return (
    <div className={style.container}>
      <div className={style.selectServicos}>
      {loading && <h1>Carregando...</h1>}
      {get && (
        <div>
          <h1>Serviço Selecionado</h1>
        <h2>Serviço: {get.name}</h2>
        <h2>Preço: {get.preco}</h2>
        </div>
      )}
      </div>
    </div>
  )
}
