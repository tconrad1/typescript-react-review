import Contact from './component/DynamicContact';
import React from 'react';
import "./ExpandedContact.css";

const ExpandedContact = () => {
    return (
        <div>
            <h1>Contact Info</h1>
            <Contact
                name="Thomas W. Conrad"
                email="thomaswconrad2004@gmail.com"
                linkedin="https://www.linkedin.com/in/thomas-conrad-552065225/"
            >
                Feel free to reach out to me via email or LinkedIn.
            </Contact>
        </div>
    );
};

export default ExpandedContact;
