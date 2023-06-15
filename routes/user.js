const express = require('express');
const router = express.Router(); //child of the app 
const User = require('../models/user'); //import the user model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

 router.post('/add', (req, res)=>{ //res: the response of the APi  // req: request contine the data that the user send in the api 
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

    //request add with async await
    router.post('/create ', async (req, res)=>{  
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
    router.get('/all', async (req, res)=>{  
    
    try{ 
    users = await User.find({age: 21});  //find function needs time.   //find with params
        res.send(users);

    } catch(error){
        res.send(error)
    }
    })

  //find one user
  router.get('/getbyid/:id',(req, res)=>{
   myid = req.params.id;
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

  router.get('/userbyid/:id',async(req, res)=>{//:id =params url params 
    try{
        id = req.params.id;
        user =  await User.findOne({_id: id })
        res.send(user);
    }catch(error){
        res.send(error)
    }

  })
 
 router.put('/update/:id', (req, res)=>{
        id = req.params.id;   // read id from url params
        newData = req.body;  // read data from body
        User.findByIdAndUpdate({_id: id}, newData)   //updated specific user by id and  replace his data with the new data 
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
    })

 router.delete('/delete/:id', (req, res)=>{  //:id =params url params  
        id = req.params.id
        User.findOneDelete({_id:id}).then(
            (deletedUser)=>{
                res.send(deletedUser)
            })
            .catch(
                (err)=>{
                    res.send(err)
                }
            )
    })

//----------------------------
//request add with async await
 router.post('/register', async (req, res)=>{  
            data = req.body  
            user = new User(data)
            salt = bcrypt.genSaltSync(10)
            crypiedPasse = await bcrypt.hashSync(data.password, salt) //crypt password
            user.password = crypiedPasse;
            user.save().then(
                (savedUser)=>{
                     res.status(200).send(savedUser)
                })
                .catch(
                    (err)=>{
                     res.status(400).send(err)

                    }
                )
    });

//request add with async await
router.post('/login', async (req, res)=>{  
    data = req.body  
    user = new User.findOne({number: data.number})
    if(!user){
        res.status(404).send('number or password invalid !')

    }else{
            validPass = bcrypt.compareSync(data.password, user.password)
            if(!validPass){
                res.status(401).send(' email ort password invalid !')
            }else{
                payload = {
                  _id: user._id,
                  number: user.number, 
                  name: user.name
            }
            token = jwt.sign(payload, '1234567')  //create token
            res.status(200).send({mytoken: token})
            }

    }
    salt = bcrypt.genSaltSync(10)
    crypiedPasse = await bcrypt.hashSync(data.password, salt) //crypt password
    user.password = crypiedPasse;
    user.save().then(
        (savedUser)=>{
             res.status(200).send(savedUser)
        })
        .catch(
            (err)=>{
             res.status(400).send(err)

            }
        )
});
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

module.exports = router;