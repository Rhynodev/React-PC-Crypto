import React from "react";
import { Container, Grid, Typography, Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
// const icon1 = "./assets/png/choose1.png";
// const icon2 = "./assets/png/choose2.png";
// const icon3 = "./assets/png/choose3.png";
// const icon4 = "./assets/png/choose4.png";
const icon1 = "./assets/png/bitcoin.png";
const icon2 = "./assets/png/ethereum.png";
const icon3 = "./assets/png/usdt.png";
const icon4 = "./assets/png/currencycoin.png";

const features = [
  {
    icon: icon1,
    title: "Fast Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: icon2,
    title: "Add Fund in Wallet",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: icon3,
    title: "Easy Trading",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: icon4,
    title: "24/7 Help Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section className="bg-[#361155] py-24 ">
      <Container maxWidth="xl">
        <Box className="text-center text-white mb-16">
          <Typography variant="h4" className="!mb-6 !text-5xl !font-semibold">
            {/* Why Choose Crypto! */}
            {t("web_why_choose_crypto")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.light }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            1500s.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box className="bg-white bg-opacity-[0.1] p-6 rounded-lg  text-white">
                <img src={feature.icon} alt={feature.title} className="mb-4" />
                <Typography
                  variant="h6"
                  className="pb-3 pt-3 !text-xl !font-semibold"
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "#F5F5F5" : "#FFFFFF",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="!font-normal	!text-base	"
                  sx={{
                    maxWidth: "245px",
                    color:
                      theme.palette.mode === "dark" ? "#F5F5F5" : "#FFFFFF",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
