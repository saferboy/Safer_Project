import { PartDto, PartSystem } from "@model/partDto";
import { PrismaClient } from "@prisma/client";
import { idParams } from "joi.schema";


const prisma = new PrismaClient()


//      post '/part' => create part
export const createPart = async (part: PartDto, systemId: number, image: string) => {
    return prisma.part.create({
        data: {
            title: part.title,
            released: part.released,
            genre: part.genre,
            interface_language: part.interface_language,
            voice_language: part.voice_language,
            image: image,
            Status: "Active",
            System: {
                connect: {
                    id: systemId
                }
            }
        },
        include: {
            System: true
        }
    })
};


export const createSystem = async (system: PartSystem) => {
    return prisma.system.create({
        data: {
            oc: system.oc,
            cpu: system.cpu,
            ram: system.ram,
            video_card: system.video_card,
            size: system.size
        }
    })
}



//      get '/part'  =>  get all part
export const getAllPart = async () => {
    return prisma.part.findMany({
        include: {
            System: true
        }
    })
};



//      get '/part/:id'  =>  get part by id
export const findtPartById = async (id: number) => {
    return prisma.part.findUnique({
        where: {
            id: id
        },
        include: {
            System: true
        }
    })
};



//      put '/part/:id  =>  update part by id
export const updatePartById = async (id: number, part: PartDto, systemId: number, image: string) => {
    return prisma.part.update({
        data: {
            title:              part.title,
            released:           part.released,
            genre:              part.genre,
            interface_language: part.interface_language,
            voice_language:     part.voice_language,
            image:              image,
            Status: "Active",
            System: {
                connect: {
                    id: systemId
                }
            }
        },
        where: {
            id: id
        },
        include: {
            System: true 
        }
    })
};



//      delete '/part/:id'  =>  delete part by id
export const deletePartById = async (id: number) => {
    return prisma.part.delete({
        where: {
            id: id
        },
        include: {
            System: true
        }
    })
}