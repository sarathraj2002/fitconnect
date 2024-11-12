
import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        mt: -2
      }}
    >
      <Stack
        direction={{ xs: 'column' }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
      
        <Box>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            We offer the best online fitness consulting and resources to help you achieve your health goals.
          </Typography>
        </Box>

        
        <Box>
          <Typography variant="h6">Services</Typography>
          <Link href="/services" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Personal Training
          </Link>
          <Link href="/services" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Nutrition Plans
          </Link>
          <Link href="/services" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Workout Guides
          </Link>
        </Box>

        
        <Box>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Email: contact@fitconnect.com</Typography>
          <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
        </Box>

       
        <Box>
          <Typography variant="h6">Follow Us</Typography>
          <Link href="https://facebook.com" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Facebook
          </Link>
          <Link href="https://twitter.com" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Twitter
          </Link>
          <Link href="https://instagram.com" color="inherit" underline="none" sx={{ display: 'block', mt: 1 }}>
            Instagram
          </Link>
        </Box>
      </Stack>

    
      <Typography variant="body2" sx={{ mt: 3 }}>
        &copy; {new Date().getFullYear()} FitConnect. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
