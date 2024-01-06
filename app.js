const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});
app.get('/aboutUs', (req,res) => {
    res.sendFile(__dirname + '/public/html/aboutUs.html');
});
app.get('/internship', (req,res) => {
    res.sendFile(__dirname + '/public/html/internship.html');
});
app.get('/contactUs', (req,res) => {
    res.sendFile(__dirname + '/public/html/contactUs.html')
});
app.post('/contactUs', (req,res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: 'info@techmedz.in',
        subject: `Message from ${req.body.name}`,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            res.send('error');
        } else{
            res.send('success');
        }
    });
});


app.get('/community', (req,res) => {
    res.sendFile(__dirname + '/public/html/community.html')
});
app.listen(3000, () => {
    console.log("Server Running on port 3000");
});