import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Information from './Information';

function App() {
  document.body.style.backgroundColor = 'white';
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <TopBar />
      <Information />
    </div>
  );
}

export default App;
