import React from 'react';
import { Container, TextField, Button, Box, Typography, Grid } from '@mui/material';

const RegistrationForm = () => {
  return (
    <Container className="registration-form">
      <Typography variant="h5" color="secondary" mt={3}>Developer Registration</Typography>
      <Typography variant="h4" color="secondary" mt={5}>Create Your Account</Typography>
      <Typography mt={2}>Already have an account?<a href="#">Sign In</a></Typography>
      <Typography mt={3} sx={{ color: 'text.secondary', fontStyle: 'italic' }}>All fields are required</Typography>
      <Box component="form" mt={4} >
        <div>
        <TextField label="First Name" placeholder="Enter your First Name" required />
        <TextField label="Last Name" placeholder="Enter your Last Name" required />
        </div>
        <div>
        <TextField label="Email Address" placeholder="Enter your Email Address" required />
        <TextField label="Organization" placeholder="Enter your Organization" required />
        </div>
        <div>
        <TextField label="Website" placeholder="Enter your Enter your Website" required />
        <TextField label="Country/Region" placeholder="Enter your Country" required />
        </div>
        <div>
        <TextField label="Password" type="password" placeholder="Enter your Password" required />
        <TextField label="Confirm Password" type="password" placeholder="Enter your Confirm Password" required />
        </div><br />
        <Button variant="contained" color="primary" sx={{ mt: 10, color: 'white', textTransform: 'capitalize' }} type="submit">Submit</Button>
      </Box>
    </Container>
  );
};

export default RegistrationForm;