// src/components/NewsletterSection.tsx

import React from 'react';
import { TextField, Button, Typography,useTheme, Box } from '@mui/material';

const NewsletterSection: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col items-center justify-center">
      <Typography variant="h4" component="h2" className="!font-semibold mb-4 !text-3xl pb-6" sx={{ color:  theme.palette.text.secondary}}>
        Subscribe Our Newsletter.
      </Typography>
      <Typography variant="body1" className="text-center !font-normal !text-lg !mb-8 pb-6" sx={{ color:  theme.palette.text.secondary}}>
        Lorem Ipsum has been the industry's standard dummy text ever since 1500s.
      </Typography>
      <Box className="flex w-full max-w-md">
        <TextField
          variant="outlined"
          placeholder="Enter Here"
          className="flex-grow mr-2"
          fullWidth
          sx={{ color:  theme.palette.text.secondary, borderRadius:"0",}}
        />
        <Button
          variant="contained"
          color="primary"
          className="!text-xl !font-normal"
          sx={{
            boxShadow:"none",
            borderRadius:"0",
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            minWidth: "auto",
            textTransform:"capitalize",
            "&:hover": {
              background: theme.palette.primary.main,
              boxShadow:"none",
              border: "none",
            },
         }}
        >
          Subscribe
        </Button>
      </Box>
    </div>
  );
};

export default NewsletterSection;
