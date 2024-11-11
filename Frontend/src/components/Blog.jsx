import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';

const tips = [
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to stay hydrated and keep your body functioning properly.",
    image: "https://example.com/hydrate.jpg", // Replace with a valid image URL
  },
  {
    title: "Regular Exercise",
    description: "Aim for at least 30 minutes of moderate exercise a day, such as walking, jogging, or cycling.",
    image: "https://example.com/exercise.jpg", // Replace with a valid image URL
  },
  {
    title: "Eat More Greens",
    description: "Include more vegetables and fruits in your diet to get essential vitamins and minerals.",
    image: "https://example.com/greens.jpg", // Replace with a valid image URL
  },
  {
    title: "Sleep Well",
    description: "Ensure 7-8 hours of quality sleep each night for optimal recovery and well-being.",
    image: "https://example.com/sleep.jpg", // Replace with a valid image URL
  },
];

const TipsCard = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {tips.map((tip, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {tip.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={tip.image}
                  alt={tip.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tip.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TipsCard;