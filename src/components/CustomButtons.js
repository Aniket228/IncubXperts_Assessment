import React from 'react';
import Button from '@mui/material/Button';
import './CustomButton.scss';


//Reusable button component
const CustomButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} className="custom-button">
      {children}
    </Button>
  );
};

export default CustomButton;