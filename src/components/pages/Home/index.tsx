import React from 'react';
import Modal from '@mui/material/Modal';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/core/styles.scss';

import './Home.scss';

const Home = () => {
  const [state, setState] = React.useState({ open: false, selectedImg: '' });
  const handleOpen = (e:any) => setState(() => ({ open: true, selectedImg: e.target.src }));
  const handleClose = () => setState(() => ({ open: false, selectedImg: '' }));
  return (
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
      <div className="home__help">
        <h2 className="help__title">Help</h2>
        <ul className="help__list">
          <li className="help__list-item">
            <p className="list-item__text">1 Select a cell on the field with the mouse and install a defender in it</p>
            {' '}
            <div className="list-item__img-wrp">
              <img onClick={handleOpen} className="list-item__img" src="../../../assets/screenshots/Instruction_1.png" alt="Instruction_1" />
              <img onClick={handleOpen} className="list-item__img" src="../../../assets/screenshots/Instruction_2.png" alt="Instruction_2" />
            </div>
          </li>
          <li className="help__list-item">
            <p className="list-item__text">2 To increase the defender's attack power, click on it with the mouse</p>
            <img onClick={handleOpen} className="list-item__img" src="../../../assets/screenshots/Instruction_3.png" alt="Instruction_3" />
          </li>
          <li className="help__list-item">
            <p className="list-item__text">3 You can apply super skills for special attacks</p>
            <img onClick={handleOpen} className="list-item__img" src="../../../assets/screenshots/Instruction_4.png" alt="Instruction_4" />
          </li>
        </ul>
      </div>
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
      <Modal
        open={state.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-wrp">
          <img src={state.selectedImg} alt="Instruction__img" />
        </div>
      </Modal>
    </div>);
};

export default Home;
