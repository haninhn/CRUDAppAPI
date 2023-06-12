require('./config/connect'); // TELL the main classe that a have to work with DB
const express = require('express')


const User = require('./models/user'); //import the user model
const app = express() //import express library 
app.use(json()); //to make the app read and accept data de type JSON 


app.post('/add', (req, res)=>{  //res: the response of the APi  // req: request contine the data that the user send in the api 
    data = req.body  //read the data in the body 
    user = new User(data) //instance of user model
    user.save() //save in moongo db
            .then((savedUser)=> // if the saving succes
            {
                res.send(savedUser)  //send response saved user i
            }).catch((err)=>
               {
                    res.send(err)// send the err to front end party
                }
            )
    console.log('add work');
    res.send('Add request received'); // Send a response to the client
});
//request with async await
app.post('/create ', async (req, res)=>{  
    try{

        data = req.body  
         user= new User(data)
         savedUser =   await user.save()   //we put await Because saving the user in DB needs time.
         res.send(savedUser)

    }catch (error){
        res.send(error)
    }

    console.log('add work');
    res.send('Add request received'); 
});

//get all users
app.get('/all', async (req, res)=>{  
  
  try{ 
   users = await User.find({age: 21});  //find function needs time.   //find with params
    res.send(users);

  } catch(error){
    res.send(error)
  }
  })

  //find one user
  app.get('/getbyid/:id',(req, res)=>{
   myid = res.params.id;
   User.findOne({_id: myid}).then(
    (user) =>{
        user.send(user)
    }
   )
   .catch(
    (err)=> {
        res.send(err)
    }
   )
  })

  app.get('/userbyid/:id',async(req, res)=>{
    try{
        id = req.params.id;
        user =  await User.findOne({_id: id })
        res.send(user);
    }catch(error){
        res.send(error)
    }

  })

app.put('/update', (req, res)=>{
    console.log('update work');
    res.send('Add request received'); 
})

app.delete('/delete', (req, res)=>{
    console.log('delete work');
    res.send('delete request received'); 
})

app.delete('/delete:id', (req, res)=>{
    id = req.params.id
    user.findOneDelete({_id:id}).then(
        (deleteUser)=>{
            res.send(deletedUser)
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

app.listen( 3000, ()=>{ 
    console.log ('sever work');
})//Listen is an  express function  order   
//to keep the server always running unless we stop 
//it it take 2 paramùs the port and thed function 
