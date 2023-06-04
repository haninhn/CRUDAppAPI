const express = require('express')
const app = express() //import express library 

app.use(express.json()); //to parse JSON data


app.post('/add', (req, res)=>{
    console.log('add work');
    res.send('Add request received'); // Send a response to the client
});

app.get('/getAll', (req, res)=>{
    console.log('get work');
    res.send('Add request received'); // Send a response to the client
});

app.put('/update', (req, res)=>{
    console.log('get work');
    res.send('Add request received'); // Send a response to the client
});

app.listen( 3000, ()=>{ 
    console.log ('sever work');
}); 
 //Listen is an  express function  order   to keep the server always running unless we stop it it take 2 paramùs the port and thed function 

 