import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainerListPage() {
  const [trainers, setTrainers] = useState([]);

  // Fetch trainers from the backend
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/client/trainers'); // Adjust the route as needed
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);

  // Consult with a specific trainer
  const handleConsult = (trainerId) => {
    // Here you can redirect to a consultation page or open a chat
    console.log(`Consult with trainer: ${trainerId}`);
    // Redirect to consultation page or chat feature for the selected trainer
  };

  return (
    <div>
      <h2>Available Trainers</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{trainer.name}</h3>
            <p>Email: {trainer.email}</p>
            <p>Experience: {trainer.experience} years</p>
            <button onClick={() => handleConsult(trainer._id)}>Consult Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerListPage;
