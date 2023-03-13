import { Request, Response, NextFunction } from "express";
import { deleteCayegoryById } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id
        const detail = deleteCayegoryById(id)

        if (!detail) {
            res.status(403).json({
                message: "No category found for this id"
            })
        }

        const deleted = await deleteCayegoryById(id)

        return res.status(200).json({
            message: "Category deleted",
            category: {
                id:     deleted.id,
                title:  deleted.title,
                icon:   deleted.icon
            }
        })

    } catch (err) {
        next(err)
    }
}