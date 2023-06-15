import { MODEL } from 'mongoose';
const MachinGressed = MODEL('MachinGressed', {
 idMachine:{
    type:String
 },
 date:{
   type:Date,
 }
})
module.exports = MachinGressed