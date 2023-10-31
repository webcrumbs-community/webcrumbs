import Widget from '@/webcrumbs/Widget';
import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const HomePage: FC = () => {
  const [plugin, setPlugin] = useState('wc_plugin1');

  return (
    <Box p={4}>
      <Typography variant="h4">
        WebCrumbs
      </Typography>
      <Typography variant="h5" marginBottom={8}>
        Unlock, extend and customize your website
      </Typography>
      <Typography variant="body1" paragraph>
        Think of this as the admin panel we've been working on at the admin folder. Soon enough, you'll be able to load and import plugins in a snap. Just one click and boom, they're in! Right now, this page is here to show you that it's entirely possible to load plugins dynamically from remote addresses. For the time being, we're running things off localhost on different ports, but down the road, keep an eye out for plugins loading from https://registry.webcrumbs.org/.
      </Typography>
      <Typography variant="body1" paragraph>
        Choose a plugin to dynamically load from a remote source:
      </Typography>
      <Tooltip title="Loads from https://localhost:3001" arrow>
        <Box mb={2}>
          <Button variant="outlined" onClick={() => setPlugin('wc_plugin1')}>
            Load Plugin 1
          </Button>
        </Box>
      </Tooltip>
      <Tooltip title="Loads from https://localhost:3002" arrow>
        <Box mb={2}>
          <Button variant="outlined" onClick={() => setPlugin('wc_plugin2')}>
            Load Plugin 2
          </Button>
        </Box>
      </Tooltip>
      <Box p={4}>
        <Widget scope={plugin} />
      </Box>
    </Box>
  );
};

export default HomePage;
