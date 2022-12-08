import express from "express"
import { deleteUser, getUser } from "../controllers/user.js"

const router = express.Router()

router.get("/find/:id", getUser)
router.delete("/:id", deleteUser)

export default router