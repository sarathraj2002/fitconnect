import React from 'react'
import { assets } from '../assets/assets'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
const Home = () => {
  return (
    
    <>
    <Nav/>
    <div className='img' style={{ position: 'relative', textAlign: 'center' }}>
      
    <img
      style={{  width: '100%',filter: 'brightness(70%)' }}
      src={assets.head1}
      alt=""
    />
    <p
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white', 
        fontSize: '70px',
        
        fontFamily:'fantasy'
      }}
    >
      THE BEST FITNESS STUDIO CONSULTING IN ONLINE
      <Stack spacing={2} direction="row" alignItems="center" 
      justifyContent="center" 
      style={{ height: '30vh' }} >
      
      <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>START HERE</Button>
    </Stack>

    </p>
   

   

    </div>
      
    </>
  )
}

export default Home;