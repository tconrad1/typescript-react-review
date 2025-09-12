import React from 'react';
import Contact from './component/DynamicContact';
import Picture from './component/Picture';
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>My name is <b>Thomas Conrad</b> and I am a software developer, and sophomore at <a href='https://umd.edu/'> UMD</a>.
             I have experience with <b>React</b>, <b>JS/Typescript</b>, <b>Node.js</b>, <b>Java</b>, <b> C</b>,<b> Python</b>, and <b>Express.js</b>. 
             I am currently looking for an internship, part time work, and more chances to gain experience. </p>
            
             <Contact  name="Thomas Conrad" email="thomaswconrad2004@gmail.com" linkedin={null} children = {<p>Feel free to reach out to me via email!</p>}  /> 
            {/* <div className='personal'> <p>Here is some fun personal stuff </p> <Picture title="my cat" source= "chayka.jpg"  description="an image of my cat chayka in which she looks very suspicious of the viewer. " /></div> */}

        </div>

    );
};

    export default About;