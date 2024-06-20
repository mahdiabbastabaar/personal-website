import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Album from './components/Album';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
};

export default App;
