import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Editar  from './Editar.module.css'


export const EditarServicos = () => {
    const {id} = useParams()
   // const url = "" + id 
        const [servicos,setServicos ] = useState(null)
        const [name, setName] = useState ('')
        const [preco, setPreco]= useState ('')
        const [detalhe,setDetalhe] = useState('')


        useEffect(()=>{
        async function requisicao() {
           const req =  await fetch(`http://localhost:3000/Pacotes/${id}`)
            const res =  await req.json()
            setServicos(res)
            setName(res.name),
            setPreco( res.preco)
            setDetalhe(res.detalhes)
        }
        requisicao()
        },[id])
        if (!servicos) {
  return <h1>Seus dados estão sendo carregados!</h1>
}

    const  handleSubmit = async (e) => {
        e.preventDefault()
            const dadosAtualizado = {
                name:name,
                preco:preco,
                detalhes:detalhe
            }
        try {
              const atualizar = await fetch(`http://localhost:3000/Pacotes/${id}`,{
            method:"PUT",
                headers: {
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(dadosAtualizado)
          })  
           if (atualizar.ok) {
        alert('Serviço atualizado com sucesso!')
      } else {
        alert('Erro ao atualizar serviço.')
      }
        } catch (error) {
            console.log( 'Deu erro!'+error.message)
        }
    }


    return (    
        <div>
            {   
                !servicos && <h1>Seus dados estão carregando!</h1>
            }
            <div className={Editar.editInfos}>
        <h1>Editar informações!</h1>

                    <h2>Editando serviço  <strong> {servicos.name}</strong></h2>
                        <form onSubmit={handleSubmit} >
                                <label>Nome do Serviços:
                                     <input type="text" placeholder={servicos.name}  onChange={(e) => setName(e.target.value)}   /> 
                                        </label>
                                <label>Preço do Serviços: <input type="text"  placeholder={servicos.preco}  onChange={(e) => setPreco(e.target.value)}   /> </label>
                                    <label>Descrição do serviço
                                        <textarea name="descricao" id="" placeholder={servicos.detalhes}  onChange={(e) => setDetalhe(e.target.value)}  > </textarea>
                                    </label>
                                    <button type='submit'>Alterar!</button>
                        </form>

            </div>
    </div>
  )
}
