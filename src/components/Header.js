import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} >
      <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h5" color="secondary" style={{ flexGrow: 1 }}>
        Your Logo
        <br />
        Here
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >Products</Button>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >Resources</Button>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >Guides</Button>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >Community</Button>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >About</Button>
        <Button color="secondary" sx={{ textTransform: 'capitalize' }} >Contact</Button>
        <SearchIcon size="small" ></SearchIcon>
        <Button variant="contained" color="primary" sx={{ color: 'white', textTransform: 'capitalize' }}>Sign In</Button>
      </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;