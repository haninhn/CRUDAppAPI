const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:/ecommerce').then(
    ()=>{
        console.log('connect');

    }).catch((err)=> console.log(err));

    module.exports = mongoose  // export moduls toc work in all the app