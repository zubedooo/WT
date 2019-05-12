const express=require('express')
const app=express()
var bodyParser=require('body-parser')
var expressValidator=require('express-validator')
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(express.static('public'))
app.use(expressValidator())
app.use(express.json())
const { check } = require('express-validator/check')

app.get('/',urlencodedParser,function(req,res){
    res.sendFile(__dirname+'/index1.html');
})
app.post('/pdata', urlencodedParser,function(req,res){
    req.checkBody({ 
        'marks': {
            optional: true,
            isNumeric: {
                errorMessage: 'Marks must be a number'
            }
        }
    })
    req.checkBody('sname', 'Name should not be empty').isAlpha().isEmpty();
    var errors = req.validationErrors();
    if(errors){
	res.send('Name required');
    }
    else{
	res.send(`USN: ${req.body.usn}<br/>Name: ${req.body.sname}<br/>Branch: ${req.body.branch}<br/>Marks: 		${req.body.marks}`);
    }
})
app.listen(3000);

