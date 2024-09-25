const express=require('express')
const app=express()



app.get("/user/:id",(req,res)=>{
    console.log(req.params)
    res.send({fistname:"nani",age:23})
}),
app.post("/user",(req,res)=>{
    console.log(req.query)
    res.send("http post method is succefull")
})
app.delete("/user",(req,res)=>{
    res.send("delete  method is succesfull")
})
app.listen(4444,()=>{
    console.log("your server runingg on 4444")
})