const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = new express;

app.set('views','./src/views'); 
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , 'public'))); 

app.get('/',function(req,res){
    res.render('firstpage',{});
});

app.post('/home',function(req,res){
    res.render('home',{});
});

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ginpachi001@gmail.com",
        pass:process.env.pass
    }
});

app.post('/home/mailer', function(req,res){
    
    const mail = req.body.email;
    console.log(mail);
    // res.send('Something went wrong');

    let mailDetails = {
        from:'ginpachi001@gmail.com',
        to:mail,
        subject:'Coding Competition App',
        text:"You have received an email from Akash's app!"
    }

    transporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error');
            res.send('Something went wrong.');
        } else {
            console.log('Email sent successfully');
            res.send('Mail sent successfully.');
        }
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Ready on ${PORT}`);
});