const mongoose = require('mongoose');
const { Schema } = mongoose;

const MachinGressedSchema= new Schema({
 idMachine:{
    type:String
 },
 date:{
   type:Date,
 }
})
const machinGressed = mongoose.model('MachinGressed', MachinGressedSchema);

module.exports = machinGressed


