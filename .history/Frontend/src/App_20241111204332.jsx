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
        <Route path="/" element={<Home />}></Route> 
        <Route path="/client" element={<ClientPage />}></Route> 
        <Route path="/trainer" element={<TrainerPage />} ></Route>
        <Route path="/admin" element={<AdminPage />}></Route> 
        <Route path="/trainerlist" element={<TrainerListPage />}></Route> 
        <Route path="/about" element={<AboutUs />}></Route> 
        <Route path="/start"></Route>
      </Routes>
    
  

    </>
  )
}

export default App
