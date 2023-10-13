import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {UploadPlugin} from '../components/UploadPlugin'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Form() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm" >
          <Typography variant="h2" component="h1" gutterBottom>
            Submit your plugin
          </Typography>
          <UploadPlugin/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
