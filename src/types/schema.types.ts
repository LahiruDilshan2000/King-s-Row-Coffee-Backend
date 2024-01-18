import mongoose from "mongoose";
import  {ObjectId} from "mongodb";


export interface IEmployee extends mongoose.Document {
    name:string;
    email:string;
    address:string;
    age:number;
    contact:number;
    image:string;
}
