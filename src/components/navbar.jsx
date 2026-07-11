import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  const [istoggleActive,settoggleActive] = useState(false)
  
  
  const handleToggle =()=>{
    console.log(istoggleActive);
    
    settoggleActive(prev => !prev);
    console.log(istoggleActive);
    
  }
  return (
    <div className='navbar'>
        <div className="nav-title">
          
          <span>Battula Tejaswini</span>
        </div>
        <nav className={istoggleActive?"nav-options toggle-bar":"nav-options"}>
            <NavLink className={({isActive})=>(isActive ? "nav-item active" : "nav-item")} to='/'>Home <div className='nav-load-line'></div></NavLink>
            <NavLink className={({isActive})=>(isActive ? "nav-item active" : "nav-item")} to='/about'>About <div className='nav-load-line'></div></NavLink>
            <NavLink className={({isActive})=>(isActive ? "nav-item active" : "nav-item")}  to='/projects'>Projects <div className='nav-load-line'></div></NavLink>
            <NavLink className={({isActive})=>(isActive ? "contact-btn active" : "contact-btn")}  to='/contact'>Contact <div className='nav-load-line'></div></NavLink>

        </nav>
        <div className="toggle-target">
          <i onClick={handleToggle} className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Navbar