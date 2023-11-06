import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { mainListItems } from "./listItems";
import Copyright from "@/components/Copyright";
import { theme } from "../layout/theme";
import { Button } from "@mui/material";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import close from "@/assets/images/close.svg";

const drawerWidth: number = 257;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: 'white',
            backdropFilter: 'blur(32px)',
            height: "76px"
          }}>
          <Toolbar
            sx={{
              position: "relative",
              width: drawerWidth,
              height: "76px",
              boxShadow: "0px 10px 30px 0px rgba(17, 38, 146, 0.05)"
            }}
          >
            <Box sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
            >
              <Image src={logo} width={179} height={31} alt="WebCrumbs logo" />
            </Box>

            <Box sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 246
            }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="toggle drawer"
                onClick={toggleDrawer}
              >
                <Box className="blur-shadow" height={30} width={30} >
                  {open ?
                    <Image src={close} alt="Close menu" height={30} width={30} />
                    : <Image src={close} alt="Open menu" style={{ transform: 'rotate(180deg)' }} height={30} width={30} />
                  }
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} shadow={1}>
          <List component="nav" sx={{ paddingTop: "100px" }}>
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: (theme) => theme.palette.primary.main,
                  }}
                >
                  <Box sx={{ maxWidth: "400px", margin: "64px" }}>
                    <Typography variant="h1" color="white">Unlock, extend and customize your website</Typography>
                    <Typography variant="body1" color="white">Dive into an ecosystem built for you. Find or create plugins to boost your website.</Typography>
                    <Box sx={{ marginTop: "52px" }}>
                      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Explore now</Button>
                      <Button variant="text" color="secondary" sx={{ mt: 2 }}>Watch tutorial</Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
