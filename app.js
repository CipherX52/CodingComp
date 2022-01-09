const express = require("express");
const ejs = require("ejs");

const bodyParser = require('body-parser');

const app = new express;

app.set('views','./src/views'); 
app.set('view engine','ejs');

app.get('/',function(req,res){
    // res.send('Welcome to Coding Competition #2 by Akash, NORKA B3');
    res.render('home',{});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Ready on ${PORT}`);
});