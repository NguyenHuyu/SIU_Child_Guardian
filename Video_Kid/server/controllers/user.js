import User from "../models/User.js"

export const getUser = async(req, res, next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async(req, res, next)=>{
    if (req.params.id === req.params.id) {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).send("Tài khoản đã được xóa");
        } catch (error) {
          next(error);
        }
      } else {
        return res.status(403).send("Bạn không thể xóa tài khoản người khác");
      }
}

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Đăng Kí Thành Công")
  } catch (err) {
    next(err);
  }
};