import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/routes/colores.routes.js";
import "./src/database/db.js";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
    console.log("server running on port " + app.get("port"));
});

app.use("/api", router);
