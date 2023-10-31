import Widget from './Widget';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const App = () => (
  <Box p={4}>
    <Typography variant="h4">
      Webcrumbs Plugin
    </Typography>
    <Typography variant="h5" marginBottom={8}>
      Unlock, extend and customize your website
    </Typography>
    <Typography variant="body1" paragraph>
      This page is like your personal showroom for a single plugin—consider it a lone ranger from our admin panel, isolated just for you. The aim here is to demonstrate how easy it'll be to load and try out plugins. One click, and voila, you're in! Currently, we're pulling plugins from localhost on various ports. But keep those peepers peeled; soon you'll be fetching plugins straight from https://registry.webcrumbs.org/.
    </Typography>
    <Typography variant="body1" paragraph>
      See this plugin in isolation:
    </Typography>
    <Box p={4}>
      <Widget />
    </Box>
  </Box>
);

export default App;
