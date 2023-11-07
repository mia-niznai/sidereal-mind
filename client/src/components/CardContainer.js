import React, { useState } from "react";

function CardContainer ({picture,className,name,paragraph}) {
    return (
        <div className={className}>
            <img src={picture} />
            <h2>{name}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default CardContainer;