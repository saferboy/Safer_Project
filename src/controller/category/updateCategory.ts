import { Request, Response, NextFunction } from "express";
import { updateCategoryById, gatCategoryById } from "@service/category.service";
import getCategoryById from "./getCategoryById";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id
        const title = req.body

        if(!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const oldCtg = await gatCategoryById(id)

        if (!oldCtg) {
            return res.status(500).json({
                message: "No category found for this id"
            })
        }

        const icon = req.file.filename

        const newCtg = await updateCategoryById(id, title, icon)

        return res.status(200).json({
            message: "Category updated",
            category: {
                id:     newCtg.id,
                title:  newCtg.title,
                icon:   newCtg.icon
            }
        })

    } catch (err) {
        next(err)
    }
}