//this is the main server don't change
const express=require("express");
const app=express()
app.use('/',require('./firebase'))
app.listen(3000,(req,res)=>{
    console.log("Server running")
})
