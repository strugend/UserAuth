import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const theme = createTheme();

const OtpPassword = () => {
  const [values, setValues] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      alert("Success !!New Password Created ");
      console.log(values);
    } else {
      alert("Password Don't Match");
      console.log(values);
    }
  };

  const [visible, setVisible] = useState(false);

  // Password toggle handler
  const toggleVisibility = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setVisible(!visible);
    // console.log("working");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Password
          </Typography>
          <form onSubmit={submitHandler}>
            <TextField
              value={values.otp}
              onChange={handleChange("otp")}
              margin="normal"
              required
              fullWidth
              id="otp"
              label="OTP"
              name="OTP"
              autoFocus
              type="number"
            />
            <TextField
              value={values.password}
              onChange={handleChange("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={visible ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleVisibility}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="Confirm Password"
              type="text"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Password
            </Button>
          </form>
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Back to Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default OtpPassword;
