import React from 'react';
import { TextField,Grid,Box,useTheme,Typography,Button,Container } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

interface CountryType {
  phone: string;
}

const countries: readonly CountryType[] = [
  { phone: '1-264' },
  { phone: '355' },
  { phone: '374' },
  { phone: '244' },
  { phone: '672' },
  { phone: '54' },
  { phone: '1-684' },
  { phone: '43' },
];

const TradeSection: React.FC = () => {
const TradeGraph = './assets/png/TradeChart.png'


const CountrySelect = () => {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 80 }}
      options={countries}
      getOptionLabel={(option) => option.phone}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            {...optionProps}
          
          >
            {option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Country Code"
          InputProps={{
            ...params.InputProps,
            style: { color: "#fff", background: "#EBEBEB4D" }
          }}
          InputLabelProps={{
            shrink: false
          }}
          sx={{ color: "#fff", background: "#EBEBEB4D" }}
        />
      )}
    />
  );
};

const CustomInput = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Enter Here"
      className="flex-grow"
      fullWidth
      sx={{ color: "#fff", background: "#EBEBEB4D" }}
      InputProps={{
        style: { color: "#fff", background: "#EBEBEB4D" },
      }}
    />
  );
};


  const theme = useTheme();
  return (
    <section>
    <Container style={{background:'#361155'}} maxWidth="xl" className="p-0 pb-4 m-0 pl-0 pr-0">
    <Grid container spacing={6} sx={{padding:"0px 70px", paddingBottom:"30px"}}>
      <Grid item xs={12} sm={12} md={6}>
      <div className="flex flex-col">
              <Typography
                variant="h4"
                component="h2"
                className="!font-bold mb-4 !text-5xl pb-6 max-w-lg pt-6"
                sx={{ color: theme.palette.primary.contrastText, lineHeight:"67px !important" }}
              >
               Get App and Trade Anywhere
              </Typography>
              <Typography
                variant="body1"
                className="!font-normal !text-lg !mb-8 pb-6"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Lorem Ipsum has been the industry’s standard dummy text ever since 1500s.
              </Typography>
              <Box className="flex w-full !font-normal gap-10 !text-lg">
              <Typography  sx={{ color: theme.palette.primary.contrastText }}>Get the link of app</Typography>
              </Box>
<Box className="flex w-full max-w-md gap-2">
              
<CountrySelect />
      <CustomInput />

                <Button
                  variant="contained"
                  color="primary"
                  className="!text-xl !font-normal"
                  sx={{
                    boxShadow: "none",
                    background:"#fff",
                    color: "#193E79",
                    minWidth: "auto",
                    textTransform: "capitalize",
                    "&:hover": {
                      background:"#fff",
                      boxShadow: "none",
                      border: "none",
                    },
                  }}
                >
                  Send
                </Button>
</Box>
      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
      <div className="flex flex-col items-center justify-center">
          <img src={TradeGraph} />          
      </div>
      </Grid>
    </Grid>
  </Container>
  <style>
        {`
 .MuiAutocomplete-popupIndicator{
  display:none !important;
}

`}
      </style>
  </section>
  );
};

export default TradeSection;
