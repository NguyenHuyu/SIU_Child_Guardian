import Video from "../models/Video.js"
import User from "../models/User.js";


export const getVideo = async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (err) {
      next(err);
    }
}

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ 
        userId: req.params.id, 
        ...req.body });
    try {
      const savedVideo = await newVideo.save();
      res.status(200).json(savedVideo);
    } catch (err) {
      next(err);
    }
}

export const deleteVideo = async(req, res, next)=>{
    try {
        const video = await Video.findById(req.params.id)
        if(!video)
            return res.status(404).send("Không tìm thấy video xóa")
        if(req.params._id === video.userId){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).send("Đã xóa thành công video")
        }else{
            return res.status(403).send("Khong thể xóa video người khác")
        }
    } catch (error) {
        next(error)
    }
}

export const random = async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
}

export const sub = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      const subscribedChannels = user.subcribedUsers;
  
      const list = await Promise.all(
        subscribedChannels.map(async (channelId) => {
          return await Video.find({ userId: channelId });
        })
      );
  
      res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
      next(err);
    }
  };