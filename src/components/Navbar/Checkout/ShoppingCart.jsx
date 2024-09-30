import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function ShoppingCart(props) {
  let sumPrice = 0;
  let sumQuant = 0;
  const totalPrice = props.addedItems.forEach((element) => {
    sumPrice = sumPrice + element[1] * element[2];
    sumQuant = sumQuant + element[1];
  });

  return (
    <>
      <div className="cart-container">
        <TableContainer sx={{ mt: "65px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: "#353e4a", fontSize: "large" }}>
                    Product
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "#353e4a", fontSize: "large" }}>
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "#353e4a", fontSize: "large" }}>
                    Price
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.addedItems.map((prod) => (
                <TableRow key={prod}>
                  <TableCell>
                    <Typography sx={{ color: "#374f6e" }}>{prod[0]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "#374f6e" }}>{prod[1]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "#374f6e" }}>
                      {prod[1] * prod[2]} €
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: "#374f6e" }}>Total:</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "#374f6e" }}>
                    {" "}
                    {sumQuant} items
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography sx={{ color: "#374f6e" }}>
                    {" "}
                    {sumPrice} €
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  addedItems: PropTypes.string,
};

export default ShoppingCart;
