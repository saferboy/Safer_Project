import { Router } from "express";
import { upload } from "@middleware/upload";

import createPart from "@controller/part/createPart"
import allPart from "@controller/part/all-part";

const router = Router()

.post('/', upload.single('file'), createPart)
.get('/', allPart)

export default router