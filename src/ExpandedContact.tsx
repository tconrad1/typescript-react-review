import Contact from './component/DynamicContact';
import React from 'react';
import "./ExpandedContact.css";
import {useState} from 'react';


const ExpandedContact = () => {
    const [contactState, changeContactState] = useState("simple");

    function switchContent() {
        if (contactState === "simple") {
            changeContactState("expanded");
        } else {
            changeContactState("simple");
        }
    }
    
    return (
        <div>
           
            {contactState === "simple" &&  <h1>Contact Info : Just the Basics</h1> && <Contact name="Thomas W Conrad" email="thomaswconrad2004@gmail.com" linkedin={null}>
                 press this button if you would be interested in my linkedin or various related acounts <button onClick={switchContent}></button> </Contact> }
            {contactState === "expanded" && < h1>Contact Info : <b>Expanded</b></h1> && <Contact name="Thomas W Conrad" email="thomaswconrad2004@gmail.com" linkedin="https://www.linkedin.com/in/thomas-conrad-552065225/"> 
                press this button if you would be interested in just seeing the basics <button onClick={switchContent}></button> </Contact>}
            {contactState !== "expanded" && contactState !== "simple" && <p> Now how did we get here? </p>}
        </div>
    );
    
    };
    export default ExpandedContact;
