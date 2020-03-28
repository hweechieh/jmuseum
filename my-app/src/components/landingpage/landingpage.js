import React from 'react';
import './landingpage.css';

import LandingPageBg from './images/bg.gif';
import RightCloud from './images/rightcloud.png';
import LeftCloud01 from './images/leftcloud01.png';
import LeftCloud02 from './images/leftcloud02.png';
import Title from './images/small_title.png';
import Cloud01 from './images/cloud_lowopac_01.png';
import Cloud02 from './images/cloud_lowopac_02.png';
import Vignette from './images/vignette.png';


export default function LandingPage() {
  return (
    <div className="LandingPage">
      <img className="Vignette" src={Vignette} alt="vignette" />
      <img className="Rightcloud" src={RightCloud} alt="cloud" />
      <img className="Leftcloud01" src={LeftCloud01} alt="cloud" />
      <img className="Leftcloud02" src={LeftCloud02} alt="cloud" />
      <img className="Title" src={Title} alt="title" />
      <img className="Cloud01" src={Cloud01} alt="cloud" />
      <img className="Cloud02" src={Cloud02} alt="cloud" />
      <img className="Background" src={LandingPageBg} />
    </div>
  );
}

