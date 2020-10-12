import React from 'react';
import Card from './components/CardComponent.js';
import airDrake from './pictures/air_drake.jpg';
import CardText from './components/CardTextComponent.js';
import CardImage from './components/CardImageComponent.js';
import CardTitle from './components/CardTitleComponent.js';
import './styles.css'
import Divider from './Divider'

const ContactCard = () => {
  const aboutMeImage = <CardImage variant='top' src={airDrake} />;
  const aboutMeTitle = <CardTitle>Contact Me</CardTitle>;
  const aboutMeText = (
    <CardText>
      <ul className='contact'>
        Email:{' '}
        <a style={styles.hyperlink} href='mailto:ryanjchen@berkeley.edu'>
         ryanjchen@berkeley.edu
        </a> {' '}
        <br></br> Phone Number:{' '}
        <a style={styles.hyperlink} href='tel:+13523270275'>
          352-327-0275
        </a>{' '}
        <br></br>
        Address: 2717 Channing Way, Apt 3, {'      '} Berkeley, California
      </ul>
    </CardText>
  );

  return (
    <Card
      frontImage={aboutMeImage}
      cardTitle={aboutMeTitle}
      cardText={aboutMeText}
    />
  );
};

let styles = {
  hyperlink: {
    fontSize: 20,
    paddingRight: 15,
    fontFamily: 'Ubuntu',
    fontWeight: 50,
    fontWeight: 400,
  },
}

export default ContactCard;
