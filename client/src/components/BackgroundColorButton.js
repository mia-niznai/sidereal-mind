import React, { useState } from "react";

function BackgroundColorButton(props) {
    const { onBgColorChange } = props;
    const [bgColor, setBgColor] = useState("#2DB4B1");

    const handleColorChange = (e) => {
        const color = e.target.value;
        setBgColor(color); 
        onBgColorChange(color);
    };

    return (
        <button className="background">
            Choose background color: 
            <input
                type="color"
                placeholder="Choose background color:"
                value={bgColor}
                onChange={handleColorChange} 
            />
        </button>
    );
}

export default BackgroundColorButton;