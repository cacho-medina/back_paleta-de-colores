import Color from "../database/models/Color.js";

export const getColors = async (req, res) => {
    try {
        const colores = await Color.find();
        res.status(200).json(colores);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "No se pudo obtener los colores" });
    }
};

export const getColorById = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        res.status(200).json(color);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "No se pudo obtener el color requerido",
        });
    }
};

export const saveColor = async (req, res) => {
    try {
        const nuevo = new Color(req.body);
        const color = await nuevo.save();
        res.status(201).json({ message: "Color guardado con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "No se pudo guardar el color" });
    }
};

export const deleteColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        if (!color) {
            res.status(404).json({
                message: "El color requerido no fue encontrado",
            });
        }
        const eliminado = await Color.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Color eliminado" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "No se pudo eliminar el color" });
    }
};

export const editColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.id);
        if (!color) {
            res.status(404).json({
                message: "No se encontro el color requerido",
            });
        }
        const colorNuevo = await Color.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json({ message: "Color modificado con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al modificar el color" });
    }
};
