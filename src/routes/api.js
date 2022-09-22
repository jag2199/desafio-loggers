import { Router } from "express"
import getRandom from "../getRandom.js"

const router = Router()

router.get("/", (req, res) => {
    const cant = req.query.cant || 100000000
    const nums = getRandom(cant)
    res.send(nums)
})

export default router