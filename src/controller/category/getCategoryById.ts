import { Request, Response, NextFunction } from "express";
import { gatCategoryById } from "@service/category.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const detail = await gatCategoryById(id)

        if (!detail) {
            return res.status(400).json({
                message: "There's not category with this id"
            })
        }

        return res.status(200).json({
            message: 'Retrive category',
            category: {
                id:     detail.id,
                title:  detail.title,
                icon:   detail.icon
            }
        })

    } catch (err) {
        next(err)
    }

}