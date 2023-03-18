import { Request, Response,  NextFunction} from "express";
import { deletePartById, findtPartById } from "@service/part.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const find = await findtPartById(id)

        if (!find) {
            return res.status(400).json({
                message: "There's no part this id"
            })
        }

        const deleted = await deletePartById(id)
        
        return res.status(200).json({
            message:    "Part delete",
            part: {
                id:     deleted.id,
                title:  deleted.title,
                released:   deleted.released,
                genre:  deleted.genre,
                interface_language:  deleted.interface_language,
                voice_language:  deleted.voice_language,
                image:  deleted.image,
                system: {
                    id: deleted.System.id,
                    oc: deleted.System.oc,
                    cpu:    deleted.System.cpu,
                    ram:    deleted.System.ram,
                    video_card: deleted.System.video_card,
                    size:   deleted.System.size
                }
            }
        })

    } catch (error) {
        next(error)
    }

}