import React from 'react';
import { useState } from 'react'
import './App.css'

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
