const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const models=require('./model/modelnew')
const dotenv=require("dotenv")

dotenv.config()
const cors = require ("cors")

const coreOption={
    origion:"http://localhost:5173",
   methods:"POST,GET,PUT,DELETE",
   credentials:true,
}
app.use(cors(coreOption))
app.use(express.json())


mongoose.connect(process.env.DATABASE,{dbName:process.env.DBNAME},
    {useNewUrlParser:true})
    .then(()=>{    console.log("Connected to MongoDB");
    })
    .catch(()=>{
        console.log("Couldn't connect to MongoDB");
    })

    app.post("/home",async(req,res)=>{
         
     const{title,amount,options}=req.body;
     console.log(req.body)
        
         models.create({title,amount,options}).then((res)=>res.status(200).json({message:"valid"}))
         .catch(error=>res.json(error))
    
         })


         app.get("/details",(req,res)=>{
                     
                    models.find().then(user=>res.json(user)).catch(error=>res.json(error))


         })

        app.delete("/deleteuser/:id",(req,res)=>{
            const id =req.params.id;
            models.deleteOne({_id,id}).then(res=>res.json(res)).catch(err=>res.json(err))

        })
       










         app.listen(process.env.PORT,()=>{
            console.log("server listening")
        })