// require("dotenv").config({path: './.env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ path: "./env" });




connectDB();































// import express from "express";
// const app = express();

// (async () => {
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//    app.on("error" ,(error)=> {
//       console.log("Error connecting to DB",error);
//       throw error;
//    })


//    app.listen(process.env.PORT,()=>{
//       console.log(`Server is running on port ${process.env.PORT}`);
    
//    })

//   } catch (err) {
//     console.error("Error: ", err);
//     throw err;
//   }
// })()