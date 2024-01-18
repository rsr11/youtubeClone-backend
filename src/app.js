import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

 export const app = express();


 app.use(cors({
    origin:"www.example.com" 
 }));
 app.use(express.json({ limit:"18kb"}));
 app.use(urlencoded({extended:true, limit:"18kb"}))
 app.use(express.static("public"))
 app.use(cookieParser());


