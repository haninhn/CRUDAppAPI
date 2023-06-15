import { MODEL } from 'mongoose';
const Machin = MODEL('Machin', {
 idMachine:{
    type:String
 },
 age:{
    type: Number
 }

})
module.exports = Machin