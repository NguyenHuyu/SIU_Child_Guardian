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

