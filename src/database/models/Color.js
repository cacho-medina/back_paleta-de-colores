import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 1,
    },
    codigoHex: {
        type: String,
    },
    codigoRgb: {
        type: String,
    },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
