import React from "react";
import "./Project.css";

function Project({ title, id="DefProj",  description, future="" }: { title: string; id:string; description: string, future?: string }) {
    return (
        <div>
            <h1>Project: {title}</h1>
           
            <p>{description} </p>
            
            {future && <p>Future Plans: {future}</p>}

        </div>
    );
}


export default Project;