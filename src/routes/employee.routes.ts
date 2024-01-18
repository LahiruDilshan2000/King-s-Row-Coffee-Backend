import express from "express";
import * as EmployeeController from "../controllers/employee.controller"
import * as Middleware from "../middlewares/index"
// import {upload} from "../middlewares/index";
// import {upload} from "../middlewares/index";


const router = express.Router();

/*
Routs
*/
router.post('/', Middleware.verifyToken, Middleware.handleImage, EmployeeController.saveEmployee);

router.get('/getAll', EmployeeController.getAll);

router.put('/', EmployeeController.updateEmployee);

router.get('/getById/:_id', EmployeeController.employeeGetById);

router.delete('/:_id', EmployeeController.deleteEmployee);


export default router;
