import express from "express";
import 'dotenv/config'
import connectingMongo from "./db/index.js";
import { app } from "./app.js";


const port = process.env.PORT || 9000;

connectingMongo()
.then(()=>{
   app.listen(port, ()=>{
    console.log(`server is working on port : ${port}`);
   })  })
.catch( error => {console.log(`error in connecting in port and db`, error);} )