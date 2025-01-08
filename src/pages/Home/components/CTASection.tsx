import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const CTASection: React.FC = () => {
  return (
    <Box sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Get Started Today!
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Sign up and start trading with us now.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Sign Up
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
