import { PartDto } from "@model/partDto";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


//      post '/part' => create part
export const createPart = async (part: PartDto, image: string) => {
    return prisma.part.create({
        data: {
            title:              part.title,
            released:           part.released,
            genre:              part.genre,
            interface_language: part.interface_language,
            voice_language:     part.voice_language,
            image:              image
        }
    })
};



//      get '/part'  =>  get all part
export const getAllPart = async () => {
    return prisma.part.findMany()
};



//      get '/part/:id'  =>  get part by id
export const findtPartById = async (id: number) => {
    return prisma.part.findUnique({
        where: {
            id: id
        }
    })
};



//      put '/part/:id  =>  update part by id
export const updatePartById = async (id: number, part: PartDto, image: string) => {
    return prisma.part.update({
        data: {
            title:              part.title,
            released:           part.released,
            genre:              part.genre,
            interface_language: part.interface_language,
            voice_language:     part.voice_language,
            image:              image
        },
        where: {
            id:     id
        }
    })
};



//      delete '/part/:id'  =>  delete part by id
export const deletePartById = async (id: number) => {
    return prisma.part.delete({
        where: {
            id: id
        }
    })
}