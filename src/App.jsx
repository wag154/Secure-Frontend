import { useState } from 'react'
import './App.css'
import {Navbar,Already} from "./components"
import {Home,Access, NotFound} from "./pages"
import { Route, Routes } from 'react-router-dom'
import { usePassCode } from './Context'
import { useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  const {passCode} = usePassCode();
  return (
    <Routes>
      <Route path = "/" element = {<Navbar />}>
        <Route index element = {<Home />}/>
        <Route path= "/access" element = {<Access />}/> 
        <Route path = "*" element ={<NotFound/>}/>
        
        {!passCode && 
        <Routes>
        <Route path = "/dashboard" element = {}/>
        <Route path = "/projects" element = {}/>
        </Routes>
      }
      </Route>
    </Routes>
  )
}
export default App
