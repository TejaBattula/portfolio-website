import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import Navbar from './navbar'
export const Routes_Setup = () => {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}
export default Routes_Setup