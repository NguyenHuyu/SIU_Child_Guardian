import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true, 
        unique:true
    },
    password:{
        type:String,
        require:true, 
    },
    email:{
        type:String,
        require:true, 
    },
    img:{
        type:String,
    },
    subcribers:{
        type:Number,
        default:0
    },
    subcribedUsers:{
        type:[String]
    },
},{timestamps:true})

export default mongoose.model("User", userSchema)