import React from "react";

const ChangePokeInfo = () => {
    return (
        <div className="app-container">
            <h1>PokeDex</h1>
            <h3>Pokemon profile picture:</h3> 
            <input className="image-upload" type="file" id="image_input" accept="image/png, image/Jpg"/>
        </div>
    )
}

export default ChangePokeInfo;