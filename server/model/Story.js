const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const storySchema = new Schema({
    name: String,
    story: String,
    createAt: Date,
    like: Number
})

const Story = model("Story",storySchema);

module.exports = Story;