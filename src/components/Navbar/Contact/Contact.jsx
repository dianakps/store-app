import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import NavBar from "../NavBar";

function Contact() {
  function search(formData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message");
  }

  // Transisioned dialog - pop message
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar />
      <Container
        sx={{
          my: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#6b7a8f", mb: "10px" }}>
          Contact us
        </Typography>
        <form action={search}>
          <FormControl
            sx={{
              width: {
                xs: "350px",
                md: "500px",
              },
              gap: "10px",
            }}
          >
            <TextField
              label="First Name"
              variant="filled"
              name="firstName"
              sx={{
                backgroundColor: "#f8d7bcf3",
                ":filled": { backgroundColor: "#f8d7bcf3" },
              }}
            />
            <TextField
              label="Last Name"
              variant="filled"
              name="lastName"
              sx={{ backgroundColor: " #f8d7bcf3" }}
            />
            <TextField
              label="Email"
              variant="filled"
              name="email"
              sx={{ backgroundColor: " #f8d7bcf3" }}
            />
            <FormHelperText
              id="my-helper-text"
              sx={{ textAlign: "end", fontSize: "10px" }}
            >
              We &apos;ll never share your email.
            </FormHelperText>
            <TextField
              label="Mobile Number"
              variant="filled"
              name="phoneNumber"
              sx={{ backgroundColor: " #f8d7bcf3" }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="filled"
              name="message"
              sx={{ backgroundColor: " #f8d7bcf3" }}
            />
            <Button
              type="submit"
              onClick={handleClickOpen}
              sx={{ color: "#6b7a8f", backgroundColor: "#dfc1a8" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ backgroundColor: " #f8d7bcf3", color: "#6b7a8f" }}>
            {"Thank you"}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: " #f8d7bcf3" }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ color: "#6b7a8f" }}
            >
              Your message has been sent!
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: " #f8d7bcf3" }}>
            <Button
              onClick={handleClose}
              sx={{ backgroundColor: " #f8d7bcf3", color: "#6b7a8f" }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default Contact;
