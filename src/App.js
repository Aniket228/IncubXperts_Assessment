import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UseCases from './components/UseCases';
import RegistrationForm from './components/RegistrationForm';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './styles/main.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header />
      <HeroSection />
      <section>
        <Box>
          <UseCases />
        </Box>
      </section>
      <RegistrationForm />
      <GetInTouch />
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;
