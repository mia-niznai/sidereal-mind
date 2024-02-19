const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({ extended: false }));

let Story = require("./model/Story.js");
let Music = require("./model/Music.js");

mongoose.connect("mongodb+srv://team:SiderealMind@cluster0.sjlwzbv.mongodb.net/SiderealMind")


app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.post("/api/music", (req, res) => {
    const title = req.body.title;
    const artist = req.body.artist;
    const album = req.body.album;
})

app.post("/api/story-sharing",(req, res)=>{
    const name = req.body.name;
    const story = req.body.story;
    const createAt = Date.now();
    const like = 0;
    const experience = new Story({
        name,
        story,
        createAt,
        like
    }) 
    try {
        experience.save();
        res.json(experience);
    }catch(err){
        res.status(404).json({succes:false})
    }
});

app.get("/api/story-sharing",async(req, res)=>{
    try{
        const insertedStory = await Story.find();
        res.json(insertedStory);
    }catch(err){
        console.error(err);
    }
})

app.delete("/api/story-sharing/:_id", async (req, res)=>{
    const id = req.params._id;
    try {
        await Story.findByIdAndDelete(id);
    }catch(err){
        console.error(err); 
    }
})

app.patch("/api/story-sharing/:_id", async (req, res) => {
    const id = req.params._id;
    const updates = req.body;
    try {
        const updatedExperience = await Story.findByIdAndUpdate(id, updates, {new: true});
        return res.json(updatedExperience);
    }catch(err){
        console.error(err);
    }
})

app.patch("/api/story-sharing/:_id", async (req, res) => {
    const id = req.params._id;
    const likes = req.body

    try {
        const likedExperience = await Story.findByIdAndUpdate(id, likes, {new: true});
        return res.json(likedExperience);
    }catch(err){
        console.error(err);
    }
})

app.post('/api/homepage', (req, res) => {
    const { color } = req.body;
    currentBgColor = color;
    res.json({ color });
});

app.listen(3001, () => console.log('Server started on port 3001'));