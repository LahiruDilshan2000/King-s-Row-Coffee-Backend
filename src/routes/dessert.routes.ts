import express from "express";
import * as Middleware from "../middlewares";
import * as DessertController from "../controllers/dessert.controller";

const router = express.Router();
/*
Routs
*/
router.post('/', Middleware.verifyToken, Middleware.handleImage, DessertController.saveDessert);

router.get('/getAll', DessertController.getAll);

router.put('/', Middleware.verifyToken, Middleware.handleImage, DessertController.updateDessert);

router.put('/withoutImage', DessertController.updateDessertWithoutImage);

router.get('/getById/:_id', DessertController.dessertGetById);

router.delete('/:_id', DessertController.deleteDessert);

export default router;
