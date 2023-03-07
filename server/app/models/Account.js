import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema

const Account = new Schema({
    email: {type: String, required: true},
    name: { type: String },
}, { timestamps: true })

export default model('Account', Account)