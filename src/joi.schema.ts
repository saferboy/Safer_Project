import joi, { required, string } from "joi";

export const idParams = joi.object({
    id: joi.number().min(1).required()
});


export const categoryBody = joi.object({
    title:  joi.string().min(0).required,
    icon:   joi.string().min(0).required()
});


export const partBody = joi.object({
    id:         joi.number().min(0),
    title:      joi.string().min(1).required(),
    released:   joi.string().min(1).required(),
    genre:      joi.string().min(1).required(),
    interface_language: joi.string().min(1).required(),
    voice_language:     joi.string().min(1).required(),
    // image:      joi.string().min(0).required(),
    // status:     joi.string().min(0), 
    
    oc:         joi.string().min(1).required(),
    cpu:        joi.string().min(1).required(),
    ram:        joi.string().min(1).required(),
    video_card: joi.string().min(1).required(),
    size:       joi.string().min(1).required()
}).options({
    abortEarly:false
})
