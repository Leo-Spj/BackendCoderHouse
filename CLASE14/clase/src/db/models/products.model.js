import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true,
        default: 0
    },
    description: {
        type: String,
        require: true
    }
})

export const productsModel = mongoose.model("Products", productsSchema)