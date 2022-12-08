import express from "express"
import { deleteUser, getUser, subscribe } from "../controllers/user.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const router = express.Router()

router.get("/find/:id", getUser)
router.delete("/:id", verifyToken, deleteUser)
router.put("/sub/:id", subscribe)

export default router