import React from 'react'
import './about.css'
export const About = () => {
  return (
    <div className='about-page'>
      <div className="about-title">About Me</div>
      <div className='about-card'>
        <div className='about-section'>
        <p className='about-info'>I'm a B.Tech student with a strong interest in web development and software engineering.
          I enjoy turning ideas into interactive and scalable applications. Alongside full-stack development,
          I actively practice Data Structures and Algorithms
          to strengthen my problem-solving skills for software engineering roles.</p>
          <div className='skill-rating'>
            
            <div>
              <p>Frontend</p>
              <div className='frntd-per'></div><span>75%</span>
            </div>
            <div>
              <p>Backend</p>
              <div className='bcknd-per'></div><span>50%</span>
              
            </div>
            <div>
              <p>Database</p>
              <div className='db-per'></div><span>50%</span>
              
            </div>
          </div>
        </div>
        <div className="know-technologies">
          <div className="skill-card">
          <p className='skill-head'>Skills</p>
            <div className="skill-title">Frontend

            </div>
            <div className="skill-info">
              <div className="skill-img"><img  src="html.png" alt="" /><p>HTML</p></div>
              <div className="skill-img"><img  src='css.png'/><p>CSS</p></div>
              <div className="skill-img"><img  src='js.png'/><p>JavaScript</p></div>
              <div className="skill-img"><img  src='react.png'/><p>React js</p></div>
            </div>
          </div>
          <div className="skill-card">
              <div className="skill-title">Backend

              </div>
              <div className="skill-info">
               
                <div className="skill-img"><img  src='nodejs.png'/><p>Node js</p></div>
              </div>
          </div>
          <div className="skill-card">
            <div className="skill-title">Database</div>
            <div className="skill-info">
            <div className="skill-img"><img  src='mysql.png'/><p>MySQL</p></div>
            </div>
            
          </div>
        </div>
      </div>


    </div>
  )
}
export default About