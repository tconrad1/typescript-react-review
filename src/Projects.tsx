import React from 'react';
import Project from './component/Project';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on: </p>
            <br></br>
            <ul>
                <li>
                <Project title="This website" id="Proj1" description="A website to talk about myself and review react with typescript" future="flesh it out and fix up the css a bit"/>
                </li>
                <li>
                    
                </li>

            </ul>
        </div>
    );

};

export default Projects;