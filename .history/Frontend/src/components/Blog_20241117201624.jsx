import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';

const tips = [
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to stay hydrated and keep your body functioning properly.",
    image: "https://extension.usu.edu/images/news_images/hydration-image.jpg", // Replace with a valid image URL
  },
  {
    title: "Regular Exercise",
    description: "Aim for at least 30 minutes of moderate exercise a day, such as walking, jogging, or cycling.",
    image: "https://www.diamondhealthinc.com/wp-content/uploads/2020/01/Group-of-Men-and-Women-Jogging-scaled-1.jpeg", // Replace with a valid image URL
  },
  {
    title: "Eat More Greens",
    description: "Include more vegetables and fruits in your diet to get essential vitamins and minerals.",
    image: "https://wellbeingnutrition.com/cdn/shop/articles/blog-2_1.jpg?v=1678290040", // Replace with a valid image URL
  },
  {
    title: "Sleep Well",
    description: "Ensure 7-8 hours of quality sleep each night for optimal recovery and well-being.",
    image: "https://res.cloudinary.com/dycihkdzs/image/upload/c_fill,f_auto/cloud/download/7-cara-tidur-nyenyak-setiap-malam-dengan-mudah-2-07022023-012308.jpg", // Replace with a valid image URL
  },
  {
    title: "Eat more fish",
    description: "A healthy, balanced diet should include at least 2 portions of fish a week, including 1 of oily fish.",
    image: "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2019/february-2019/fish-and-your-heart/fish-selection-620x400-ss-noexp.jpg?rev=6e35ebe17f6745c584a9eceffa648779", // Replace with a valid image URL
  },
  {
    title: "Wear Comfortable Sneakers",
    description: "Your feet swell during the day and stop in the late afternoon, so if you need sneakers, you'll want to shop when your feet are biggest. Also, make sure the shoes are a little roomy—enough to wiggle your toes, but no more than that.",
    image: "https://www.eatingwell.com/thmb/l7R7cnfVnRO7SnSkhwd78d5FR04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roundup-up-comfy-sneakers-77325f0fa7294506941e1fe255d79c01.jpg", // Replace with a valid image URL
  },
];

const TipsCard = () => {
  return (
    <Grid container spacing={3} sx={{ paddingLeft: 13,paddingTop:5 }}>
      {tips.map((tip, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 ,height: "100%", // Ensure cards have equal height
              display: "flex",
              flexDirection: "column", }}>
            <CardActionArea sx={{ flexGrow: 1 }}>
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
