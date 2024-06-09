import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuList, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const pages=['Products', 'Resources', 'Guides', 'Community', 'About', 'Contact']

const Header = () => {
  const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event)=>{
      setAnchorNav(event.currentTarget);
    };
    const closeMenu=()=>{
      setAnchorNav(null)
    };
  return (
    <AppBar position="static" color="transparent" elevation={0} >
      <Toolbar>
        <Typography variant="h5" color="secondary" sx={{ flexGrow: 1, display:{xs:'none', md:'flex'}}}>
        Your Logo
        <br />
        Here
        </Typography>
      <Box sx={{ alignItems: 'center', gap: 2, display:{xs:'none', md:'flex'} }}>
        {pages.map((page)=>(
          <Button color="secondary" sx={{ textTransform: 'capitalize' }}>{page}</Button>
        ))}
        <SearchIcon size="small" className="cursor"></SearchIcon>
        <Button variant="contained" color="primary" sx={{ color: 'white', textTransform: 'capitalize' }}>Sign In</Button>
      </Box>
      <Box sx={{display:{xs:'flex', md:'none'}}}>
      <IconButton size='large' edge='end' color='inherit' onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display:{xs:'flex', md:'none'}}}>
        {pages.map((page)=>(
          <MenuItem>{page}</MenuItem>
        ))}
      </Menu>
      </Box>
      <Typography variant="h5" color="secondary" sx={{ flexGrow: 1, display:{xs:'flex', md:'none'}}}>
        Your Logo
        <br />
        Here
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;