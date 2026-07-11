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
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_KEY
    }
});


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
    console.log("====== CONTACT ROUTE HIT ======");

    try {
        console.log("Saving...");
        const contact = new Contact(req.body);
        await contact.save();

        console.log("Saved!");

        console.log("Sending email...");

        const info = await transporter.sendMail({
            from: process.env.BREVO_LOGIN,
            to: "kbattula059@gmail.com",
            subject: "Test Mail",
            text: "Hello from Render"
        });

        console.log("Mail sent!");
        console.log(info);

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