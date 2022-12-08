import express from "express"
import { deleteUser, getUser, subscribe } from "../controllers/user.js"

const router = express.Router()

router.get("/find/:id", getUser)
router.delete("/:id", deleteUser)
router.put("/sub/:id", subscribe)

export default router