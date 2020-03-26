import React from 'react';
import './landingpage.css';
import RightCloud from './images/rightcloud.png';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <header>
          <img className="LandingPage-rightcloud" src={RightCloud} alt="cloud" />
      </header>
    </div>
  );
}

