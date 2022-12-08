import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
        unique:true
    },
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    imgUrl:{
        type:String,
        require:true,
    },
    videoUrl:{
        type:String,
        require:true,
    },
    tags:{
        type:[String],
        default:[]
    }
})

export default mongoose.model("Video", videoSchema)