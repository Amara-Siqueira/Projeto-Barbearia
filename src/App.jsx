
import './App.css'
import {Navbar}from'./Componetes/Navbar'
import {Footer} from './Componetes/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Outlet /> 
    <Footer/>
    </div>
    </>
  )
}

export default App
