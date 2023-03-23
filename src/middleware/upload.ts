import { randomUUID } from "crypto";
import multer from "multer";
import { v4 } from "uuid";



const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "./uploads")
    },
    filename(req, file, callback) {
        console.log(req.body);
        
        const format = file.originalname.split(".").at(-1)

        callback(null, v4() +  "." + format)
    }
})

export const upload = multer({ storage })