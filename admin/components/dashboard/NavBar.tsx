//TO-DO: Add search bar

import React from 'react';
import {
    Box,
    Toolbar,
    IconButton,
    InputBase,
    Badge,
    Avatar,
    Typography,
    Menu,
    MenuItem,
    TextField,
    InputAdornment,
} from '@mui/material';
import {
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    Apps as AppsIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import iconSearch from '@/assets/images/icon-search.svg';
import iconMessage from '@/assets/images/icon-message.svg';
import iconNotification from '@/assets/images/icon-notification.svg';
import profilePic from '@/assets/images/profile.jpg';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box position="static">
            <Toolbar sx={{
                width: '80vw'
            }}>
                <TextField fullWidth label="" id="fullWidth" placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Image src={iconSearch} alt='Search icon' height={24} width={24} />
                            </InputAdornment>
                        ),
                        style: {
                            width: '300px',
                            height: '28px',
                            borderRadius: '4px',
                            padding: '18px 16px',
                            marginBottom: '10px',
                            marginLeft: '10px'
                        },

                    }}
                />

                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Image alt='notification' src={iconNotification} />
                <Image alt='message' src={iconMessage} />

                    <div>
                        <IconButton
                            color="primary"
                            onClick={handleMenuOpen}
                            aria-controls="user-menu"
                            aria-haspopup="true"
                        >
                            <Image alt="Alex" src={profilePic} style={{borderRadius: '50%'}}/>

                            <ArrowDropDownIcon />
                        </IconButton>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <Image alt="Alex" src={profilePic} style={{borderRadius: '50%'}}/>
                                <div>
                                    <Typography variant="body1">Alex</Typography>
                                    <Typography variant="body2" color="#8A92A6">
                                        Admin
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem>Configuration</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Toolbar>
        </Box>
    );
}

export default NavBar;
