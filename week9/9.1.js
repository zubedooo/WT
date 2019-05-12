var http=require("http")
var qs=require("querystring")
var fs=require("fs")
var url=require("url")

var server=http.createServer(function(req,res){
        var url_parts=url.parse(req.url,true);
        var body="";
        if(url_parts.pathname=="/"){
            fs.readFile('./form.html',function(err,data){
                if(err){
                    res.writeHead(404);
                    res.write("Not Found");
                }
                else{
                    res.writeHead(200,{'Content-Type':"text/html"});
                    console.log("Serving the page form.html");
                    res.write(data);
                    res.end();
                }
            });
        }
        if(req.method==="GET"){
                if(url_parts.pathname=='/getData'){
                    console.log("Serving with Get data");
                    if(url_parts.query.age>18){
                    res.end("Get\nName : "+url_parts.query.name+"\nAge: "+url_parts.query.age+"\nEligibile to Vote");}
                    else{
                        res.end("Get\nName : "+url_parts.query.name+"\nAge: "+url_parts.query.age+"\nNot Eligible to Vote"); 
                    }
                }
            }
        else{
                if(req.method==="POST"){
                        console.log('Serving the Post Data');
                        req.on('data',(data)=>{body+=data;});
                        req.on('end',()=>{
                            var post=qs.parse(body);
                            if(post.age>18){
                            res.end("Post\nName :"+post.name+"\nAge: "+post.age+"\nEligible to Vote");}
                            else{
                              res.end("Post\nName :"+post.name+"\nAge: "+post.age+"\nNot Eligible to Vote");  
                            }
                        });
                    
                }
            }
    }   
).listen(8080);