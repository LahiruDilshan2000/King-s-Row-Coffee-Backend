import mongoose from "mongoose";
import  {ObjectId} from "mongodb";


export interface IEmployee extends mongoose.Document {
    name:string;
    email:string;
    address:string;
    age:number;
    contact:string;
    image:string;
}

export interface ICoffee extends mongoose.Document {
    name:string;
    desc:string;
    largeSize:number;
    smallSize:number;
    qty:number;
    image:string;
}

export interface IDessert extends mongoose.Document {
    name:string;
    desc:string;
    size:number;
    price:number;
    qty:number;
    image:string;
}

export interface IOrder extends mongoose.Document {
    name:string;
    desc:string;
    size:number;
    qty:number;
    image:string;
}
