import React from 'react';


const Contact =  ({ name, email, linkedin, children  } : { name:String, email:String, linkedin:String|null, children: React.ReactNode} ) => {
    return (
        <div>
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            {linkedin && <p><strong>LinkedIn:</strong> {linkedin}</p>}
            {children}
        </div>
    );
};

export default Contact;