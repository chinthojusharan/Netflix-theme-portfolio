import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Recruiter from './pages/Recruiter';
import Stalker from './pages/Stalker';
import WhoWatching from './pages/WhoWatching';
import ProjectDetail from './pages/ProjectDetail';
import AddProject from "./pages/AddProject";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from './components/ScrollToTop';


function App() {
  const location = useLocation();
  const hideNavbar = ['/', '/whowatching'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/whowatching" element={<WhoWatching />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
