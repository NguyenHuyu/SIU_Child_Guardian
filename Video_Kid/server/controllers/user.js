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
        } catch (err) {
          next(err);
        }
      } else {
        return res.status(403).send("Bạn không thể xóa tài khoản người khác");
      }
}