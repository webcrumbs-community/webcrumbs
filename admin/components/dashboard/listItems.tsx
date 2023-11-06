import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <SpeedRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PushPinRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Plugins" />
    </ListItemButton>
  </React.Fragment>
);
