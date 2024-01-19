import mongoose from "mongoose";
import { DB_NAME } from "../Constants.js";

const ConnectDb = async () =>{
    try{
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Mongodb is connected !! ${connectionInstance.connection.host}`);
       // consle Instance
    }
    catch(error){
        console.log("The MongoDB Connection Failed", error);
        process.exit(1)
    }
}

export default ConnectDb