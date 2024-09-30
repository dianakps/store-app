import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

function Item({ name, price, handleClick }) {
  const shoeImg = "src/assets/product-shoe.jpg";

  return (
    <Box my={3}>
      <Card sx={{ maxWidth: 345 }} className="card-container">
        <CardActionArea>
          <CardMedia
            component="img"
            height="210"
            image={shoeImg}
            alt="shoe-image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#6b7a8f" }}
            >
              {name}
            </Typography>
            <Typography sx={{ color: "#6b7a8f" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
            <Typography sx={{ color: "#6b7a8f", textAlign: "end" }}>
              {price} €
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            color="#6b7a8f"
            style={{ width: "100%" }}
            onClick={() => handleClick(name, price)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Item;
