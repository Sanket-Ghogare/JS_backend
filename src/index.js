// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME} from "./Constants.js";
import ConnectDb from "./Db/Db.js";

dotenv.config({
    path: './env'
})

ConnectDb()









// import  express  from "express";
// const app = express()

// ( async ()=>{
// try {
//   await mongoose.connect(`${process.env.Mongodb_URI}/${DB_Name}`)
//   app.on("error",(error) =>{
//     console.log(error);
//     throw error;
//   })

//   application.listen(process.env.Port, ()=>{
//     console.log(`App Listening on the Port ${process.env.Port}`);
//   }) 

// } catch(error){
//   console.log("Error",error);
//   throw error
// }
// })()
