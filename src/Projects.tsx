import React from 'react';
import Project from './component/Project';
import "./Project.css"

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on: </p>
            <ul className="projects-list">
                
                
                <li>
                    <Project
                        title="Proof of Code"
                        id="poc"
                        description={
                            <>
                                <h3>A project which allows students to definitively prove their code is their own. Developed as part of a team for Bitcamp 2026. See more about our winning project on devpost <a href='https://devpost.com/software/proof-of-code'>here</a>.</h3>
                            </>
                        }
                        future="Potentially speaking to umd faculty about using the project in classes."
                    />
 
                </li>
                
                
                <li>
                    <Project title="Wyvern Storyteller" id="wyvern" description= {<><h3>Large Language Model Enhanced Storytelling App </h3>
A fullstack application designed to emulate the complex task of acting as a game host for tabletop storybased strategy games such as <b>D&D</b> <br/>
Utilizing React, Meta’s Ollama platform, LLM tool calling, and various AI technologies the program is able to create behavior typically challenging for LLMs to exhibit while remaining model agnostic. <br/>
Here is a link explaining the <a href='https://playwithwyvern.com/'> project</a> </>
                } /> 
                </li>
                <li>
                <Project title="Book Rec Site" id="book" description="A nodeJS app using openlibrary's api and user input to recommend books." link="https://cmsc335-final.netlify.app/" linkTitle = "Book Rec" future="allow for more criteria impacting recomendations like date published."/>
                </li>
                <li>
                <Project title="This website" id="website" description="A website to talk about myself and review react with typescript" future="Improve integration with dark and light mode related browser extensions."/>
                </li>
                <li>
                <Project title="Parallel Process Research Project" id="threads" description= {<p>A project I worked on as part of   <a href='https://www.cs.umd.edu/class/fall2024/cmsc216-040X/'>CMSC 216 </a>  at the University of Maryland </p>}/>
                </li>

                <li>
                <Project title='Ethical Shopping App' id='ethic' description={<p>A project I worked on as a lead dev as part of UMD's 2023-2024 <a href='https://sites.google.com/umd.edu/careerlaunch2024/projects'>Break Through Tech's Career Launch </a> cohort, the focus of which was the creation of a demo app to improve ethical shopping practices and consumer awareness</p>} /> 
                </li>

                <li>
                    <Project title='Various simple tools' id='tools' description={<p>Tools and simple websites that I wished existed, so I made them. For example a url bloat remover <a href='/tools/short'>link</a></p>} />
                </li>

            </ul>
        </div>
    );

};

export default Projects;