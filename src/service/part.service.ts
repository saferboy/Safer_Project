import { PartDto, PartSystem } from "@model/partDto";
import { PrismaClient } from "@prisma/client";
import { idParams } from "../joi.schema"


const prisma = new PrismaClient()


//      post '/part' => create part
export const createPart = async (part: PartDto, systemDto: PartSystem, image: string) => {
    return prisma.part.create({
        data: {
            title: part.title,
            released: part.released,
            genre: part.genre,
            interface_language: part.interface_language,
            voice_language: part.voice_language,
            image: image,
            Status: "Active",
            System:  {
                create:  {
                    oc:     systemDto.oc,
                    cpu:    systemDto.cpu,
                    ram:    systemDto.ram,
                    video_card: systemDto.video_card,
                    size:   systemDto.size
                }
            }
        },
        include: {
            System: true
        }
    })
};



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