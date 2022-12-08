import User from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const register = async(req, res, next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = await User({
            ...req.body,
            password: hash
        })
        await newUser.save()
        res.status(200).send("Đã tạo tài khoản thành công")
    } catch (error) {
        next(error)
    }
}

export const login = async(req, res, next)=>{
    try {
        const user = await User.findOne({name: req.body.name})
        if(!user)
            return res.status(403).send("Không tìm thầy tài khoản")
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect)
            return res.status(403).send("Tài khoản không trùng khớp")
        const token = jwt.sign({id:user._id}, process.env.Access_key)
        const {password, ...others} = user._doc
        res.cookie("access_token", token, {
            httpOnly:true   
        }).status(200).json(others)
    } catch (error) {
        next(error)
    }
}
