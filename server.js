require('./config/connect'); // TELL the main classe that a have to work with DB
const express = require('express');
const User = require('./models/User'); // Import User model
const app = express() //Import express library 
app.use(express.json()); // To make the app read and accept data of type JSON


app.post('/add', (req, res)=>{    //res: the response of the APi    // req: request contine the data that the user send in the api 
     console.log('add work')
     const  data = req.body  // Read the data from the request body
     const  user = new User(data) // Create a new instance of User model
     user.save() //save in moongo db
            .then((savedUser)=> // if the saving succes
            {
                res.send(savedUser)  // Send the saved user as a response
            }).catch((err)=>
               {
                res.send(err)
                ; // Handle errors
            }
            )
});

//request add with async await
app.post('/create ', async (req, res)=>{  
    try{
        const   data = req.body  
        const  user= new User(data)
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
    const  users = await User.find({age: 21});  //find function needs time.   //find with params
    res.send(users);

  } catch(error){
    res.send(error)
  } })

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

  app.get('/userbyid/:id',async(req, res)=>{ //:id =params url params 
    try{
        id = req.params.id;
        user =  await User.findOne({_id: id })
        res.send(user);
    }catch(error){
        res.send(error)
    }
  })

//delete api
app.delete('/delete/:id', (req, res)=>{
    console.log('delete work');
    res.send('delete request received'); 
})

app.delete('/delete/:id', (req, res)=>{  //:id =params url params  
    id = req.params.id
    User.findOneDelete({_id:id}).then(
        (deleteUser)=>{
            res.send(deletedUser)
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

app.put('/updaten/:id', (req, res)=>{
    id= req.params.id;
    newData = req.body;
    User.findByAndUpdate({_id: id}, newData).then(
        (updatedUser)=>{
            res.send(updatedUser)
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

////////////////////////////////////////////////////////////////////////////

//Exmples
//employee manager

//get all employee
app.get('/allEmployee', async (req, res)=>{  
    try{ 
      const  users = await User.find();  
      res.send(users);

    } catch(error){
      res.send(error)
    } 
})

//add all employee
app.post('/addEmployee', (req, res)=>{  
    console.log('add work')
    const  data = req.body 
    const  user = new User(data) 
    user.save() 
           .then((savedUser)=> 
           {
               res.send(savedUser) 
           }).catch((err)=>
              {
               res.send(err)
       }
    )
});

app.delete('/deleteEmployee/:id', (req, res)=>{ 
    id = req.params.id
    User.findOneAndDelete({_id:id})
    .then((deleteUser)=>{
            res.send(deletedUser)
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

app.listen( 3000, ()=>{ 
    console.log('Server is running on port 3000');
})
//Listen is an  express function  order   
//to keep the server always running unless we stop 
//it it take 2 paramùs the port and thed function 
