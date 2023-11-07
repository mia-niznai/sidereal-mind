import React, { useState, useEffect } from "react";
import StoryContainer from "./StoryContainer";

function StorySharing() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("")
  const [experience, setExperience] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, story };
    if (name.trim() === '' || story.trim() === '') {
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/story-sharing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      setExperience([...experience, responseData]);
      setName("");
      setStory("");
    } catch (err) {
      console.log(err);
    }

  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/api/story-sharing");
        const data = await response.json();
        setExperience(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [experience]);

  const handleDelete = (id) => {
    const updatedExperience = experience.filter(s => s._id !== id);
    setExperience(updatedExperience);
  }

  const handleSave = (id) => {
    const savedExperience = experience.filter(s => s._id === id);
    setExperience(savedExperience);
  }

  return (
    <div className="App">
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label>Your name/ Alias:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Your story:</label>
        <input className="story-input"
          type="text"
          onChange={(e) => setStory(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div className="story-container">
        {experience.map((s, i) => (
          <StoryContainer
            id={s._id.toString()} 
            name={s.name}
            story={s.story}
            key={i}
            onDelete={handleDelete}
            onSave={handleSave}
            date={`${s.createAt.split("T")[0]} ${s.createAt.split("T")[1].slice(0,5)}` }
            likes={s.like}
          />
        ))}

    </div>
  </div>
  );
}

export default StorySharing;
