import { Router } from "express";


import category from "./category"

const router = Router()

.use('/category', category)

export default router