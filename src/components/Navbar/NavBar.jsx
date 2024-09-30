import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar({ toggleVisibility }) {
  // Hamburger Menu
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar>
        <Container
          maxWidth="xl"
          className="navbar"
          sx={{ width: { xs: "100vw" } }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: "700",
                letterSpacing: ".3rem",
                color: "#6B7A8F",
                textDecoration: "none",
              }}
            >
              <Link to="/" className="navLink">
                BRENZO
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "#6B7A8F",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box
                  sx={{
                    width: 400,
                    height: "auto",
                    my: -1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="navbar"
                >
                  <MenuItem>
                    <Link to="/about" className="navLink">
                      About Us
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/products" className="navLink">
                      Products
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/contact" className="navLink">
                      Contact
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="navLink" onClick={toggleVisibility}>
                      <ShoppingCartIcon />
                    </Link>
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: " none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button>
                <Link to="/about" className="navLink">
                  About Us
                </Link>
              </Button>
              <Button>
                <Link to="/products" className="navLink">
                  Products
                </Link>
              </Button>
              <Button>
                <Link to="/contact" className="navLink">
                  Contact
                </Link>
              </Button>
              <Button>
                <Link className="navLink" onClick={toggleVisibility}>
                  <ShoppingCartIcon sx={{ mt: "5px", ml: "-10px" }} />
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
