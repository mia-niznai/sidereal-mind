import React, { useState, useEffect } from "react";
import SiderealImage from "./sidereal.png";
import BackgroundColorButton from "./BackgroundColorButton";
import { Outlet } from "react-router-dom";



function Header() {
    const [bgColor, setBgColor] = useState("#2DB4B1");

    const handleBgColor = (color) => {
    setBgColor(color);
    };

    return (
        
        <div className="App" style={{ backgroundColor: bgColor }}>
            <nav className="navbar">
            <ul className="nav-links">
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="http://localhost:3000/stars">Aim for the stars!</a></li>
                <li><a href="http://localhost:3000/music">Music</a></li>
                <li><a href="http://localhost:3000/guided-meditation">Guided Meditation</a></li>
                <li><a href="http://localhost:3000/breathwork">Breathwork exercises</a></li>
                <li><a href="http://localhost:3000/sacred-geometry">Sacred Geometry</a></li>
                <li><a href="http://localhost:3000/story-sharing">Story Sharing</a></li>
                <li><a href="http://localhost:3000/about-us">About us</a></li>
            </ul>
            </nav>
            <header className="app-header">
            <h1>
                <img src={SiderealImage} />
                </h1>
                <BackgroundColorButton onBgColorChange={handleBgColor} />
            <p>
                Soothing Sounds and Visuals for Guided Meditation and Breathwork
            </p>
            <p>
                Welcome! If you are looking for wellbeing, peace of mind, better focus and better sleep, you've come to the right place!
            </p>
        </header>
       
        <Outlet/>
        </div>
    )
}

export default Header;