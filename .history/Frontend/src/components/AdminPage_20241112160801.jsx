import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
  const [clients, setClients] = auseState([]);
  const [trainers, setTrainers] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientResponse = await axios.get('/api/admin/clients');
        const trainerResponse = await axios.get('/api/admin/trainers');
        setClients(clientResponse.data);
        setTrainers(trainerResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Block or Unblock Client/Trainer
  const toggleBlock = async (id, type, blocked) => {
    try {
      await axios.patch(`/api/admin/${type}/${id}`, { blocked: !blocked });
      // Update UI after blocking/unblocking
      if (type === 'client') {
        setClients(
          clients.map((client) =>
            client._id === id ? { ...client, blocked: !blocked } : client
          )
        );
      } else {
        setTrainers(
          trainers.map((trainer) =>
            trainer._id === id ? { ...trainer, blocked: !blocked } : trainer
          )
        );
      }
    } catch (error) {
      console.error(`Error updating ${type}:`, error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Clients</h3>
      <table>
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
                <button onClick={() => toggleBlock(client._id, 'client', client.blocked)}>
                  {client.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Trainers</h3>
      <table>
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
