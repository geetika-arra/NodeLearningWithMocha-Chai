
const express = require('express');
const app=express();
const calc = require('./calc');

app.get('/status',(req,res)=>{
    res.statusCode(200).json({message:"Sever is Up"});
})

app.get('/add/:num1/:num2',(req,res)=>{
   const result= calc.add(parseInt(req.params.num1),parseInt(req.params.num2));
   res.statusCode(200).json({
       'sum':result
   })
})
app.listen(8081,()=>{
    console.log("Server is UP");
})