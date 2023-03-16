import { Request, Response, NextFunction } from "express";
import { getAllPart } from "@service/part.service"


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const options = await getAllPart()

        const mapped = options.map(option => {
            return {
                title:   option.title,
                released: option.released,
                genre:      option.genre,
                interface_language: option.interface_language,
                voice_language:     option.voice_language,
                image:      option.image,
                status: option.Status,
                system: {
                    id: option.System.id,
                    oc: option.System.oc,
                    cpu:option.System.cpu,
                    ram: option.System.ram,
                    video_card: option.System.video_card,
                    size:   option.System.size
                }
            }
        })

    } catch (error) {
        next(error)
    }

}