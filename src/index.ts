

//import
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import * as process from "process";
import EmployeeRouts from "./routes/employee.routes"



//invoked
const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use(cors({
    origin: "*"
}));

//connect database
mongoose.connect(process.env.MONGO_URL as string);
// mongoose.connect('mongodb://localhost/blog');

const db = mongoose.connection;


db.on( 'error', (error) => {
    console.log("DB Connection Error : ", error);
});

db.on( 'open', () => {
    console.log("DB Connected Successfully");
});



//routes

app.use('/employee', EmployeeRouts);





app.listen(8080, () => {
    console.log('Server start on port 8080');
});
