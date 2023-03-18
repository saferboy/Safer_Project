import { Request, Response, NextFunction } from "express";
import { updatePartById, findtPartById } from "@service/part.service"; 
// import { PartDto, PartSystem } from "@model/partDto"

export default async (req: Request, res: Response, next: NextFunction) => {
    // try {
        
    //     const id =      +req.params.id
    //     const part =    req.body
    //     const system =  req.body

    //     if (!req.file) {
    //         return res.status(400).json({
    //             message: "File not upload"
    //         })
    //     }

    //     const image = req.file.filename

    //     const partDt = await updatePart(id, part, image)
    //     const systemDt = await updateSystem(id, system)


    //     return res.status(200).json({
    //         message: "Part update",
    //         id:         partDt.id,
    //         title:      partDt.title,
    //         released:   partDt.released,
    //         genre:      partDt.genre,
    //         interface_language: partDt.interface_language,
    //         voice_language:     partDt.voice_language,
    //         image:              image,
    //         status:             partDt.status,
    //         system: {
    //             oc:         systemDt.oc,
    //             cpu:        systemDt.cpu,
    //             ram:        systemDt.ram,
    //             video_card: systemDt.video_card,
    //             size:       systemDt.size
    //         }
    //     })


    try{

        const id = + req.params.id

        const partDt =    req.body

        const find = await findtPartById(id)

        if (!find) {
            return res.status(400).json({
                message:    "There's no part this id"
            })
        }

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const part = await updatePartById(id,partDt, image )
    
    return res.status(200).json({
        message: "Update",
        part: {
            id:     part.id,
            title:  part.title,
            released: part.released,
            genre:      part.genre,
            interface_language: part.interface_language,
            voice_language: part.voice_language,
            image:  image,
            system: {
                oc:     part.System.oc,
                cpu:    part.System.cpu,
                ram:    part.System.ram,
                video_card: part.System.video_card,
                size:   part.System.size
            }
        }
    })
    }

    catch (error) {
        next(error)
    }

}