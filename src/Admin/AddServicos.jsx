import { useState,useEffect } from 'react'




export const AddServicos = () => {
    const [form, setForm]= useState({name:'',price:'',detalhes:'',imagem:''})
    
   async function enviar() {
                   const dados = {
        name:form.name,
        price:form.price,
        detalhes:form.detalhes,
        imagem:form.imagem
       }
       async () => {
              const req =  await fetch("http://localhost:3000/Pacotes",{
                    method:"POST",
                    headers:{
                        "Content-Type":"aplication/json",
                    },
                    body: JSON.stringify(dados)
                })
                const res = await req.json()
                    
       }
   }
    return (
    <div>
        <h1>Adicionar novos serviços!</h1>
            <form onSubmit={submitService}>  
                <label>Nome do serviço: 
                    <input type="text" onChange={(e) => setForm({...form,name: e.target.value})} />
                </label>
                <label>Imagem do serviço: 
                    <input type="url" onChange={(e) => setForm({...form,imagem: e.target.value})} />
                </label>
                 <label> Valor do serviço: 
                    <input type="text"   onChange={(e) => setForm({...form,price: e.target.value})}/>
                 </label>
                 <label >Descrição do serviço: 
                    <textarea  onChange={(e) => setForm({...form,detalhes: e.target.value})}></textarea>
                 </label>
                    <button>Adicionar o serviço!</button>
            </form>
    </div>
  )
}
