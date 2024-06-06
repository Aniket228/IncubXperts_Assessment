import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
    description: 'Use account info to process transactions and invoices in Clearingworks.',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  textAlign: 'center',
  height: '100%',
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
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

const CardCarousel = () => {
  return (
    <Slider {...settings}>
      {useCases.map((useCase, index) => (
        <StyledCard key={index}>
          <CardContent>
            <Typography variant="h6" component="div">
              {useCase.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {useCase.description}
            </Typography>
          </CardContent>
        </StyledCard>
      ))}
    </Slider>
    
  );
};

export default CardCarousel;