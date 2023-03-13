import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
    // log: [
    //     { emit: 'stdout', level: 'query' }
    // ]
})


//      post '/category' => create category
export const createCategory = async (title: string, icon: string) => {
    return prisma.category.create({
        data: {
            title:   title,
            icon:    icon
        }
    })
};



//      get '/category' => get all category
export const getAllCategory = async () => {
    return prisma.category.findMany()
};



//      get '/category/:id' =>  get category by id
export const gatCategoryById = async(id: number) => {
    return prisma.category.findUnique({
        where: {
            id:     id
        }
    })
};



//      get category by name
export const getCategoryByName = async (name: string) => {
    return prisma.category.findMany({
        where: {
            title: name
        }
    })
}



//      put'/category/:id'   =>  update category by id
export const updateCategoryById = async (id: number,title: string, icon: string ) => {
    return prisma.category.update({
        data: {
            title:  title,
            icon:   icon
        },
        where: {
            id:     id
        }
    })
};



//      delete'/category/:id'    =>  delete category by id
export const deleteCayegoryById = async (id: number) => {
    return prisma.category.delete({
        where: {
            id:     id
        }
    })
}
