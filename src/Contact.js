import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';

function Contact() {
  return (
    <>
      <div className='textHeading'>Contact:</div>
      <ul className='textBody'>
        Email:{' '}
        <a className='contact' href='mailto:ryanjchen@berkeley.edu'>
          ryanjchen@berkeley.edu
        </a>{' '}
        <br></br> Phone Number:{' '}
        <a className='contact' href='tel:+13523270275'>
          352-327-0275
        </a>{' '}
        <br></br>
        Address: 8868 SW 11th Ave, Gainesville, FL
      </ul>
    </>
  );
}

export default Contact;
