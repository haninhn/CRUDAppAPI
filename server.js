import './config/connect'; // TELL the main classe that a have to work with DB
import express, { json } from 'express';
const User = require('./models/user'); //import the user model
const app = express() //import express library 
app.use(json()); //to make the app read and accept data de type JSON 
const Machins = require('./models/Machin'); //import the user model
const GressedMachins = require('./models/MachinGressed'); //import the user model


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

app.put('/update/:id', (req, res)=>{
    id = req.params.id;
    newData = req.body;  // read data from body
    User.findByIdAndUpdate({_id: id}, newData)   //updated user with id and new data 
    .then(
        (updated)=>{
            res.send(updated)
        }
    )
    .catch((err)=> {
        (err)=>{
            res.send(err)
        }
    }
    )
    console.log('update work');
    res.send('Add request received'); 
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
//-------------------------------------------------------

//Machin gressed
app.post('/gressedMachines/add', (req, res)=>{  
    data = req.body  
   const gressedMachin = new GressedMachins(data) 
    gressedMachin.save() 
            .then((savedUser)=> 
            {
                res.send(savedUser)  
            }).catch((err)=>
               {
                    res.send(err)
                }
            )
    console.log('add work');
    res.send('Add request received'); 
});

//Machin gressed for current day notif
app.get('/gressedMachines/get', (req, res)=>{  
    data = req.body  
   const gressedMachin = new GressedMachins(data) 
    gressedMachin.save() 
            .then((savedGressedMachin)=> 
            {
                res.send(savedGressedMachin)  
            }).catch((err)=>
               {
                    res.send(err)
                }
            )
});
//--------------------------------------------------------

//Get All Machin in usine 
app.get('/allMachines/get', (req, res)=>{  
    data = req.body  
   const machins = new Machins(data) 
    machins.save() 
            .then((savedMachins)=> 
            {
                res.send(savedMachins)  
            }).catch((err)=>
               {
                    res.send(err)
                }
            )
    console.log('add work');
    res.send('Add request received'); 
});

app.listen( 3000, ()=>{ 
    console.log ('sever work');
})

//Listen is an  express function  order   
//to keep the server always running unless we stop 
//it it take 2 paramùs the port and thed function 
