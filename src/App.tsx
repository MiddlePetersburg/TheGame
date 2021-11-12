import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import  RouterPaths from './routes/index';

//Components

import {Navigation} from './components/ui/navigation/index'

const App = () => (
  <>
    <Router>
      <Navigation/>
      <Routes>
        {RouterPaths.map((route, idx) =>(
          <Route key={idx} path={route.path} element={route.component()} />
        ))}
      </Routes>
    </Router>
  </>
);

export default App;
