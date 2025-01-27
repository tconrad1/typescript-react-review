import React from 'react';
import "./Picture.css"


function Picture ({ title, id="img", source="chayka.jpg",  description="no description" }: { title: string; id?:string; source:string; description: string }) {
    
    const filePath = require("../images/" + source);
    return (
        <div className="picture" id={id}>
        <div>
        <h1> {title} </h1>
        <img src = {filePath} alt={title + " " + description}/> 
        <p>{description}</p>
        </div>
        </div>
    );
}


export default Picture;