import React from 'react';
import './App.css';
import './styles.css';
import BerkeleySeal from './pictures/BerkeleySeal.png';

function TopBar(props) {
  return (
    <>
      <header>
        <nav>
          <ul className='navlinks'>
            <li>
              <a href='https://www.berkeley.edu/' target='_blank'>
                <img className='seal' src={BerkeleySeal} alt='berk logo' />
              </a>
              <a href='https://github.com/rjchen7' target='_blank'>
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/ryan-chen-a25778189/'
                target='_blank'>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=100007688054575&lst=100007688054575%3A100007688054575%3A1571506422&sk=timeline'
                target='_blank'>
                Facebook
              </a>
            </li>
          </ul>
        </nav>
        <div className='name'>Ryan Chen</div>
      </header>
    </>
  );
}

export default TopBar;
