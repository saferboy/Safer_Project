import { Request, Response, NextFunction } from "express";
import { getAllCategory } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const options = await getAllCategory()

        const mapped = options.map(option => {
            return {
                id: option.id,
                title:  option.title,
                icon:   option.icon
            }
        })

        return res.status(200).json({
            message: "Retrive all categories",
            category:   mapped
        })

    } catch (err) {
        next(err)
    }
}