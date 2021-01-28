import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={800} distance="0px">
          <Title title="Contact" />
          <ContactForm/>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
