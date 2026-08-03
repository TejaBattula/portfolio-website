import React from 'react'
import "./projects.css"
const Projects = () => {
  return (
    <div className='project-page'>
      <div className="project-title">Projects</div>
      <div className='project-body'>
      <div className="project-card">
        <div className="project-card-title">
          <img src="technologies.png" alt="" />
        </div>

        <div className="project-card-body">

          <span>Jnapika - E-commerce Gifting Platform</span>

          <p>
            A full-stack e-commerce gifting platform that allows users to explore
            gifts. The application
            provides product browsing, user authentication, wishlist, cart
            management, profile updates, and order processing with a responsive and
            user-friendly interface.
          </p>

          <span>Tools & Skills</span>

          <p>
            React.js | JavaScript | Node.js | Express.js | Mongoose |
            REST API |  Git
          </p>

          <div className="project-card-body-text">
            <a 
              href="jnapika.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

        </div>
      </div>
      <div className="project-card">
        <div className="project-card-title">
          <img src="e-commerce.png" alt="" />
        </div>
        <div className="project-card-body">
        
            <span>E-Commerce website</span>
            <p>A full-stack e-commerce web application featuring user authentication,
      , shopping cart management, secure checkout, responsive and user-friendly interface.</p>
            <span>Tools & Skills</span>
            <p>React | Node | Express | MongoDB</p>
          
          <div className="project-card-body-text">
            <a href="https://e-commerce-shopping-app22.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-title">
          <img src="e-commerce.png" alt="" />
        </div>
        <div className="project-card-body">
        
            <span>E-Commerce website</span>
            <p>A full-stack e-commerce web application featuring user authentication,
      , shopping cart management, secure checkout, responsive and user-friendly interface.</p>
            <span>Tools & Skills</span>
            <p>React | Node | Express | MongoDB</p>
          
          <div className="project-card-body-text">
            <a href="https://e-commerce-shopping-app22.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-title">
          <img src="weather.png" alt="" />
        </div>
        <div className="project-card-body">
        
            <span>Weather App</span>
            <p> A responsive weather application that provides real-time weather
      information, including temperature, humidity, wind speed, and weather
      conditions for any city using a weather API.</p>
            <span>Tools & Skills</span>
            <p>React | JavaScript | HTML | CSS | OpenWeather API | REST API</p>
          
          <div className="project-card-body-text">
            <a href="https://weather-forecast-dashboard-live.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
      
      
      <div className="project-card">
        <div className="project-card-title">
          <img src="todolist.png" alt="" />
        </div>
        <div className="project-card-body">
        
            <span>Task Manager</span>
            <p> A task management application that allows users to add, edit, delete,
      and mark tasks as completed. It helps users organize their daily work
      with a clean and responsive interface.</p>
            <span>Tools & Skills</span>
            <p>React | Node | Express | MongoDB | Postman</p>
          
          <div className="project-card-body-text">
            <a href="https://to-do-list-maker59.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-title">
          <img src="technologies.png" alt="" />
        </div>
        <div className="project-card-body">
        
            <span>Food App</span>
            <p>A responsive food ordering web application that allows users to browse
      menu items, view product details, add items to the cart, and manage
      their orders through an interactive and user-friendly interface.
    </p>
            <span>Tools & Skills</span>
            <p>HTML | CSS | JavaScript | DOM Manipulation | Responsive Design</p>
          
          <div className="project-card-body-text">
            <a href="https://food-app-49d848.netlify.app" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects