import express from "express"
import { addVideo, deleteVideo, getTags, getVideo, random, search, sub } from "../controllers/video.js"
import { verifyToken } from "../middlewares/verifyToken.js"

const  router = express.Router()

router.get("/find/:id", getVideo)
router.post("/", addVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/random", random)
router.get("/sub", sub)
router.get("/search", search)
router.get("/tags", getTags)

    
export default router   