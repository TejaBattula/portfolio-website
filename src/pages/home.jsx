import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import About from './about'
import Projects from './projects'
import Contact from './contact'
export const Home= () => {
  const navigate = useNavigate()

  function handleAbout(){
    navigate('/about')
  }
  function handleProjects(){
    navigate('/projects')
  }
  return (
    <>

      <div className='home-page'>
        <div className="home-left">
          <div className="about-me">
            <h2><span style={{fontSize:"40px"}}>Hi!</span> I'm Tejaswini</h2>
            <h1>Full Stack Developer</h1>
            <p>I build responsive, modern, and user-friendly web applications using HTML,
               CSS, JavaScript, React, Node.js, and SQL.
                I'm passionate about solving real-world problems through technology and continuously
                 improving my skills in full-stack development and data structures.</p>
          </div>
          <div className="navigate-btns">
            <button onClick={handleAbout} className='about-btn'>About me</button>
            <button onClick={handleProjects} className='project-btn'>Projects</button>
          </div>
          <div className="social-media">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="home-right">
          <img src="main-image.png" alt="" />

        </div>
        
    </div>
    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>
    </>
  )
}
export default Home
