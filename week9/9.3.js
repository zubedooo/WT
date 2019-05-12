const express=require('express')
const app=express()
var time=(req,res,next)=>{
    req.Time=new Date()
    next()
}
app.use(time)
app.get('/*',(req,res)=>{
    res.send("URL: "+req.url+"<br/>Time: "+req.Time);
})
app.listen(3000);