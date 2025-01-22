import React from "react";
import "./Project.css";

function Project({ title, id="DefProj",  description, future="" }: { title: string; id:string; description: string, future?: string }) {
    return (
        <div>
            <h1>Project</h1>
            <h2>{title}</h2>
            <p>{description} </p>
            /* If there are future plans for the project, they will be displayed here. */
            {future && <p>Future Plans: {future}</p>}

        </div>
    );
}


export default Project;