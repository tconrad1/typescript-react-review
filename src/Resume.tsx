import React from 'react';
import { pdfjs } from 'react-pdf';


const Resume = () => {
    const res = require("./Thomas Conrad Resume.jpg")
    return (
        <div className='Body'>
            <img src = {res} alt="Thomas Conrad's Resume " style = {{width:'90%'}}></img>
        </div>
    );

};

export default Resume;