import { MODEL } from 'mongoose';
const User = MODEL('User', {

 name:{
    type: String
 },
 lastname:{
    type:String
 },
 age:{
    type: Number
 }

})
module.exports = User