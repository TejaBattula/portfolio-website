require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb Connected");
    
})
.catch((error)=>{
    console.log("Failed to connect with MongoDB",error);
    
})

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("✅ Email server is ready");
    }
});
const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    subject : String,
    message : String
    },{
        timestamps : true
    }
)

const contact = mongoose.model("contact",contactSchema)


app.post("/contact",async(req,res)=>{
    
    
    
    try {
        const { name, email,subject, message } = req.body;
        const Contact = new contact(req.body);
        console.log(req.body);

        await Contact.save()
        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
        
            subject: "📩 New Portfolio Contact",
        
            html: `
                <h2>Someone contacted you!</h2>
        
                <p><b>Name:</b> ${req.body.name}</p>
        
                <p><b>Email:</b> ${req.body.email}</p>
        
                <p><b>Subject:</b> ${req.body.subject}</p>
        
                <p><b>Message:</b></p>
        
                <p>${req.body.message}</p>
            `
        });

        res.status(201).json({
            success : true,
            message : "Message saved successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
        
    }
})
app.get('/',(req,res)=>{
    res.send("Successfully connected to server");
})

app.listen(3001,()=>{
    console.log("server is running on port 3000!");
    
})