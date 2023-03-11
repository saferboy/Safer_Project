import { PrismaClient } from "@prisma/client";
import { CreateDto } from "@model/categoryDto";



const prisma = new PrismaClient({
    log: [
        { emit: 'stdout', level: 'query' }
    ]
})



//      post '/category' => create category
export const createCategory = async (category: CreateDto) => {
    return prisma.categeory.create({
        data: {
            title:   category.title,
            icon:    category.icon
        }
    })
};



//      get '/' => get all category
export const getAllCategory = async () => {
    return prisma.categeory.findMany()
};



//      get '/category/:id' =>  get category by id
export const gatCategoryById = async(id: number) => {
    return prisma.categeory.findUnique({
        where: {
            id:     id
        }
    })
};



