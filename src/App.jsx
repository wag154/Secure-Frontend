import { useState } from 'react'
import './App.css'
import {Navbar} from "./components"
import {Home,Access, NotFound} from "./pages"
import { Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <Routes>
      <Route path = "/" element = {<Navbar />}>
        <Route index element = {<Home />}/>
        <Route path= "/access" element = {<Access />}/>
        <Route path = "*" element ={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
export default App
