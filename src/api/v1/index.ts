import { Router } from "express";


import category from "./category"
import part from "./part"


const router = Router()

.use('/category', category)
.use('/part',     part)


export default router