import { Request, Response, NextFunction } from "express";
import { deleteCayegoryById,gatCategoryById } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id
        const detail = await gatCategoryById(id)

        if (!detail) {
            res.status(403).json({
                message: "No category found for this id"
            })
        }

        const categeory = await deleteCayegoryById(id)

        return res.status(200).json({
            message: "Category deleted",
            category: {
                id:     categeory.id,
                title:  categeory.title,
                icon:   categeory.icon
            }
        })

    } catch (err) {
        next(err)
    }
}
