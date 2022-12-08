import express from "express"
import { getVideo } from "../controllers/video.js"

const  router = express.Router()

router.get("/find/:id", getVideo)

export default router