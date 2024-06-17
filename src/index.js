// require('doteenv').config({path: './env'})
import dotenv from "dotenv"


import express from "express"
import connectDB from "./db/index.js";
const app = express()

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on(process.env.PORT, (error) => {
        console.log("Err: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at :${process.env.PORT}`);
       })
})
.catch((err) => {
    console.log("Mongo db connection failed !!!", err);
})
