import {
  Container,
  Typography,
  TextField,
  Autocomplete,
  Rating,
  Box,
} from "@mui/material";

import NavBar from "./components/Navbar/NavBar";

import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const shoeImg = "src/assets/product-shoe.jpg";

  // Search Bar
  const options = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Example 1 ",
    "Example 2",
  ];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <NavBar />
      <Container
        sx={{
          width: {
            xs: "80vw",
            md: "100vw",
          },
          marginTop: "60px",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#6b7a8f",
              fontSize: { xs: "xx-large", md: "xxx-large" },
              marginTop: "80px",
            }}
          >
            E-commerce Website
          </Typography>
          <Box sx={{ my: { xs: "40px", md: "95px" } }}>
            <Autocomplete
              style={{
                width: {
                  xs: "100px",
                  md: "500px",
                },
              }}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300, color: " #6b7a8f" }}
              renderInput={(params) => (
                <TextField {...params} label="Search for a product" />
              )}
            />
          </Box>
        </Box>
        {/* Main */}
        <Box sx={{ display: { xs: "block", md: "flex" }, width: "100%" }}>
          {/* Main Right */}
          <Box sx={{ width: { xs: "95%", md: "65%" } }}>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#6b7a8f",
                  width: "50%",
                  height: "10%",
                  borderTopLeftRadius: "50px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    mx: "10px",
                    fontSize: { xs: "x-large", md: "xxx-large" },
                  }}
                >
                  SET
                </Typography>
              </Box>
              <Box
                sx={{ backgroundColor: "#6b7a8f", width: "70%", height: "10%" }}
              >
                {/* middle box */}
                <Typography
                  sx={{
                    color: "#6b7a8f",
                    mx: "10px",
                    fontSize: {
                      xs: "x-large",
                      md: "xxx-large",
                      marginTop: "15px",
                    },
                  }}
                >
                  .
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#6b7a8f",
                  width: "90%",
                  height: "10%",
                  borderBottomRightRadius: "50px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    mx: "10px",
                    fontSize: {
                      xs: "x-large",
                      md: "xxx-large",
                      marginTop: "15px",
                    },
                  }}
                >
                  ADVERTISEMENT
                </Typography>
              </Box>
            </Box>
            <Box sx={{ "& > legend": { mx: 2 } }}>
              <Typography
                sx={{
                  mx: 8,
                  color: "#6b7a8f",
                  my: {
                    xs: "30px",
                  },
                  marginBottom: "15px",
                }}
              >
                Have you used our products? Rate us{" "}
              </Typography>
              <Rating
                name="customized-10"
                defaultValue={2}
                max={5}
                sx={{
                  mx: { xs: 9, md: 15 },
                  my: { xs: 0, my: 2 },
                }}
              />
            </Box>
          </Box>
          {/* Main Left */}
          <Box sx={{ width: { xs: "95%", md: "35%" } }}>
            <Box>
              <Typography
                variant="h5"
                my={2}
                sx={{ color: "#6b7a8f", textAlign: { xs: "center" } }}
              >
                Check our best sellers{" "}
              </Typography>
              {/* Products List */}
              <Box>
                <Link to="/products">
                  <img
                    src={shoeImg}
                    alt="product"
                    style={{
                      width: "60%",
                      marginLeft: "20%",
                    }}
                  />
                </Link>
                <Link to="/products">
                  <img
                    src={shoeImg}
                    alt="product"
                    style={{
                      width: "60%",
                      marginLeft: "20%",
                    }}
                  />
                </Link>
                <Link to="/products">
                  <img
                    src={shoeImg}
                    alt="product"
                    style={{
                      width: "60%",
                      marginLeft: "20%",
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
