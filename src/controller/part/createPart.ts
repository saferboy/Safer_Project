import { Request, Response, NextFunction } from "express";
import { createPart } from "@service/part.service";
import { PartDto } from "@model/partDto";
import { PartSystem } from "@model/partDto";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {


        const part: PartDto = req.body
        const partSystem: PartSystem = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const option = await createPart(part, partSystem, image)

        return res.status(200).json({
            message: "Create part",
            part: {
                id:             option.id,
                title:          option.title,
                released:       option.released,
                genre:          option.genre,
                interface_language: option.interface_language,
                voice_language: option.voice_language,
                image:          image,
                status:         option.status,
                system: {
                    id:         option.System.id,
                    oc:         option.System.oc,
                    cpu:        option.System.cpu,
                    ram:        option.System.ram,
                    video_card: option.System.video_card,
                    size:       option.System.size
                }
            }

        })


    } catch (error) {
        next(error)
    }

}
