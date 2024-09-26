const express=require('express')
const app=express()

app.use("/user",(req,res,next)=>{
    console.log("this is first respones");
    // res.send("responecs1")
    next()
},[(req,res,next)=>{
    next()
    console.log("2ed responece")
    res.send("responece2")
},(req,res,next)=>{
    console.log("this is 3 ed one")
    next()
   
}])
app.listen(4444,()=>{
    console.log("your server runingg on 4444")
})