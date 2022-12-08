import Video from "../models/Video.js"

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