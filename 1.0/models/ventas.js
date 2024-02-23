import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: "cliente" },
    Nro: { type: String, required: true, unique: true },
})

export default mongoose.model("venta", ventaSchema)