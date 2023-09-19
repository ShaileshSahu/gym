import React from 'react'
import {Box,  Typography,Button} from '@mui/material';
import HeroBannerImage from  '../assests/banner.png';
function HeroBanner() {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}  mb="23px" mt="20px">
        Sweet, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="25px" mb={3}>
        Check out the most effective Fitness
      </Typography>
      <Button variant="contained" color="error" href="#excersices" sx={{backgroundColor:"#ff2625", padding:"10px"}}>Explore Exersices</Button>
      <Typography fontWeight={600} fontSize="200px"color="#ff2625" sx={{opacity:0.1, display: {lg:'block',xs:"none"}}}>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-images"/>   
    </Box>
    )
}

export default HeroBanner;
