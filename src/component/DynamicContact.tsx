import React from 'react';


const Contact =  ({ name, email, linkedin, children  } : { name:String, email:String, linkedin:String|null, children: React.ReactNode} ) => {
    return (
        <div>
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {<a href={"mailto:" + email}> thomaswconrad2004@gmail.com</a>}</p>
            {linkedin && <p><strong>LinkedIn:</strong> {<a href={linkedin + ""} target='_blank'>linkedin</a>}</p>}
            {children}
        </div>
    );
};

export default Contact;