import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
  CssBaseline,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },

  typography: {
    h5: {
      fontWeight: "bold",
    },
  },
});




function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "#f5f5f5",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Login Form */}
          <Paper
            elevation={4}
            sx={{
              width: 350,
              p: 4,
            }}
          >
            <Typography variant="h5" mb={3}>
              Login Form
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />

              <Button variant="contained" color="primary" size="large">
                Login
              </Button>
            </Box>
          </Paper>

          {/* Product Card */}
          <Card
            sx={{
              width: 320,
              p: 1,
            }}
          >
            <CardHeader title="Smart Watch" />

            <CardContent>
              <Typography variant="body1">
                Stylish smartwatch with heart-rate monitor and fitness tracking.
              </Typography>

              <Typography variant="h6" color="primary" mt={2}>
                ₹4,999
              </Typography>
            </CardContent>

            <CardActions>
              <Button variant="contained">Buy Now</Button>

              <Button variant="outlined">Add to Cart</Button>
            </CardActions>
          </Card>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;