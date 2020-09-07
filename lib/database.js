"use strict";
const mongoose=require('mongoose');
function connect(){
    mongoose.connect("mongodb+srv://todotask:1234@cluster0-nvb5o.mongodb.net/task?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
    const connection=mongoose.connection;
    connection.on("error",function(err){
        console.log("Server is down");
        throw err;
    })
    connection.on('open',function(){
        console.log("successfully connected");
    })
}
module.exports={
    connect:connect,
}