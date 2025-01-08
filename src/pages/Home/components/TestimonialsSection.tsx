import React, { useState } from "react";
import { Container, Typography, Box, useTheme, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Testimonial {
  name: string;
  city: string;
  path: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ibrahim wand 1",
    city: "New York",
    path: "./assets/png/bitcoin.png",
    feedback:
      "1. It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.”",
  },
  {
    name: "Ibrahim wand 2",
    city: "India",
    path: "./assets/png/ethereum.png",
    feedback:
      "2. It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.”",
  },
  {
    name: "Ibrahim wand 3",
    city: "China",
    path: "./assets/png/usdt.png",
    feedback:
      "3. It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.”",
  },
  {
    name: "Ibrahim wand 4",
    city: "USA",
    path: "./assets/png/solana.png",
    feedback:
      "4. It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.”",
  },
  {
    name: "Ibrahim wand 5",
    city: "Africa",
    path: "./assets/png/polygon.png",
    feedback:
      "5. It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.”",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const theme = useTheme();

  return (
    <section
      className={`TestimonialsBackground py-24 !pt-10 !mb-24 ${
        theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"
      }`}
    >
      <Container
        maxWidth="xl"
        className={`${
          theme.palette.mode === "dark" ? "darkThemeClass" : "lightThemeClass"
        }`}
      >
        <Box className="text-center text-white mb-16">
          <Typography
            variant="h4"
            className="!mb-6 !text-5xl !font-semibold"
            style={{
              color: theme.palette.mode === "dark" ? "#F5F5F5" : "#193E79",
            }}
          >
            Feedback of Our Inversters
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.mode === "dark" ? "#F5F5F5" : "#000" }}
          >
            Lorem Ipsum has been the Industry’s standard dummy text ever since
            the
          </Typography>
        </Box>

        <Grid item className="slick-list-main">
          <Typography
            className="text-center !m-auto pb-10 !text-base px-5"
            sx={{
              maxWidth: "760px",
              color: theme.palette.mode === "dark" ? "#F5F5F5" : "#000",
            }}
          >
            “It is a long established that a reader will be distracted bt the
            readble content of a page when looking at its layout. The point of
            using Lorem ipsum is that it has a more-or-less normal distribution
            of lwetters, as opposed to using ‘Content hre, content her’, making
            it look like readble English.”
          </Typography>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} p={2} className="text-center">
                <div className="text-center flex justify-center">
                  <img src={testimonial.path} alt="" />
                </div>
                {activeIndex === index && (
                  <>
                    <Typography
                      variant="h6"
                      component="h3"
                      className="!text-lg	!font-normal pt-2 pb-1"
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#F5F5F5" : "#000",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      className="!font-normal	!text-sm"
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#F5F5F5" : "#000",
                      }}
                    >
                      {testimonial.city}
                    </Typography>
                  </>
                )}
              </Box>
            ))}
          </Slider>
        </Grid>
      </Container>
      <style>
        {`

      .TestimonialsBackground.darkThemeClass {
            position: relative;
          }
      .TestimonialsBackground.darkThemeClass::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
            opacity: 0.7;
            z-index: -1;
            width: 500px;
            height: 500px;
            filter: blur(200px);
          }

   @media (max-width:768px) {
        .TestimonialsBackground::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: transparent;
            opacity: 0.7;
            z-index: -1;
            width: 100% !important;
            height: 100% !important;
            filter: blur(400px);
        }
}

        .slick-track{
          display: flex !important;
          align-items: center;
        }
         .lightThemeClass .slick-list-main {
            box-shadow: 0px 0px 4px 0px #00000040;
            margin: 0px 50px;
            padding: 50px 0px;
            // background: #FFFFFF80;
            border-radius: 10px;
          }
        .darkThemeClass .slick-list-main {
            box-shadow: 0px 0px 4px 0px #00000040;
            margin: 0px 50px;
            padding: 50px 0px;
            background: #F7FAFF10;
            border-radius: 10px;
          }
          .slick-center img {
            transform: scale(1.1);
            transition: transform 0.3s;
          }

         .lightThemeClass .slick-next{
            width: 50px;
            height: 50px;
            color: #361155 !important;
            border: 1px solid #361155 !important;
            border-radius: 100px;
          }
           .lightThemeClass .slick-prev{
            width: 50px;
            height: 50px;
            color: #361155 !important;
            border: 1px solid #361155 !important;
            border-radius: 100px;
          }
       .lightThemeClass .slick-next:before{
            color: #361155 !important;
            font-family: monospace;
            font-size: 25px;
          }
          .lightThemeClass .slick-prev:before{
            color: #361155 !important;
            font-family: monospace;
            font-size: 25px;
          }


          .darkThemeClass .slick-next{
            width: 50px;
            height: 50px;
            color: #F5F5F5 !important;
            border: 1px solid #F5F5F5 !important;
            border-radius: 100px;
          }
            .darkThemeClass .slick-prev{
            width: 50px;
            height: 50px;
            color: #F5F5F5 !important;
            border: 1px solid #F5F5F5 !important;
            border-radius: 100px;
          }

           .darkThemeClass .slick-prev:before, .slick-next:before{
            color: #F5F5F5 !important;
            font-family: monospace;
            font-size: 25px;
          }
          
            .slick-prev {
              left: -72px;
          }
              .slick-next {
              right: -72px;
          }
            .slick-prev, .slick-next{
                top: 10%;
          }

        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
