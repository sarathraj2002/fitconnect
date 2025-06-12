import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Alert } from '@mui/material';
import axios from 'axios';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState(null); // To handle errors
  const [loading, setLoading] = useState(true); // To show loading state

  // Fetch the trainers from the backend
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trainer/view'); // Corrected API endpoint

        // Ensure that response.data is an array before setting state
        if (Array.isArray(response.data)) {
          setTrainers(response.data);
        } else {
          setError("No trainers found");
        }
      } catch (error) {
        console.error("Error fetching trainers:", error);
        setError("Failed to fetch trainers. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchTrainers();
  }, []);

  // Conditional rendering for loading, error, and data display
  if (loading) {
    return <Typography variant="h6" align="center">Loading trainers...</Typography>;
  }

  if (error) {
    return <Alert severity="error" style={{ margin: '20px' }}>{error}</Alert>;
  }

  if (trainers.length === 0) {
    return <Typography variant="h6" align="center">No trainers available</Typography>;
  }

  return (
    <Grid container spacing={5} style={{ padding: '20px' }}>
      {trainers.map((trainer) => (
        <Grid item xs={12} sm={6} md={4} key={trainer._id}>
          <Card 
            style={{
              
            }}>
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
