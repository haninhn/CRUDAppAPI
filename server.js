require('./config/connect'); // TELL the main classe that a have to work with DB
const userRoute = require('./routes/product');
const machineRoute = require('./routes/user');

app.use('/api/machin', machineRoute)
app.use('/api/user', userRoute)

const express = require('express')
const app = express() //import express library 
app.use(json()); //to make the app read and accept data de type JSON 

app.listen( 3000, ()=>{ 
    console.log ('sever work');
})

//Listen is an  express function  order   
//to keep the server always running unless we stop 
//it it take 2 paramùs the port and thed function 
