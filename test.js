const express= require('express')
var cors = require('cors');
//var bodyParser = require('body-parser');
const app=express();
var port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
//app.get("/hello",(req,res)=>res.send("hello word"));
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//app.listen(3000,() => console.log('aksfjeiofjsdofjcksdf'));
app.all("/",(req,res)=>{
	//console.log("name===="+req.query.name);
	//console.log("name===="+ JSON.stringify(req.body));
	console.log(req.body.a);
var person={
	
		"name":"priya",
		"age":23,
		"address":{
					"city":"pune",
					"pin":004,
				  },
};
var x=JSON.stringify(person);
res.send(x);
});

app.listen(port, "0.0.0.0",()=>console.log("server started"));