import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema

const Category = new Schema({
    name: { type: String },
})

export default model('Category', Category)