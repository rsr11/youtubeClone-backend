import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config'

// dotenv.config();



const connectingMongo = async () => {

    try {
        //  console.log(process.env.DBCONNECTION_STRING);
         let string = process.env.DBCONNECTION_STRING;
        const moongoseString = await mongoose.connect(`${string}/${DB_NAME}`);
        console.log(`the mongoose db is connected !! string is : ${moongoseString.connection.host}`);


        
    } catch (error) {
        console.log("ERROR in mongo-connection:", error);
        process.exit(1);
    }
}

export default connectingMongo;