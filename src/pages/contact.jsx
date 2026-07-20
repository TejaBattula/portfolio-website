import { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const[ismailsent,setmailsent]=useState("")
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
      console.log(form);
      
      const response = await fetch("https://portfolio-website-ld5u.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data =await response.json();
      if(data.success==true){
        setmailsent("true")
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      else{
        setmailsent("false")
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      setform({
        name :"",
        email : "",
        subject : "",
        message : ""
      })
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
            value={form.name}
            placeholder="Your Name"
            onChange={(e)=>{handleChange(e)}}
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}

            placeholder="Your Email"
            onChange={(e)=>{handleChange(e)}}

            required
          />

          <input
            type="text"
            name="subject"
            value={form.subject}

            placeholder="Subject"
            onChange={(e)=>{handleChange(e)}}

            required
          />

          <textarea
            rows="6"
            name="message"
            value={form.message}

            placeholder="Your Message"
            onChange={(e)=>{handleChange(e)}}

            required
          ></textarea>

          <button type="submit" onClick={(e)=>{handleSubmit(e)}}>
            Send Message
          </button>
        </form>

      </div>
      {
        ismailsent=="true"?<div className="mail-message">
        <p>Thank you for reaching out! 🎉</p>
        <p>Your message has been sent successfully. I'll review it and get back to you as soon as possible.</p>
        <button onClick={()=>{setmailsent("")}}>cancel</button>
        </div>:ismailsent=="false"?<div className="mail-message">
        <p>Something went wrong.</p>
        <p>Your message couldn't be sent. Please try again later or contact me directly at tejaswinibattula9@gmail.com.</p>
        <button onClick={()=>{setmailsent("")}}>cancel</button>
      </div>:""
      }
    </section>
  );
};

export default Contact;