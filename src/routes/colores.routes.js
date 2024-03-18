import { Router } from "express";
import {
    deleteColor,
    editColor,
    getColorById,
    getColors,
    saveColor,
} from "../controllers/colores.controllers.js";

const router = Router();

router.route("/colores").get(getColors).post(saveColor);
router.route("/color/:id").get(getColorById).delete(deleteColor).put(editColor);

export default router;
