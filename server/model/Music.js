const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const musicSchema = new Schema({
    title: String,
    artist: String,
    album: String,
})

const Music = model("Music", musicSchema);

module.exports = Music;