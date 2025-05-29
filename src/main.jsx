import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Navigate} from 'react-router-dom'
import App from './App.jsx'
import {Home} from'./Routes/Home.jsx'
import {Cadastro }from'./Routes/Cadastro.jsx'
import {Login} from './Routes/Login.jsx'
import {Servicos} from './Routes/Servicos.jsx'
import {ErrorPage} from './Componetes/ErrorPage.jsx'
import { Dashboard } from './Admin/Dashboard.jsx'
import { EditarServicos } from './Admin/EditarServicos.jsx'
import { Selecionar_servicos } from './Routes/selecionar_servicos.jsx'

import {Perfil} from './Users/Perfil.jsx'
import { UserContextProvider } from './context/UserContext.jsx'



const router =  createBrowserRouter([
    {
      path:"/",
      element:<App/>,
       errorElement:<ErrorPage/>,
      children:[
         {
           path:"cadastro",
           element:<Cadastro/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"servicos",
          element: <Servicos/>
        },
        {
          path:"/",
          element:(
    <>
      <Home />
      <Servicos />
    </>
  )
        },
        {
          path:"*",
          element: <Home/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
      {
        path:"/servicos/:id/editar",
        element:<EditarServicos/>
      },
      {
        path:"servicos/:id/selecionar",
        element: <Selecionar_servicos/>
      },
      {
        path:"/perfil/:id",
        element: <Perfil/>
      }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider> 
      <RouterProvider router={router} />
    </UserContextProvider>
  

  </StrictMode>,
)
