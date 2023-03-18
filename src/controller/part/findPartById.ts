import { Request, Response, NextFunction } from "express";
import { findtPartById } from "@service/part.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const option = await findtPartById(id)

        if (!option) {
            return res.status(400).json({
                message: "There's no Part with this id"
            })
        }


        return res.status(200).json({
            message: "Retrive part",
            part: {
            id:     option.id,
            title:  option.title,
            released: option.released,
            genre:      option.genre,
            interface_language: option.interface_language,
            voice_language:     option.voice_language,
            image:              option.image,
            status:             option.status,
            system_requirenments: {
                oc:     option.System.oc,
                cpu:    option.System.cpu,
                ram:    option.System.ram,
                video_card: option.System.video_card,
                size:       option.System.size
            }    
            }
        })

    } catch (error) {
        next(error)
    }

}