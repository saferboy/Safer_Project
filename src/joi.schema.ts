import joi from "joi";

export const idParams = joi.object({
    id: joi.number().min(1).required()
});


export const categoryBody = joi.object({
    title:  joi.string().min(0).required,
    icon:   joi.string().min(0).required()
});


