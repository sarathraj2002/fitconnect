import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);

  // Fetch the trainers from the backend
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('/api/trainers'); // Adjust this endpoint based on your API
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {trainers.map((trainer) => (
        <Grid item xs={12} sm={6} md={4} key={trainer._id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={trainer.profilePicture || 'https://www.placehold.it/150x150?text=No+Image'}
              alt={trainer.username || trainer.email}
            />
            <CardContent>
              <Typography variant="h5">{trainer.username || trainer.email}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Specialization: {trainer.specialization}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Experience: {trainer.experience} years
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Availability: {trainer.availability}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                {trainer.biography}
              </Typography>
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <Button variant="contained" color="primary">View Profile</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainersList;
