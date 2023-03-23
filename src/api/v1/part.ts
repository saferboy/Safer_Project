import { Router } from "express";
import { upload } from "@middleware/upload";

import {createValidator} from "express-joi-validation"

const validator = createValidator()

import createPart from "@controller/part/createPart"
import allPart from "@controller/part/all-part";
import findPArt  from "@controller/part/findPartById"
import updatePart from "@controller/part/update-part";
import deletePart from "@controller/part/delete-part";

import { idParams, partBody } from "../../joi.schema";


const router = Router()

.post('/',      upload.single('file'), validator.body(partBody),   createPart)
.get('/',       allPart)
.get('/:id',    validator.params(idParams), findPArt)
.put('/:id',    upload.single('file'), validator.body(partBody), updatePart)
.delete('/:id', deletePart)

export default router