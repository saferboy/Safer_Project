import { Router } from "express";
import { upload } from "@middleware/upload";

import {createValidator} from "express-joi-validation"

const validator = createValidator()

import createPart from "@controller/part/createPart"
import allPart from "@controller/part/all-part";
import findPArt  from "@controller/part/findPartById"
import { idParams, partBody } from "../../joi.schema";


const router = Router()

.post('/', validator.fields(partBody),upload.single('file'), createPart)
.get('/', allPart)
.get('/:id', validator.params(idParams), findPArt)

export default router