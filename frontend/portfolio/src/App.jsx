import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Recruiter from './pages/Recruiter';
import Stalker from './pages/Stalker';
import WhoWatching from './pages/WhoWatching';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();
  const hideNavbar = ['/', '/whowatching'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whowatching" element={<WhoWatching />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
