import express from "express"
import { addVideo, deleteVideo, getVideo, random, search, sub } from "../controllers/video.js"

const  router = express.Router()

router.get("/find/:id", getVideo)
router.post("/", addVideo)
router.delete("/:id", deleteVideo)
router.get("/random", random)
router.get("/sub", sub)
router.get("/search", search)

export default router   