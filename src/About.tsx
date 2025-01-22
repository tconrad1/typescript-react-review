import React from 'react';
import Contact from './component/Contact';
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>My name is <b>Thomas Conrad</b> and I am a software developer, and sophomore at <a href='https://umd.edu/'> UMD</a>.
             I have experience with <b>React</b>, <b>JS/Typescript</b>, <b>NodeJS</b>, <b>Java</b>, <b> C</b>,<b> Python</b>, and <b>expressJS</b>. 
             I am currently looking for a summer internship and more chances to gain experience. </p>
            
             <Contact  name="Thomas Conrad" email="thomaswconrad2004@gmail.com" linkedin={null} children = {<p>Feel free to reach out to me via email!</p>}  /> 
       
        </div>

    );
};

    export default About;