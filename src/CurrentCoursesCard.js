import React from 'react';
import Card from './components/CardComponent.js';
import campanile from './pictures/campanile.jpg';
import CardText from './components/CardTextComponent.js';
import CardImage from './components/CardImageComponent.js';
import CardTitle from './components/CardTitleComponent.js';
import Divider from './Divider'

const CurrentCoursesCard = () => {
  const aboutMeImage = <CardImage variant='top' src={campanile} />;
  const aboutMeTitle = <CardTitle>Current Courses</CardTitle>;
  const aboutMeText = (
    <CardText>
      <ul style={styles.courses}>
        <li>Data Structures</li>
        <li>Principles and Techniques of Data Science</li>
        <li>Principle of Business</li>
        <li>Introduction to Culture and Natural Resource Management</li>
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
  courses: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  }
}

export default CurrentCoursesCard;
