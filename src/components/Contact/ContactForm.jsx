import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import Spinner from './spinner';
import PortfolioContext from '../../context/context';

// const API_KEY = process.env.CONTACT_US_KEY;
const userID = 'user_6oyAqueU76FCCCyTXrR55';
const serviceID = 'service_5v6ync6';
const template = 'template_age0p6c';

export default function ContactForm() {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const [showSpinner, setShowSpinner] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setShowSpinner(true);
    setTimeout(()=>{
      setShowSpinner(false);
      setMessageSent (true);
    }, 750);
    emailjs.sendForm(serviceID, template, e.target, userID)
      .then((result) => {
          // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contactFormContainer" id="contact-me" >
      <div className="contact-wrapper">
        <p className="contact-wrapper__text">
          {cta || 'Would you like to work with me? Awesome!'}
        </p>       
      </div>
      <form className="contactForm" onSubmit={sendEmail}>
        <label className="contactForm-label">Your Name</label>
        <input 
          className="contactForm-input" 
          type="text" 
          name="user_name" 
          placeholder="e.g. Jane Doe"
          required/>
        <label className="contactForm-label">Email</label>
        <input 
          className="contactForm-input" 
          type="email" 
          placeholder="e.g. janedoe@email.com"
          name="user_email" />
        <label className="contactForm-label">Message</label>
        <textarea 
          className="contactForm-input" 
          name="message" 
          placeholder="Enter message here..." 
          required/>
        {
          !messageSent && !showSpinner &&
          <input className="cta-btn cta-btn--resume contact-btn" type="submit" value="Send" />
        }
      </form>
      {showSpinner && <Spinner/>}
      {
        messageSent && 
        <p className="messageSent">
          Thanks for your message!
        </p>
      } 
    </div>
  );
}