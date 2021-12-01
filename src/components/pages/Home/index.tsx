import React from 'react';

import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/core/styles.scss';

import './Home.scss';

const Home = () => (
  <div className="home">
    <h2 className="home__title">TheGame</h2>
    <h3 className="home__about">About the game</h3>
    <p className="home__description">TheGame, this is a genre of tower defense games, where the player's goal is to protect their territories from enemy attacks. To do this, place defenders on the map, improve their level.</p>
    <AwesomeSlider className="home__slider">
      <div data-src="../../../assets/screenshots/Screenshot_1.png" />
      <div data-src="../../../assets/screenshots/Screenshot_2.png" />
      <div data-src="../../../assets/screenshots/Screenshot_3.png" />
      <div data-src="../../../assets/screenshots/Screenshot_4.png" />
    </AwesomeSlider>
    <div className="home__information">
      <p className="information__row">
        Age rating
        <span className="information__row-right">16+</span>
      </p>
      <p className="information__row">
        Platforms
        <div className="information__row-right">
          <DesktopWindowsIcon />
          <PhoneAndroidIcon />
        </div>
      </p>
      <p className="information__row">
        Authorization support
        <span className="information__row-right">Yes</span>
      </p>
      <p className="information__row">
        Localization
        <span className="information__row-right">English</span>
      </p>
    </div>
  </div>
);

export default Home;
