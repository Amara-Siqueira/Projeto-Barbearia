import style from './cssRoutes/Cad.module.css'
import { useState } from 'react'
export const Cadastro = () => {
 
  const [form,setForm] = useState ({nome:"",email:"", senha:"",confirmSenha:"",dataNascimento:""})
  
  const [usuarios, setUsuarios] = useState([]);

  const Add = "http://localhost:3001/usuarios"
  const handlerSubmit= (e) =>{
    const dados = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      confirmSenha: form.confirmSenha,
      dataNascimento:form.dataNascimento
    }
      e.preventDefault()
      console.log(dados)
       if(form.confirmSenha === form.senha){
            console.log('ok!')
       }else{
      }
        async function adicionar() {      
            const verifica = await fetch(`${Add}?email=${form.email}`)
            const resultado = await verifica.json()
            if (resultado.length > 0) { 
                alert("Usuário já cadastrado!")
                return
            }else{
                     const req =  await fetch(Add,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify(dados)
                })
                const res = await req.json()
                  setUsuarios((prevUsuario) => [...prevUsuario,res])    
                      console.log(res)
                 setUsuarios([...usuarios, res.data]); 
            }
        
        }
        adicionar()
        
  }
  return (
    <div className={style.container}>
      
    <form onSubmit={handlerSubmit} className={style.form}>
     {
       form.senha && form.confirmSenha && form.senha !== form.confirmSenha && (
         <h1 className={style.alert}>As senhas devem ser iguais!</h1>
         )
}
        <label> 
          <span> Seu Nome Completo:   </span>
          <input type="text"
          onChange={(e) =>setForm({...form, nome:e.target.value })}       
          />
        </label>
        <label> 
           <span>Seu E-mail: </span>  
          <input type="email" 
          onChange={(e) =>  setForm({...form,email:e.target.value})}
          />
        </label>
        <label>
         <span>  Sua senha: </span>
          <input type="password"
            onChange={(e) => setForm({...form,senha:e.target.value})}
          />
        </label> 
        <label>
          <span> Confirme sua senha: </span>
          <input type="password"
            onChange={(e) => setForm({...form,confirmSenha:e.target.value})}
          />
        </label>
        <label>
          <span> Sua data de nascimento: </span>
            <input type="date"
            onChange={(e) => setForm({...form,dataNascimento:e.target.value})}
          />
        </label>
          <input type="submit" value="Cadastrar"  />
    </form>
    </div>
  )
}
