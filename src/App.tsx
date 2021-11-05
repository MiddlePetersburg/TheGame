import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Game from './components/pages/Game';
import Profile from './components/pages/Profile';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/game" element={<Game/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
