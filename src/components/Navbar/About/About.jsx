import { Box, Container, Typography } from "@mui/material";
import NavBar from "../NavBar";

function About() {
  const brandImage = "src/assets/brenzo-about-img.jpg";
  return (
    <>
      <NavBar />
      <Container
        sx={{
          color: "#6b7a8f",
        }}
      >
        <Box
          sx={{
            my: 14,
            mb: 2,
          }}
        >
          <Typography
            variant="h3"
            mx={15}
            mb={4}
            sx={{
              textAlign: {
                xs: "center",
                md: "start",
              },
            }}
          >
            About Us
          </Typography>
        </Box>
        {/* Middle part with img and text */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: {
              xs: "center",
              md: "right",
            },
          }}
        >
          <Box
            sx={{
              mx: {
                xs: "auto",
                md: "0px",
              },
              justifyContent: {
                xs: "center",
              },
              width: {
                xs: "80vw",
                md: "27vw",
              },

              height: {
                xs: "60vh",
                md: "60vh",
              },
            }}
          >
            <img
              src={brandImage}
              alt="brands-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              mx: {
                xs: "auto",
                md: "0px",
              },
              width: {
                xs: "80vw",
                md: "30vw",
              },
              height: {
                xs: "40vh",
                md: "60vh",
              },
            }}
          >
            <Typography variant="h5" sx={{ mt: 5 }}>
              Our Story
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo ad, perspiciatis cum explicabo quis maxime autem earum
              tenetur voluptate, assumenda necessitatibus magnam alias pariatur
              quam delectus quasi tempore aperiam. <br />
              ~~~ <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              vero temporibus aut eius, sequi sit minus saepe inventore maxime
              laborum repudiandae necessitatibus voluptatem natus fugiat
              delectus provident ex deserunt pariatur.
            </p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default About;
