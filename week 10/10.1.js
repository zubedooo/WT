const express=require('express')
const app=express()
var bodyParser=require('body-parser')
var expressValidator=require('express-validator')
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(express.static('public'))
app.use(expressValidator())

app.get('/',urlencodedParser,function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.get('/data',function(req,res){
    res.send("Username <b>"+req.query.Uname+"</b><br/>Branch <u>"+req.query.branch+ "</u><br/>Semester "+req.query.sem);
})
app.post('/pdata',urlencodedParser,function(req,res){
    res.send(`Username <b>${req.body.Uname}</b><br/> Branch <u>${req.body.branch}</u><br/> Semester ${req.body.sem}`);
})
app.listen(3000);


