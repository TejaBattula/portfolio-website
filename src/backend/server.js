require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {Resend} = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb Connected");
    
})
.catch((error)=>{
    console.log("Failed to connect with MongoDB",error);
    
})

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     family: 4,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     },
//     connectionTimeout: 10000,
//     greetingTimeout: 10000,
//     socketTimeout: 10000,
// });
console.log("Email:", process.env.EMAIL);
console.log("password:", !!process.env.RESEND_API_KEY);

// transporter.verify((err, success) => {
//     if (err) {
//         console.error("VERIFY ERROR:");
//         console.error(err);
//     } else {
//         console.log("nodemailer Connected!");
//     }
// });
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

const Contact = mongoose.model("Contact",contactSchema)


app.post("/contact", async (req, res) => {
    console.log("====== CONTACT ROUTE HIT ======");

    try {
        console.log("Saving request...");
        const contact = new Contact(req.body);
        await contact.save();

        console.log("Saved!");

        console.log("Sending email...");

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.EMAIL,
            subject: "New Portfolio Contact",
            html: `
              <h2>New Contact Form Submission</h2>
          
              <p><b>Name:</b> ${req.body.name}</p>
          
              <p><b>Email:</b> ${req.body.email}</p>
          
              <p><b>Subject:</b> ${req.body.subject}</p>
          
              <p><b>Message:</b></p>
          
              <p>${req.body.message}</p>
            `,
          });
          
          console.log("Email sent!");

        console.log("Mail sent!");

        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

app.get('/',(req,res)=>{
    res.send("Successfully connected to server");
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}!`);
    
})