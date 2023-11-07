import React, { useState, useEffect } from "react";

function Stars() {
    const currentDate = new Date().toISOString().slice(0, 10);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [imageSrc, setImageSrc] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [imageCredit, setImageCredit] = useState("");
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");

    useEffect(() => {
        fetch(
            `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=OG42azj5tsrXGohQAWRGfY9T7s1YNsjlngQCYLfx`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.media_type === "image") {
                    setImageSrc(data.url);
                    setImageAlt(data.title);
                    setImageCredit("Image credit: " + data.url);
                } else if (data.media_type === "video") {
                    setImageSrc("");
                    const video = document.createElement("iframe");
                    video.width = 800;
                    video.height = 448;
                    video.src = data.url;
                    video.frameborder = 0;
                    video.allowFullscreen = true;
                    document.body.appendChild(video);
                }
                setTitle(data.title);
                setExplanation(data.explanation);
            })
            .catch((error) => console.error(error));
    }, [selectedDate]);

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
    };

    return (
        <div>
            <div>
                <input type="date" onChange={handleDateChange} value={selectedDate} />
                {imageSrc && <img src={imageSrc} alt={imageAlt} width="800" />}
                {imageCredit && <p>{imageCredit}</p>}
                {title && <h1>{title}</h1>}
                {explanation && <p>{explanation}</p>}
            </div>
        </div>
    );
}

export default Stars;
