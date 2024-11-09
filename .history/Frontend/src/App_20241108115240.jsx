import React from 'react';
import { useState } from 'react'
import './App.css'    
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ClientPage from './components/ClientPage';
import TrainerPage from './components/TrainerPage';
import AdminPage from './components/AdminPage';
import TrainerListPage from './components/TrainerListPage';
import AboutUs from './components/AboutUs.jsx';
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/client" element={<ClientPage />}/>
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/trainerlist" element={<TrainerListPage />}/>
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
    

    </>
  )
}

export default App
