import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <Box className="hero-section" mt={10} py={5}>
    <Grid container spacing={-10}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="secondary">Welcome Developers!</Typography>
        <Box mt={5}>
        <Typography variant="h2" color="secondary">Developer Portal</Typography>
        </Box>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>Payment, Lockbox and Treasury Solutions</Typography>
        <Box mt={2}>
          <Typography variant="h5" color="secondary">Start Here</Typography>
          <Box mt={2}>
          <Button variant="contained" color="primary" sx={{ mr: 2, color: 'white', textTransform: 'capitalize', fontSize: 18 }}>Create Your Account</Button>
          <Button variant="contained" color="primary" sx={{ color: 'white', textTransform: 'capitalize', fontSize: 18 }}>Developer Guide</Button>
          </Box>
          <Box mt={2}>
          <Typography variant="h5" color="secondary">Directly to API</Typography>
          </Box>
          <Box mt={2}>
          <Button variant="contained" color="primary" sx={{ mr: 2, color: 'white', textTransform: 'capitalize', fontSize: 18 }}>View Documentation</Button>
          <Button variant="contained" color="primary" sx={{ color: 'white', textTransform: 'capitalize', fontSize: 18 }}>Download Postman Collection</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={heroImage} alt="Hero" className="hero-image"/>
      </Grid>
      </Grid>
      <Typography mt={18} sx={{ color: 'text.secondary', fontSize: 'h4.fontSize' }}>
      Financial institutions and businesses need a partner with the technology, talent and imagination to provide solutions across the payments spectrum. From processing paper checks, which are still a mainstay of the payment ecosystem, to providing software and APIs, CheckAlt manages complex payment flows - so you can focus on what matters.
      </Typography>
    </Box>
  );
};

export default HeroSection;