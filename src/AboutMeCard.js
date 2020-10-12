import React from 'react';
import Card from './components/CardComponent.js';
import selfPortrait from './pictures/self_portrait.jpg';
import CardText from './components/CardTextComponent.js';
import CardImage from './components/CardImageComponent.js';
import CardTitle from './components/CardTitleComponent.js';
import Divider from './Divider'

const AboutMeCard = () => {
  const aboutMeImage = <CardImage variant='top' src={selfPortrait} />;
  const aboutMeTitle = <CardTitle>About Me</CardTitle>;
  const aboutMeText = (
    <CardText>
      My name is Ryan Chen. I'm from Gainesville, Florida. Currently, I am
      attending the University of California, Berkeley, and I am majoring in
      Computer Science. In my free time, I enjoy going to concerts, developing apps, and working out.
      I hope to have a tech startup some day in the near future. If that is successful, I want to use the money I earned to go
      to a good film school and make it big in the hollywood industry as a movie
      director.
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

export default AboutMeCard;
