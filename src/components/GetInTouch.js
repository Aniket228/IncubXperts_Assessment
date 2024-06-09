import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const GetInTouch = () => {
  return (
    <Container className="get-in-touch" sx={{ bgcolor: 'white' }}>
      <Typography variant="h4">Get In Touch</Typography>
      <Typography mt={2} sx={{ color: 'text.secondary', fontSize: 'h5.fontSize' }}>Enter your email and look for a message from CheckAlt.</Typography>
      <Box component="form" mt={2}>
        <div>
        <TextField label="Email" placeholder='Enter your Email' required /></div><br />
        <Button variant="contained" color="primary" sx={{ mt: 6, color: 'white', textTransform: 'capitalize' }} type="submit">Contact Me</Button>
      </Box>
    </Container>
  );
};

export default GetInTouch;