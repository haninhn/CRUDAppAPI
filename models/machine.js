const mongoose = require('mongoose');
const { Schema } = mongoose;
const machineSchema = new Schema({
 idMachine:{
    type:String
 },
 age:{
    type: Number
 }

})
const machine = mongoose.model('Machine', machineSchema);

module.exports = machine