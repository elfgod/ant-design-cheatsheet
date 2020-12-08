import React from 'react';

import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'
import Appworks from '../components/home/works'
const AppHome = () => {
    return (
        <div className="main">
          <AppHero />          
          <AppAbout />    
          <AppFeature /> 
          <Appworks />

            
        </div>
    );
}

export default AppHome;