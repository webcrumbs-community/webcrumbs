import * as React from "react";
import Image from "next/image";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "@/components/Copyright";
import { theme } from "../layout/theme";
import { Button, Card } from "@mui/material";


import logo from "@/assets/images/logo.svg";
import close from "@/assets/images/button-close.svg";
import iconDashboard from "@/assets/images/icon-dashboard.svg";
import iconPlugins from "@/assets/images/icon-plugins.svg";

import { AppBar, Drawer, MenuItem, Tag, TopBar } from "./StyledComponents"
import { Plugin, PluginCard } from "./PluginCard";
import NavBar from "./NavBar";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: iconDashboard,
      active: true
    },
    {
      name: "Plugins",
      icon: iconPlugins,
      active: false
    }
  ]

  const tags = [
    { name: "AI", active: true },
    { name: "SEO", active: false },
    { name: "Analytics", active: false },
    { name: "Social Media", active: false },
    { name: "E-Commerce", active: false },
  ]

  const pluginList: Plugin[] = [
    {
      imageUrl: "https://img.freepik.com/free-vector/flat-design-abstract-shapes-background_23-2149120544.jpg?size=626&ext=jpg&ga=GA1.1.1770010771.1698845687&semt=sph",
      title: "Plugin 1",
      tagline: "Tagline 1",
      isFavorited: true,
      userLikes: [
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
      ],
      isFree: true
    },
    {
      imageUrl: "https://img.freepik.com/free-vector/groovy-psychedelic-hand-drawn-background_23-2149086296.jpg?size=626&ext=jpg&ga=GA1.1.1770010771.1698845687&semt=sph",
      title: "Plugin 2",
      tagline: "Tagline 2",
      isFavorited: false,
      userLikes: [
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
      ],
      isFree: true
    },
    {
      imageUrl: "https://img.freepik.com/free-vector/coloured-abstract-background-design_1095-336.jpg?size=626&ext=jpg&ga=GA1.1.1770010771.1698845687&semt=sph",
      title: "Plugin 3",
      tagline: "Tagline 3",
      isFavorited: false,
      userLikes: [
        { avatarUrl: "https://images.unsplash.com/photo-1632836924830-4b7b8b5b5b0b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80" },
      ],
      isFree: true
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" sx={{ display: "flex", flexDirection: "row" }}>
          <TopBar>
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
                sx={{zIndex: 1}}
              >
                <Box className="blur-shadow" height={30} width={30} sx={{zIndex: 1}} >
                  {open ?
                    <Image src={close} alt="Close menu" height={30} width={30} /> :
                    <Image src={close} alt="Open menu" style={{ transform: 'rotate(180deg)' }} height={30} width={30} />
                  }
                </Box>
              </IconButton>
            </Box>
          </TopBar>
          <TopBar sx={{ flex: 1, backgroundColor: '#FFFFFF'}}>
            <NavBar />
          </TopBar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Box component="nav" sx={{ paddingTop: "92px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="h6" sx={{ paddingLeft: "24px", paddingBottom: "24px" }}>{open ? "Home" : <br />}</Typography>
            {menuItems.map((item, index) => (
              <MenuItem key={index} name={item.name} icon={item.icon} active={item.active} />
            ))
            }
          </Box>
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    minHeight: "350px"
                  }}
                >
                  <Box sx={{ maxWidth: "400px", marginLeft: "64px" }}>
                    <Typography variant="h1" color="white">Unlock, extend and customize your website</Typography>
                    <Typography variant="body1" color="white">Dive into an ecosystem built for you. Find or create plugins to boost your website.</Typography>
                    <Box sx={{ marginTop: "52px", gap: "8px" }}>
                      <Button variant="contained" color="secondary" sx={{ mt: 2, mr: "12px" }}>Explore now</Button>
                      <Button variant="text" color="secondary" sx={{ mt: 2 }}>Watch tutorial</Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ marginBottom: "4px", display: "flex", flexWrap: "wrap", minHeight: "59px", padding: "0px 20px", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0 }}>
                  <Box sx={{ height: "100%", justifyContent: "flex-end" }}>
                    <Typography variant="h2" sx={{ marginLeft: "20px" }}>Top plugins</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "nowrap", flexShrink: 0, justifyContent: "space-between", alignItems: "center", gap: "4px" }}>
                    {tags.map((tag, index) => (
                      <Tag key={index} name={tag.name} active={tag.active} />
                    ))}
                  </Box>
                </Box>
              </Grid>
              {pluginList.map((plugin, index) => (
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <PluginCard plugin={plugin} />
                </Grid>
              ))}
            </Grid>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
