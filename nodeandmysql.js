

const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express();
const a='Select * from myTable';
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'priya',
    database:'student'
});
connection.connect(err=>{
    if(err){
        return err;
    }
});
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
res.send('go to /myTable to see table');
});

app.all('/getInfo',(req,res)=>{
	
	console.log("name===="+ JSON.stringify(req.body));
    connection.query(a,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
               data:results
            })
			
        }
    });
});


app.listen(3000,()=>{console.log('products server listening on port 3000')
});
