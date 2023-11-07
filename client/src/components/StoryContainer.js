import React, { useEffect, useState } from "react";


function StoryContainer({ id, name, story, onDelete, onSave, date, likes}) {
    const [number, setNumber] = useState(20);
    const [show, setShow] = useState(true);
    const [pressEdit, setPressEdit] = useState(true);
    const [nameEdit, setNameEdit] = useState(name);
    const [storyEdit, setStoryEdit] = useState(story);
    const [imageUrl, setImageUrl] = useState("");


    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            onDelete(id);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSave = async () => {
        setPressEdit(!pressEdit);
        try {
            await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: nameEdit, story: storyEdit }),
            });
            onSave(id);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLike = async () =>{
        likes ++;
        try {
            await fetch(`http://localhost:3001/api/story-sharing/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ like:likes}),
            });
            onSave(id);
        } catch (error) {
            console.error(error);
        }
    }

    const API_KEY = "EYakiC9CRTtStwIrnt4EkxmdhZHB3TkqAqeTC19AIajI5yi3BksUzX3v";
    const API_URL = "https://api.pexels.com/v1/search?per_page={1-50}&orientation=portrait";

    const fetchData = async (query) => {
        const response = await fetch(`${API_URL}&query=${query}`, {
            headers: {
                Authorization: API_KEY
            }
        });
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
            return data.photos[0].src.small;
        }
        return "";
    }

    useEffect(() => {
  const fetchUrl = async () => {
    try {
      const imageUrl = await fetchData(name);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };
  fetchUrl();
}, [name]);

    return (
        <div className="card-story">
            {pressEdit ? (
                <div >
                    <h2>{name}</h2>
                    <p>{story.slice(0, number)}</p>
                    <p>{date}</p>
                    {imageUrl && <img src={imageUrl} />}
                    <button onClick={() => setPressEdit(!pressEdit)} className="story-button">
                    <i className="fa fa-scissors"></i>
                    </button>
                    <button onClick={handleDelete} className="story-button">
                    <i className="fa fa-trash-o"></i>
                    </button>
                    <button onClick={handleLike}>{likes} <i className="fa fa-thumbs-up"></i></button>
                    {show ? (
                        <button
                            className="story-button"
                            onClick={() => {
                                setNumber(story.length);
                                setShow(!show);
                            }}
                        >
                            Read More
                        </button>
                    ) : (
                        <button
                            className="story-button"
                            onClick={() => {
                                setNumber(20);
                                setShow(!show);
                            }}
                        >
                            Read less
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <input value={nameEdit} onChange={(e) => {setNameEdit(e.target.value)}}/>
                    <input value={storyEdit} onChange={(e) => {setStoryEdit(e.target.value)}} />
                    <button onClick={handleSave} className="story-button">
                        Save
                    </button>
                </div>
            )}
        </div>
    );
}

export default StoryContainer;