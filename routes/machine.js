const express = require('express');
const router = express.Router(); 
const GressedMachins = require('../models/MachinGressed');
const Machins = require('../models/machine'); 

// add Machin gressed
router.post('/gressedMachines', (req, res)=>{  
    data = req.body  
    const gressedMachin = new GressedMachins(data) 
    gressedMachin.save() 
            .then((savedGressedMachines)=> 
                {
                  console.log(' work');
                  res.status(200).send(savedGressedMachines)  
                }
            ).catch((err)=>
                {
                  console.log('dont work');
 
                res.status(400).send(err)  
                }
            )
});

//get Machin gressed for current day notif
router.get('/gressedMachines', async (req, res)=>{  
  
  try{ 
    const gressedMachin  = await GressedMachins.find();
    res.status(200).send(gressedMachin);

  } catch(error){
    res.status(400).send(error)
  }
 })

//add Machin in Factory
router.post('/machine', (req, res)=>{  
    data = req.body  
   const machine = new Machins(data) 
    machine.save() 
            .then((savedMachine)=> 
            {
                res.send(savedMachine)  
            }).catch((err)=>
               {
                    res.send(err)
                }
            )
});

//get all Machines 
router.get('/machine', async (req, res)=>{  

  try{ 
    const machines  = await Machins.find();
 res.status(200).send(machines);

  } catch(error){
  res.status(400).send(error)
  }
  })

module.exports = router;
