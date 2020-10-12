import React from 'react';
import { Card } from 'react-bootstrap';
import './CardFlip.css';
import Divider from '../Divider'

// props has cardTitle, cardText, and frontImage
const CardComponent = (props) => {
  return (
    <Card style={styles.card}>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>{props.frontImage}</div>
          <div class='flip-card-back'>
            {props.cardTitle}
            <Divider style={{marginBottom: '10'}} />
            {props.cardText}
          </div>
        </div>
      </div>
    </Card>
  );
};

const styles = {
  card: {
    backgroundColor: 'transparent',
  },
};

export default CardComponent;
