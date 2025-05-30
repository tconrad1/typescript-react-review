import React, { JSX } from "react";
import "./Project.css";

function Project({ title, id="DefProj",  description, link="", future="" }: { title: string; id:string; description: string | JSX.Element, link?: string; future?: string }) {
    return (
        <div>
            <h1>Project: {title}</h1>
            {link && <a href="Link to a project"> {link}</a>}
            <p>{description} </p>
            
            {future && <p>Future Plans: {future}</p>}

        </div>
    );
}


export default Project;