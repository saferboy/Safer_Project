import { Router } from "express";

import { upload } from "../../middleware/upload";


import createCategory from "@controller/category/create-category"
import allCategory from "@controller/category/getAllCategory"
import findCategoryById from "@controller/category/getCategoryById"
import updateCategory from "@controller/category/updateCategory";
import deleteCategory from "@controller/category/deleteCategory";

const router = Router()

.post('/', upload.single('file') ,createCategory)
.get('/', allCategory)
.get('/:id', findCategoryById)
.put('/:id', upload.single('file'), updateCategory)
.delete('/:id', deleteCategory)


export default router