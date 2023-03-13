import { Request, Response, NextFunction } from "express";
import { createCategory, getCategoryByName } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const title = req.body.title

        const categeory = await getCategoryByName(title)

        if(categeory) {
            return res.status(404).json({
                message: "Category alredry created"
            })
        }


        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }


        const icon = req.file.filename

        const option = await createCategory(title, icon)

        return res.status(200).json({
            message: "Category created",
            categeory: {
                id:     option.id,
                title:  option.title,
                icon:   option.icon
            }
        })

    } catch (err) {
        next(err)
    }

}