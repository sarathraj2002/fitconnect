import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const TrainerProfile = ({ trainerId, onClose }) => {
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/trainer/view/${trainerId}`);
        setTrainer(response.data);
      } catch (error) {
        console.error("Error fetching trainer details:", error);
        setError("Failed to load trainer profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainer();
  }, [trainerId]);

  if (loading) {
    return <CircularProgress style={{ display: 'block', margin: '20px auto' }} />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!trainer) {
    return null;
  }

  return (
    <Card style={{ maxWidth: '500px', margin: '20px auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={trainer.profilePicture || 'https://www.placehold.it/150x150?text=No+Image'}
        alt={trainer.username || trainer.email}
      />
      <CardContent>
        <Typography variant="h5">{trainer.username || trainer.email}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Specialization: {trainer.specialization || 'Not available'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Experience: {trainer.experience || 'Not specified'} years
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Availability: {trainer.availability || 'Not specified'}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
          Biography: {trainer.biography || 'No biography available'}
        </Typography>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerProfile;
