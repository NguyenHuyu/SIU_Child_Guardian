import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app = express()
const PORT = process.env.PORT
dotenv.config()


mongoose.connect(process.env.URI_key,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err) =>{
        console.log(err)
    })


app.listen(PORT,()=>{
    console.log(`Server is running port ${PORT}`)
})