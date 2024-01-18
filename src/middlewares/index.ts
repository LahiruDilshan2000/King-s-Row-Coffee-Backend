import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: (req , file, cb) => {
        cb(null, "src/assets/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});
// const storage = multer.memoryStorage()
export const upload = multer({
    storage: storage
});
