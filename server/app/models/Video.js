const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Video = new Schema({
    channelId: { type: String, default: "" },
    categoryId: { type: String },
    name: { type: String },
    title: { type: String },
    des: { type: String },
    view: { type: String },
    tag: { type: String },
    status: { type: String },
    videoId: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Video', Video)