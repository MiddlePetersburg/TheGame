import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// urls
import { generalUrls } from './constants/urls';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Game from './components/pages/Game';
import Profile from './components/pages/Profile';
import Board from './components/pages/Board';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={generalUrls.HOME} element={<Home />} />
          <Route path={generalUrls.LOGIN} element={<Login />} />
          <Route path={generalUrls.SIGNUP} element={<Signup />} />
          <Route path={generalUrls.GAME} element={<Game />} />
          <Route path={generalUrls.PROFILE} element={<Profile />} />
          <Route path={generalUrls.BOARD} element={<Board />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
