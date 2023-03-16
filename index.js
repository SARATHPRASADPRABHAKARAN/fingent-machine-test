import  express  from "express";
import mongoose from 'mongoose'
import { apiRouter } from "./routes/router.js";
import dotenv from 'dotenv'
dotenv.config()
const Url=process.env.DATABASE
import bodyParser from 'body-parser';
const app= express()


app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json())
mongoose.connect(Url,{useNewUrlParser:true});


app.use('/',apiRouter)

const connect= mongoose.connection
connect.on('open',function(){
    console.log("mongoose connected")
})


const PORT= process.env.PORT||3001
app.listen(PORT,()=>console.log(`the server runing on ${PORT}`))
