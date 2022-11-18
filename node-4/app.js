// const express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Welcome to calculator")
// })

// app.get("/add", (req,res)=>{
//     let num1=200;
//     let num2=30;
//     res.json({
//         status:"success",
//         message:"the sum of two numbers is:",
//         sum:num1+num2
//     })
//     if(sum>1000000)
//     {
//         res.status(400).send({status:"error",message:"Overflow"});
//     }
//     else if(isNaN(sum) ||(num1==="" && num2==="")){
//         res.status(400).send({status:"error",message:"Invalid data types"});
//     }
// })

// app.get("/sub", (req,res)=>{
//     let num1=20;
//     let num2=30;
//     res.json({
//         status:"success",
//         message:"the difference of two numbers is:",
//         difference:num1-num2
//     })
//     if(difference < -1000000){
//         res.status(400).send({status:"error",message:"Underflow"});
//     }
//     else if(isNaN(result) ||(num1==="" && num2==="")){
//         res.status(400).send({status:"error",message:"Invalid data types"});
//     }
// })

// app.get("/multiply", (req,res)=>{
//     let num1=20;
//     let num2=30;
//     res.json({
//         status:"success",
//         message:"the product of two numbers is:",
//         product:num1*num2
//     })
// })

// app.get("/divide", (req,res)=>{
//     let num1=20;
//     let num2=30;
//     res.json({
//         status:"success",
//         message:"the division of two numbers is:",
//         remainder:num1/num2
//     })
//     if(remainder === Infinity){
//         res.status(400).send({status:"error",message:"Cannot divide by zero"});
//     }

//    else if(remainder < -1000000){
//         res.status(400).send({status:"error",message:"Underflow"});
//     }
//    else if(remainder > 1000000){
//         res.status(400).send({status:"error",message:"Overflow"});
//     }
//     else if(isNaN(remainder) ||(num1==="" && num2==="")){
//         res.status(400).send({status:"error",message:"Invalid data types"});
//     }
   
// })

// app.listen(7000, ()=>console.log("server is on"))

















// app.listen(3000,()=>console.log("Server is up at 3000"));






const port = 3000
var express = require('express');
var bodyParser = require('body-parser');  
var app = express(); 
app.set('views', './views');
app.set('view engine', 'ejs'); 
app.get('/', (req,res)=>{
    console.log(res)
    res.send("Welcome to Calculator")
   
})


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());  
app.get("/form",(req,res)=>{
    res.render("./form.ejs")
})

app.post('/math', function(req, res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(req.body.submit === "add"){
        
        let result=Number(num1) + Number(num2)
        console.log(result);
        if(result > 1000000){
            res.status(400).send({status:"error",message:"Overflow",sum:result});
        }
        else if(isNaN(result) ||(num1==="" && num2==="")){
            res.status(400).send({status:"error",message:"Invalid data types",sum:result});
        }
        
        else if(typeof result === "number"){
            res.send({status:"success",message:"the sum of given two numbers",sum:result});
        }
    
        
    }
    else if(req.body.submit === "sub"){
        let result=Number(num1) - Number(num2)
        if(result < -1000000){
            res.status(400).send({status:"error",message:"Underflow",difference:result});
        }
        else if(isNaN(result) ||(num1==="" && num2==="")){
            res.status(400).send({status:"error",message:"Invalid data types",difference:result});
        }
       
        else if(typeof result === "number"){
            res.send({status:"success",message:"the difference of given two numbers",difference:result});
        }
    }
    else if(req.body.submit === "mul"){
        let result=Number(num1) * Number(num2)
        if(result < -1000000){
            res.status(400).send({status:"error",message:"Underflow",result:result});
        }
       else if(result > 1000000){
            res.status(400).send({status:"error",message:"Overflow",result:result});
        }
        else if(isNaN(result) ||(num1==="" && num2==="")){
            res.status(400).send({status:"error",message:"Invalid data types",result:result});
        }
       
        else if(typeof result === "number"){
            res.send({status:"success",message:"the difference of given two numbers",result:result});
        }
    }
    else{
        let result=Number(num1) / Number(num2)
        console.log(result)
        if(result === Infinity){
            res.status(400).send({status:"error",message:"Cannot divide by zero",result:result});
        }

       else if(result < -1000000){
            res.status(400).send({status:"error",message:"Underflow",result:result});
        }
       else if(result > 1000000){
            res.status(400).send({status:"error",message:"Overflow",result:result});
        }
        else if(isNaN(result) ||(num1==="" && num2==="")){
            res.status(400).send({status:"error",message:"Invalid data types",result:result});
        }
       
        else if(typeof result === "number"){
            res.send({status:"success",message:"the difference of given two numbers",sum:result});
        }
    }
   
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app; 