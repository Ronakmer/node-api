
const express = require("express");
const app = express();

app.get('/getdata',(req,res)=>{
    res.json({
       
        "no":1,
        "name":"ronak"
  
       

    })
})

app.listen(3000,(req,res)=>{
    console.log('node api');
})