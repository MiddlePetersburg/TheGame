import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import RouterPaths from './routes';

// Components
import { Navigation } from './components/ui/navigation';

const App = () => (
  <>
    <Router>
      <Navigation />
      <main className="main">
        <Routes>
          {RouterPaths.map((route) => (
            <Route key={route.meta.id} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </main>
    </Router>
  </>
);

export default App;
