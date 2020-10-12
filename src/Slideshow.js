import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import './styles.css';
import './slideshowStyles.css';
import China from './pictures/China.jpg';
import Emily from './pictures/Emily.png';
import GradPhoto from './pictures/GradPhoto.png';
import Jordans from './pictures/Jordans.png';

function Slideshow() {
  $(document).ready(function() {
    $('#slideshow > div:gt(0)').hide();
    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
    }, 5000);
  });
  return (
    <>
      <div id='slideshow'>
        <div>
          <img src={GradPhoto} />
        </div>
        <div>
          <img src={Emily} />
        </div>
        <div>
          <img src={Jordans} />
        </div>
      </div>
    </>
  );
}

export default Slideshow;
