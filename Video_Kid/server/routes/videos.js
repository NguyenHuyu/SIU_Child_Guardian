import express from "express"
import { addVideo, getVideo } from "../controllers/video.js"

const  router = express.Router()

router.get("/find/:id", getVideo)
router.post("/", addVideo)

export default router