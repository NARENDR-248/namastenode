const express=require('express')
const app=express()
const {admin_auth,user_auth}=require("./middelware/auth")


app.use("/admin",admin_auth);


app.get("/user/profile", user_auth,(req,res)=>{
    res.send("user0")
})
app.post("/user/login",(req,res)=>{
    res.send("user login")
})
app.get("/admin/getallData",(req ,res)=>{
    res.send("adminis authenticated")

})
app.delete("/admin/DeleteData",(req,res)=>{
    res.send("amdin deleted data")
})
app.listen(4444,()=>{
    console.log("your server runingg on 4444")
})