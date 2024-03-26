import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
    },
    codigoHex: {
        type: String,
        required: true,
        match: [
            /^#[0-9a-fA-F]{8}$|#[0-9a-fA-F]{6}$|#[0-9a-fA-F]{4}$|#[0-9a-fA-F]{3}$/,
            "Ingrese un codigo hexadecimal valido",
        ],
    },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
