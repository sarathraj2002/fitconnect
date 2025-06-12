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
    image: "https://www.google.com/imgres?q=Wear%20Comfortable%20Sneakers&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fshoe%2Fc%2Fs%2Fg%2F-original-imah2c4fy7zs4jwz.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fworld-wear-footwear-exclusive-range-stylish-comfortable-sports-sneakers-running-shoes-men%2Fp%2Fitme1ba044b8b5fe%3Fpid%3DSHOGNHYE7HN6UX9F%26lid%3DLSTSHOGNHYE7HN6UX9FTHNTGB%26marketplace%3DFLIPKART%26store%3Dosp%252Fcil%252F1cu%26srno%3Db_1_17%26otracker%3Dpp_reco_You%252Bmight%252Bbe%252Binterested%252Bin_4_37.dealCard.OMU_cid%253AS_F_N_osp_cil_1cu__d_70-100__NONE_ALL%253Bnid%253Aosp_cil_1cu_%253Bet%253AS%253Beid%253Aosp_cil_1cu_%253Bmp%253AF%253Bct%253Ad%253Bat%253ADEFAULT%253B%26otracker1%3Dpp_reco_PINNED_productRecommendation%252FAugmentSelling_You%252Bmight%252Bbe%252Binterested%252Bin_BANNER_HORIZONTAL_dealCard_cc_4_NA_view-all%26fm%3Dorganic%26iid%3Den_0AHLd7oZc9EoVfnCO_HU7jId4W8uzeMx4C1HUn8geYgdOaJ8S32RO2M29hNBLI2C6p1ttN6bmyVV50RlFL_iXfcUmN_6PwCReg_VTM4VLxo%253D%26ppt%3DNone%26ppn%3DNone%26ssid%3Dznqs3u2fog0000001711262402336&docid=DQpXuTKDZb4MjM&tbnid=XtG9NIIVWiU61M&vet=12ahUKEwiY-4f4vtaJAxV-d2wGHe63M04QM3oECGQQAA..i&w=833&h=1000&hcb=2&itg=1&ved=2ahUKEwiY-4f4vtaJAxV-d2wGHe63M04QM3oECGQQAA", 
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
