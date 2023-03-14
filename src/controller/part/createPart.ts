import { Request, Response, NextFunction } from "express";
import { createPart } from "@service/part.service";
// import { PartBody } from "@model/partDto";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const part = req.body.part

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const option = await createPart(part, image)

        return res.status(200).json({
            message: "Create part",
            part: {
                id:                 option.id,
                title:              option.title,
                released:           option.released,
                genre:              option.genre,
                interface_language: option.interface_language,
                voice_language:     option.voice_language,
                image:              image
            }
        })


    } catch (error) {
        next(error)
    }

}
