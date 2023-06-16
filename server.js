require('./config/connect'); // TELL the main classe that a have to work with DB
const express = require('express');
const app = express() //Import express library*
app.use(express.json()); //to make the app read and accept data de type JSON 
const machineRoute = require('./routes/machine');
const userRoute = require('./routes/user');
app.use('/api/machine', machineRoute)
app.use('/api/user', userRoute)
app.listen( 3000, ()=>{ 
    console.log ('sever work');
})

//Listen is an  express function  order   
//to keep the server always running unless we stop 
//it it take 2 paramùs the port and thed function 
