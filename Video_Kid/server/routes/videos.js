import express from "express"
import { addVideo, deleteVideo, getVideo, random } from "../controllers/video.js"

const  router = express.Router()

router.get("/find/:id", getVideo)
router.post("/", addVideo)
router.delete("/:id", deleteVideo)
router.get("/random", random)

export default router   