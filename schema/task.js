"use strict";
const mongoose=require("mongoose");
const taskschema=new mongoose.Schema({
    name:String,
    description:String,
    creator: String,
    duration:Number,
    createdAt:Date,
})
const taskmodel=mongoose.model("todotask",taskschema);
module.exports=taskmodel;