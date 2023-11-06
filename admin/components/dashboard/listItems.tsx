import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';

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
      <ListItemText primary="Posts" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CameraAltRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Media" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FileCopyRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChatBubbleRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Comments" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <BrushRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Appearance" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PowerRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Plugins" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BuildRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Tools" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DisplaySettingsRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);
