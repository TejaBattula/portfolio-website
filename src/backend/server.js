require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');


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

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,         // Using secure SSL port
    secure: true,      // true for port 465
    family: 4,         // Forces IPv4 (Crucial: Render often times out trying to use IPv6 with Gmail)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Your 16-character App Password without spaces
    }
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);


transporter.verify((error, success) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Email server is ready!!");
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

const Contact = mongoose.model("Contact",contactSchema)


app.post("/contact", async (req, res) => {
    console.log("==== /contact route hit ====");
    console.log(req.body);
    
    try {
        // 1. Save data to Database
        const contact = new Contact(req.body);
        await contact.save();
        console.log("Data saved to DB:", req.body);

        // 2. Send email notification (Wrapped securely so database doesn't break if mail fails)
        try {
            console.log("Attempting to send email...");
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "📩 New Portfolio Contact",
                html: `
                    <h2>Someone contacted you!</h2>
                    <p><b>Name:</b> ${req.body.name}</p>
                    <p><b>Email:</b> ${req.body.email}</p>
                    <p><b>Subject:</b> ${req.body.subject}</p>
                    <p><b>Message:</b> ${req.body.message}</p>
                `
            });
            console.log("Mail sent successfully! Message ID:");
        } catch (mailError) {
            // This logs the exact, explicit reason Gmail rejected it in Render's logs
            console.error("❌ CRITICAL MAIL ERROR:", mailError.message);
        }

        res.status(201).json({
            success: true,
            message: "Message saved successfully"
        });

    } catch (dbError) {
        console.error("❌ DATABASE OR ROUTE ERROR:", dbError.message);
        res.status(500).json({
            success: false,
            message: dbError.message
        });
    }
});

app.get('/',(req,res)=>{
    res.send("Successfully connected to server");
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}!`);
    
})