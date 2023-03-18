import { Request, Response, NextFunction } from "express";
import { getAllPart } from "@service/part.service"


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const options = await getAllPart()

        const mapped = options.map(option => {
            return {
                id:         option.id,
                title:   option.title,
                released: option.released,
                genre:      option.genre,
                interface_language: option.interface_language,
                voice_language:     option.voice_language,
                image:      option.image,
                status: option.status,
                system_requirenments: {
                    id: option.System.id,
                    oc: option.System.oc,
                    cpu:option.System.cpu,
                    ram: option.System.ram,
                    video_card: option.System.video_card,
                    size:   option.System.size
                }
            }
        })

        return res.status(200).json({
            message: "All parts",
            parts: mapped
        })

    } catch (error) {
        next(error)
    }

}