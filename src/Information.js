import React from 'react';
import './App.css';
import './styles.css';
import CardContainer from './components/CardContainerComponent.js';
import backgroundImage from './pictures/darkblue-background.jpg';
import AboutMeCard from './AboutMeCard.js';
import CurrentCoursesCard from './CurrentCoursesCard.js';
import ContactCard from './ContactCard.js';
import './Wave.css'

const Information = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <CardContainer>
          <CurrentCoursesCard />
          <AboutMeCard />
          <ContactCard />
        </CardContainer>
      </div>
      <div style={styles.background} className='ocean'>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    // position: 'relative',
    height: '100vh',
  },
  content: {
    // position: 'relative',
    zIndex: 100,
  },
  background: {
    zIndex: -100,
  }
};

export default Information;
