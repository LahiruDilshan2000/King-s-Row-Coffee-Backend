import express from "express";
import EmployeeModel from "../models/employee.model";
import * as fs from "fs";
import * as path from "path";




export const saveEmployee =  async (req:express.Request, res:any) => {

    const imageData = req.file;
    const json_body = JSON.parse(req.body.employee);

    const employee = new EmployeeModel({
        name: json_body.name,
        email: json_body.email,
        address: json_body.address,
        contact: json_body.contact,
        image:"wwwww"
    });

    if (true) {
        // Delete the uploaded image if the user doesn't exist
        console.log(imageData)
        //fs.unlinkSync(path.join('./', imageData?.path as  string));
    }

    // console.log(employee)
    //console.log(imageData)
    console.log("ok")
    res.status(200).send('ok')
}

export const getAll = async (req:express.Request, res:any) => {
    console.log("ok")
    res.status(200).send('ok')
}

export const employeeGetById = async (req:express.Request, res:any) => {
    console.log("ok")
    res.status(200).send('ok')
}

export const updateEmployee = async (req:express.Request, res:any) => {
    console.log("ok")
    res.status(200).send('ok')
}

export const deleteEmployee = async (req:express.Request, res:any) => {
    console.log("ok")
    res.status(200).send('ok')
}
