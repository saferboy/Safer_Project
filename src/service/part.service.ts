import { PartDto, PartSystem } from "@model/partDto";
import { PrismaClient } from "@prisma/client";


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
            // Status: "Active",
            System: {
                create: {
                    oc: systemDto.oc,
                    cpu: systemDto.cpu,
                    ram: systemDto.ram,
                    video_card: systemDto.video_card,
                    size: systemDto.size
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
    
    try {
    
        return  prisma.part.findUnique({
            where: {
                id: id
            },
            include: {
                System: true
            }
        })    
    } catch (error) {
        throw error
    }
    
};



    //  put '/part/:id  =>  update part by id
export const updatePartById = async (id: number, part: PartDto & PartSystem, image: string) => {

    return prisma.part.update({
        data: {
            title:              part.title,
            released:           part.released,
            genre:              part.genre,
            interface_language: part.interface_language,
            voice_language:     part.voice_language,
            image:              image,
            // status:             part.status,
            System: {
                connect: {
                    id
                },
                update: {
                    oc: part.oc,
                    cpu: part.cpu,
                    ram: part.ram,
                    video_card: part.video_card,
                    size: part.size
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


// export const updatePart = async (id: number, part: PartDto, image: string) => {

//     return prisma.part.update({
//         data: {
//             title:  part.title,
//             released:           part.released,
//             genre:              part.genre,
//             interface_language: part.interface_language,
//             voice_language:     part.voice_language,
//             image:              image
//         },
//         where: {
//             id: id
//         }
//     })
// }


// export const updateSystem = async (id: number, system: PartSystem, ) => {

//     return prisma.system.update({
//         data: {
//             oc:     system.oc,
//             cpu:    system.cpu,
//             ram:    system.ram,
//             video_card: system.video_card,
//             size:   system.size
//         },
//         where: {
//             id: id
//         }
//     })
        

// }



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