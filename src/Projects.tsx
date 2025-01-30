import React from 'react';
import Project from './component/Project';
import "./Project.css"

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
                <Project title="Parallel Process Research Project" id="threads" description= {<p>A project I worked on as part of   <a href='https://www.cs.umd.edu/class/fall2024/cmsc216-040X/'>CMSC 216 </a>  at the University of Maryland </p>}/>
                </li>

                <li>
                <Project title='Ethical Shopping App' id='ethic' description={<p>A project I worked on as a lead dev as part of UMD's 2023-2024 <a href='https://sites.google.com/umd.edu/careerlaunch2024/projects'>Break Through Tech's Career Launch </a> cohort, the focus of which was the creation of a demo app to improve ethical shopping practices and consumer awareness</p>} /> 
                </li>

            </ul>
        </div>
    );

};

export default Projects;