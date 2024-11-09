import React from 'react';
import { useState } from 'react'
import './App.css'
    
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ClientPage from './components/ClientPage';
import TrainerPage from './components/TrainerPage';
import AdminPage from './components/AdminPage';
import TrainerListPage from './components/TrainerListPage';
import AboutUs from './components/AboutUs';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/trainerlist" element={<TrainerListPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

    </>
  )
}

export default App
