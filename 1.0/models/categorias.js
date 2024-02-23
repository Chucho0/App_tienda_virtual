import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    descripcion: { type: String, required: true, unique: true },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("categoria", categoriaSchema)