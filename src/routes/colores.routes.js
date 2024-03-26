import { Router } from "express";
import {
    deleteColor,
    editColor,
    getColorById,
    getColors,
    saveColor,
} from "../controllers/colores.controllers.js";
import { check } from "express-validator";

const router = Router();

router
    .route("/colores")
    .get(getColors)
    .post(
        [
            check("nombre")
                .notEmpty()
                .withMessage("El nombre del color es obligatorio")
                .isLength({ min: 3 })
                .withMessage("Ingrese al menos 3 caracteres para el nombre"),
            check("codigoHex")
                .notEmpty()
                .withMessage("El codigo hexadecimal es obligatorio")
                .matches(
                    /^#[0-9a-fA-F]{8}$|#[0-9a-fA-F]{6}$|#[0-9a-fA-F]{4}$|#[0-9a-fA-F]{3}$/
                )
                .withMessage("Ingrese un codigo hexadecimal valido"),
        ],
        saveColor
    );
router
    .route("/colores/:id")
    .get(getColorById)
    .delete(deleteColor)
    .put(
        [
            check("nombre")
                .notEmpty()
                .withMessage("El nombre del color es obligatorio")
                .isLength({ min: 3 })
                .withMessage("Ingrese al menos 3 caracteres para el nombre"),
            check("codigoHex")
                .matches(
                    /^#[0-9a-fA-F]{8}$|#[0-9a-fA-F]{6}$|#[0-9a-fA-F]{4}$|#[0-9a-fA-F]{3}$/
                )
                .withMessage("Ingrese un codigo hexadecimal valido"),
        ],
        editColor
    );

export default router;
