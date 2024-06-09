import React from 'react';
import { Container, Grid, IconButton, Box, Button, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, PlayCircle,} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box className="footer" sx={{ mt: 6 }}>
      <footer sx={{ mt: 5, color: 'white', py: 2 }}>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>CheckAlt Global Sites</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>CheckAlt Partner</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>Privacy Notice</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>Cookie Preferences</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>Terms of Use</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>Security Teams</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>Adjust Ad Preferences</Button>
        <Button color="inherit" sx={{ textTransform: 'capitalize' }}>CheckAlt Ready</Button>
      </footer>
      <Divider sx={{ mt: 1}}/>
      <footer sx={{ bgcolor: 'primary.main', color: 'white', py: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} >
            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
            <IconButton
                size="large"
                aria-label="twitter"
                href="https://www.twitter.com/checkalt/"
              >
                <Twitter />
              </IconButton>
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
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Box>
  );
};

export default Footer;