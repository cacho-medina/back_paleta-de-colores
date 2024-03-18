import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;

mongoose.connect(uri);
const conection = mongoose.connection;
conection.once("open", () => {
    console.log("Database connection successful");
});
