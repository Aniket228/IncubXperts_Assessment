import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  PlayCircle,
} from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Your Logo
              <br />
              Here
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <a href="#">Products</a>
            <a href="#">Resources</a>
            <a href="#">Guides</a>
            <a href="#">Community</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <IconButton size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" stroke="#000000" strokeWidth="2" d="M21 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z" />
                <path fill="none" stroke="#000000" strokeWidth="2" d="M21 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z" />
              </svg>
            </IconButton>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" component="div">
            Welcome Developers!
          </Typography>
          <Typography variant="h4" component="div" sx={{ mt: 2 }}>
            Developer Portal
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 2 }}>
            Payment, Lockbox and Treasury Solutions
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Start Here
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Create Your Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 17l5 -5L13 7" />
                </svg>
              </Button>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Developer Guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 17l5 -5L13 7" />
                </svg>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Directly to API
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                View Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 17l5 -5L13 7" />
                </svg>
              </Button>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Download Postman Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 17l5 -5L13 7" />
                </svg>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <img
              src="https://cdn.pixabay.com/photo/2015/08/27/08/58/digital-908433__340.jpg"
              alt="Developer Portal"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>

        <Typography variant="body1" component="div" sx={{ mt: 5 }}>
          Financial institutions and businesses need a partner with the technology, talent and
          imagination to provide solutions across the payments spectrum. From processing paper
          checks, which are still a mainstay of the payment ecosystem, to providing software and
          APIs, CheckAlt manages complex payment flows so you can focus on what matters.
        </Typography>

        <Grid container>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{ color: 'white', p: 4, textAlign: 'center'}}>
              <Typography variant="h5" component="div">
                Use Cases
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Explore the possibilities
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 17l5 -5L13 7" />
                </svg>
              </Button>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                Note: Create scrollable
                <br />
                carousel for frontend
                <br />
                development
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Authentication &
                <br />
                Registration
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                Unified authentication process with a
                <br />
                cloud-based identity and access
                <br />
                (IAM) offering
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Configuration
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                Learn how to run custom jobs to
                <br />
                process transaction objects.
                <br />
                Clearingworks offers a Configuration
                <br />
                Service for managing system
                <br />
                settings through automated jobs.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Get Custom
                <br />
                Account
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                Use account to invoice
                <br />
                account and invoicing with
                <br />
                Clearingworks.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8} lg={8}>
            <Box sx={{ bgcolor: 'white', p: 4 }}>
              <Typography variant="h4" component="div" sx={{ mb: 3 }}>
                Developer Registration
              </Typography>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Create Your Account
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: 3 }}>
                Already have an account?
                <a href="#">Sign In</a>
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: 2 }}>
                All fields are required
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    placeholder="Enter your First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    placeholder="Enter your Email Address"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Website"
                    placeholder="Enter your Website"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Organization"
                    placeholder="Enter your Organization"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Country/Region"
                    placeholder="Enter your Country"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    placeholder="Enter your Password"
                    type="password"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    placeholder="Enter your Confirm Password"
                    type="password"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
              <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10, bgcolor: 'white', p: 4 }}>
          <Typography variant="h4" component="div" sx={{ mb: 3 }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" component="div" sx={{ mb: 3 }}>
            Enter your email and look for a message from CheckAlt.
          </Typography>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your Email"
            variant="outlined"
            required
          />
          <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
            Contact Me
          </Button>
        </Box>
      </Container>

      <footer sx={{ mt: 5, bgcolor: 'primary.main', color: 'white', py: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="body1" component="div">
                CheckAlt Global Sites
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="body1" component="div">
                CheckAlt Partner
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="body1" component="div">
                Privacy Notice
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>

      <footer sx={{ bgcolor: 'primary.main', color: 'white', py: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant="body1" component="div">
                Cookie Preferences
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant="body1" component="div">
                Terms of Use
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant="body1" component="div">
                Security Teams
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant="body1" component="div">
                Adjust Ad Preferences
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>

      <footer sx={{ bgcolor: 'primary.main', color: 'white', py: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body1" component="div">
                CheckAlt Ready
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
              <IconButton
                size="large"
                aria-label="linkedin"
                href="https://www.linkedin.com/company/checkalt/"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                size="large"
                aria-label="facebook"
                href="https://www.facebook.com/CheckAlt/"
              >
                <Facebook />
              </IconButton>
              <IconButton
                size="large"
                aria-label="youtube"
                href="https://www.youtube.com/channel/UC7K7d5e77p1K7rJ0hR5v9Qw"
              >
                <PlayCircle />
              </IconButton>
              <IconButton
                size="large"
                aria-label="instagram"
                href="https://www.instagram.com/checkalt/"
              >
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default App;