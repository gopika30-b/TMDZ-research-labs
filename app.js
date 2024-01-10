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
app.post('/contactUs', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    const mailOptions = {
        to: 'info@techmedz.in',
        subject: `Contact Form - Message from ${req.body.name}`,
        text: "Name: " + req.body.name + "\n" + "Phone Number: " + req.body.phone + "\n" + "Email Id: " + req.body.email + "\n\n" + req.body.message
    };
    const confirmationMailOptions = {
        to: req.body.email,
        subject: 'TMDZ Research Labs - We have received your message',
        text: 'Thank you for contacting us. We have received your message and will get back to you as soon as possible.'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send('error');
        } else {
            transporter.sendMail(confirmationMailOptions, (confirmationError, confirmationInfo) => {
                if (confirmationError) {
                    console.error('Error sending confirmation email:', confirmationError);
                }
                res.send('success');
            });
        }
    });
});


app.get('/community', (req,res) => {
    res.sendFile(__dirname + '/public/html/community.html')
});
app.listen(3000, () => {
    console.log("Server Running on port 3000");
});