import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auths.js"
import cookieParser from "cookie-parser"

const app = express()
const PORT = 10000
dotenv.config()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)


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