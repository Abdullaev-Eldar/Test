import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Candidates from './Main/Candidates/Candidates';
import Menu from './Main/Menu/Menu';
import MyTask from './Main/MyTask/MyTask';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Menu />
      <Routes>
        <Route path="/mytask" element={<MyTask />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
    </>
  );
}

export default App;
