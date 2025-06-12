import React, { useState, useEffect } from 'react';
import './AdminPage.css'
import { ToggleButton } from '@mui/material';

// Mock data for clients and trainers
const mockClients = [
  { _id: '1', name: 'John Doe', email: 'john@example.com', age: 25, blocked: false },
  { _id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 30, blocked: true },
];

const mockTrainers = [
  { _id: '1', name: 'Alice Green', email: 'alice@example.com', experience: 5, blocked: false },
  { _id: '2', name: 'Bob Brown', email: 'bob@example.com', experience: 8, blocked: true },
];

function AdminPage() {
  const [clients, setClients] = useState([]);
  const [trainers, setTrainers] = useState([]);

  // Simulate fetching data from the backend
  useEffect(() => {
    // Mock delay for fetching data
    setTimeout(() => {
      setClients(mockClients);
      setTrainers(mockTrainers);
    }, 1000); // Simulate network delay
  }, []);

  // Block or Unblock Client/Trainer
  const toggleBlock = (id, type, blocked) => {
    // Simulate updating the "blocked" status
    if (type === 'client') {
      setClients(clients.map(client => 
        client._id === id ? { ...client, blocked: !blocked } : client
      ));
    } else {
      setTrainers(trainers.map(trainer => 
        trainer._id === id ? { ...trainer, blocked: !blocked } : trainer
      ));
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Clients Section */}
      <h3>Clients</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Blocked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.age}</td>
              <td>{client.blocked ? 'Yes' : 'No'}</td>
              <td>
                <button  onClick={() => toggleBlock(client._id, 'client', client.blocked)}>
                  {client.blocked ? 'Unblock' : 'Block'}
                </button>
                <button onClick={() => ToggleButton(client._id)}></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Trainers Section */}
      <h3>Trainers</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Blocked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer._id}>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{trainer.experience}</td>
              <td>{trainer.blocked ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => toggleBlock(trainer._id, 'trainer', trainer.blocked)}>
                  {trainer.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
