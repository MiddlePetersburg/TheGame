import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// urls
import { RouterPaths } from './constants/urls';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Game from './components/pages/Game';
import Profile from './components/pages/Profile';
import Board from './components/pages/Board';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path={RouterPaths.HOME} element={<Home />} />
        <Route path={RouterPaths.LOGIN} element={<Login />} />
        <Route path={RouterPaths.SIGNUP} element={<Signup />} />
        <Route path={RouterPaths.GAME} element={<Game />} />
        <Route path={RouterPaths.PROFILE} element={<Profile />} />
        <Route path={RouterPaths.BOARD} element={<Board />} />
      </Routes>
    </Router>
  </>
);

export default App;
