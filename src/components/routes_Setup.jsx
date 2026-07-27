import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import Navbar from './navbar'
import { useState } from 'react'
export const RoutesSetup = () => {
  const[ismailsent,setmailsent]=useState("")

  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home setmailsent={setmailsent} ismailsent={ismailsent}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact setmailsent={setmailsent} ismailsent={ismailsent}/>}/>
        </Routes>
    </>
  )
}
export default RoutesSetup