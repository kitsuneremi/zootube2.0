import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema

const ListCategoryVideo = new Schema({
    videoId: { type: String },
    categoryId: { type: String },
})

export default model('ListCategoryVideo', ListCategoryVideo)