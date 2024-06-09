import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useCases = [
  {
    title: 'Authentication & Registration',
    description: 'Unified authentication process with a cloud-based identity and access (IAM) offering',
  },
  {
    title: 'Configuration',
    description: 'Learn how to run custom jobs to process transaction objects. Clearingworks offers a Configuration Service for managing system settings through automated jobs.',
  },
  {
    title: 'Get Customer Account',
    description: 'Use account to in account and invoices in Clearingworks.',
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const UseCases = () => {
  return (
    <Box className="use-cases-section" sx={{ display: 'flex', alignItems: "center" }} > 
      <div>
        <Typography variant="h4" color="secondary" sx={{ textAlign: 'center' }}>
          Use Cases
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4, color: 'white', textTransform: 'capitalize' }}>Explore the possibilities</Button>
      </div>
      <Slider {...settings}>
        {useCases.map((useCase, index) => (
            <Card className="use-case-box" key={index} >
              <CardContent>
                <Typography variant="h5">
                  {useCase.title}
                </Typography>
                <Typography sx={{ mt: 4, fontWeight: 'light' }}>
                  {useCase.description}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default UseCases;