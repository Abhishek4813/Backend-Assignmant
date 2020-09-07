const express=require("express");
const cors=require("cors");
const db=require("./lib/database");
const taskmodel=require('./schema/task');

const app=express();
db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/add',function(req,res,next){
    var {name,description,creator,duration}=req.body;
    var todo=new taskmodel({
      name:name,
      description:description,
      creator:creator,
      duration:Number(duration),
      createdAt: new Date(),  
    })
    todo.save()
    .then(succ=>{
        res.send("successfully added");
    })
    .catch(err=>{
        res.send("failed to add");
    });
})

app.get("/list",function(req,res,next){
    taskmodel.find()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(200).send("failed to fetch");
    })
})

app.listen(process.env.PORT || 3000);