import express from "express";
import * as EmployeeController from "../controllers/employee.controller"
import multer from "multer";
import * as path from "path";
import * as Middleware from "../middlewares/index"

/*const storage = multer.diskStorage({
    destination: (req , file, cb) => {
        cb(null, "src/assets/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});
// const storage = multer.memoryStorage()
const upload = multer({
    storage: storage
});*/

const router = express.Router();

router.post('/', Middleware.upload.single('file'), EmployeeController.saveEmployee);

router.get('/getAll', EmployeeController.getAll);

router.put('/', EmployeeController.updateEmployee);

router.get('/getById', EmployeeController.employeeGetById);

router.delete('/', EmployeeController.deleteEmployee);


export default router;
