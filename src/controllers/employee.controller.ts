import express from "express";
import EmployeeModel from "../models/employee.model";
import CustomResponse from "../dtos/custom.response";
import {IEmployee} from "../types/schema.types";
import * as fs from "fs";
import path from "path";

export const saveEmployee = async (req: express.Request, res: any) => {

    try {

        let req_body: IEmployee = JSON.parse(req.body.employee);
        let imageData: Express.Multer.File | undefined = req.file;

        let employee = await EmployeeModel.find({email: req_body.email});

        if (employee.length > 0) {

            removeImage(imageData?.filename);
            res.status(401).send(
                new CustomResponse(401, "Email already exists !")
            );
            return;
        }

        const employeeModel = new EmployeeModel({
            name: req_body.name,
            email: req_body.email,
            address: req_body.address,
            age: req_body.age,
            contact: req_body.contact,
            image: imageData?.filename
        });

        await employeeModel.save().then(r => {

            res.status(200).send(
                new CustomResponse(200, "Employee saved successfully !")
            )
        }).catch(e => {

            removeImage(imageData?.filename);
            res.status(500).send(
                new CustomResponse(500, e._message)
            )
        });

    } catch (error) {
        res.status(100).send("Error");
    }
}

const removeImage = (filename: string | undefined) => {
    console.log('./', 'src\\assets\\images\\' + filename);
    fs.unlinkSync(path.join('./', 'src\\assets\\images\\' + filename));
}

export const getAll = async (req: express.Request, res: any) => {


    try {

        /*let req_query: any = req.query;

        let size: number = req_query.size;
        let page: number = req_query.page;*/

        let articles = await EmployeeModel.find()/*.limit(size).skip(size * (page - 1));*/

        /*let documentCount: number = await ArticleModel.countDocuments();
        let pageCount: number = Math.ceil(documentCount / size);*/

        res.status(200).send(
            new CustomResponse(
                200,
                "Access",
                articles, /*pageCount*/ 2)
        );
    } catch (error) {
        res.status(100).send("Error")
    }

}

export const employeeGetById = async (req: express.Request, res: any) => {

    try {

        let _id: string = req.params._id;

        let employee: any = await EmployeeModel.findOne({_id: _id});

        if (!employee) {
            res.status(404).send(
                new CustomResponse(404, "Employee not found !")
            )
            return;
        }
        res.status(200).send(
            new CustomResponse(
                200,
                "Access",
                employee)
        )


    } catch (error) {
        res.status(100).send("Error");
    }
}

export const updateEmployee = async (req: express.Request, res: any) => {
    try {

        let _id = req.params._id;

        let employee: any = await EmployeeModel.findOne({_id: _id});

        if (!employee) {
            res.status(404).send(
                new CustomResponse(404, "Employee not found !")
            )
            return;
        }


    } catch (error) {
        res.status(100).send("Error");
    }
}

export const deleteEmployee = async (req: express.Request, res: any) => {

    try {

        let _id = req.params._id;

        let employee: any = await EmployeeModel.findOne({_id: _id});

        if (!employee) {
            res.status(404).send(
                new CustomResponse(404, "Employee not found !")
            )
            return;
        }

        await EmployeeModel.deleteOne({_id: _id}).then(r => {

            removeImage(employee.image);
            res.status(200).send(
                new CustomResponse(200, "Employee is deleted successfully.")
            )
        }).catch(e => {
            res.status(100).send(
                new CustomResponse(100, "Something went wrong.")
            )
        })
    } catch (error) {
        res.status(100).send("Error");
    }
}
