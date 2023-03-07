import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema

const Channel = new Schema({
    accountId: { type: String, default: "" },
    name: { type: String },
    des: { type: String },
    tagName: { type: String },
    signature: { type: String },
    videoId: { type: String },
}, { timestamps: true })

export default model('Channel', Channel)