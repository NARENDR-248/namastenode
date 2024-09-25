const express=require('express')
const app=express()


app.use("/test", (req,res)=>{
    res.send("hello")
});
app.use("/demo", (req,res)=>{
    res.send("this demo page ")
})
app.use("/", (req,res)=>{
    res.send("this is home page ")
});

app.listen(4444,()=>{
    console.log("your server runingg on 4444")
})