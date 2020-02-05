const express=require('express');

const app=express();

app.get("/hello",(req,res)=>res.send("hello word hii"));
//app.get("",(req,res)=>res.send("hello word hii"));
app.listen(4048,'0.0.0.0',()=>console.log("server started"));