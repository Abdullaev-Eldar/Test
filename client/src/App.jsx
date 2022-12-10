import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CandidatCard from './CandidatCard/CandidatCard';
import Header from './Header/Header';
import Candidates from './Main/Candidates/Candidates';
import MyTask from './Main/MyTask/MyTask';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/mytask" element={<MyTask />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidatcard" element={<CandidatCard />} />
      </Routes>
    </>
  );
}

export default App;
