import { Container, Grid2 } from "@mui/material";
import NavBar from "../NavBar";
import Item from "./item";
import { useState } from "react";
import ShoppingCart from "../Checkout/ShoppingCart";
// import { ShoppingCart } from "@mui/icons-material";

function Products() {
  const [cart, setCart] = useState([]);

  const handleClick = (item, price) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product[0] === item);
      if (existingProduct) {
        return prevCart.map((product) =>
          product[0] === item ? [product[0], product[1] + 1, price] : product
        );
      } else {
        return [...prevCart, [item, 1, price]];
      }
    });
  };

  // Show/hide Shopping Cart Component
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NavBar toggleVisibility={toggleVisibility} />
      {isVisible && <ShoppingCart addedItems={cart} />}
      <Container
        sx={{
          my: "100px",
          color: "#6b7a8f",
        }}
        className="products-container"
      >
        <Grid2
          container
          spacing={7}
          sx={{
            display: {
              xs: "flex",
            },
            justifyContent: {
              xs: "center",
              md: "flex-start",
            },
          }}
        >
          <Item name="Product 1" price={10.5} handleClick={handleClick} />
          <Item name="Product 2" price={15} handleClick={handleClick} />
          <Item name="Product 3" price={8} handleClick={handleClick} />
          <Item name="Product 4" price={25} handleClick={handleClick} />
          <Item name="Product 5" price={12} handleClick={handleClick} />
          <Item name="Product 6" price={7} handleClick={handleClick} />
        </Grid2>
      </Container>
    </>
  );
}

export default Products;
