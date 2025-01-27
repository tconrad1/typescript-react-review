import React from 'react';
import "./Resume.css";

const Resume = () => {
    const res = require("./Thomas Conrad Resume.jpg")
    return (
        <div className='Resume'>
            <img src = {res} alt="Thomas Conrad's Resume " />
        </div>
    );

};

export default Resume;