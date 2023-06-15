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
        
        {!passCode && null
      }
        <Route path = "*" element ={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
export default App
