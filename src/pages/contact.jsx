import { useState } from "react";
import "./contact.css";

export const Contact = () => {

  const [form,setform] = useState({
    name :"",
    email : "",
    subject : "",
    message : ""
  })

  const handleChange = (e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    const data =await response.json();
    console.log(data);
    
   
  };  

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">
        Contact <span>Me</span>
      </h1>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new projects, internships,
            freelance work, or full-time opportunities.
          </p>

          <div className="info">
            <h4>Email</h4>
            <p>tejaswinibattula9@gmail.com</p>
          </div>

          <div className="info">
            <h4>Phone</h4>
            <p>+91 8978899132</p>
          </div>

          <div className="info">
            <h4>Location</h4>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={(e)=>{handleChange(e)}}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={(e)=>{handleChange(e)}}

            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e)=>{handleChange(e)}}

            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            onChange={(e)=>{handleChange(e)}}

            required
          ></textarea>

          <button type="submit" onClick={(e)=>{handleSubmit(e)}}>
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;