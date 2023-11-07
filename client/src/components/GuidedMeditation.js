import React, { useEffect, useState } from "react";

function GuidedMeditation() {
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState([]);

    const fetchData = async () => {
        const API_KEY = "79064c9ee5msh3a853c614f52775p1a84bejsn4e93f7c3af40";
        const API_URL =
            "https://youtube-search-results.p.rapidapi.com/youtube-search/";

        try {
            const response = await fetch(API_URL + `?q=guided+meditation&part=snippet&maxResults=10&type=video`, {
                headers: {
                    "X-RapidAPI-Key": API_KEY,
                    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
                },
            });
            const data = await response.json();
            console.log(data);
            setVideos(data.items);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = () => {
        fetchData();
    };

    return (
        <div>
            <p>Try immersive guided meditation</p>
            <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <br></br>
            <br></br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1vx8iUvfyCY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <br></br>
            <br></br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4EaMJOo1jks" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <br></br>

            {videos && videos.length > 0 ? (
                videos.map((video) => (
                    <iframe
                        width="560"
                        height="315"
                        allowFullScreen
                    ></iframe>
                ))
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
}

export default GuidedMeditation;
