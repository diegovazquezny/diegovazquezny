import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="ContactMe-root" id="resume">
      <div className="contactTitleWrapper">
        <h1 className="contactTitle">Contact Me</h1>
      </div>
      <div className="contactContainer">
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
