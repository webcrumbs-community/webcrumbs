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
} from '@mui/material';
import {
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    Apps as AppsIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import iconSearch from '@/assets/images/icon-search.svg';

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
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Image src={iconSearch} alt='Search icon' height={24} width={24} />
                    <TextField id="input-with-sx" label="With sx" variant="standard" sx={{
                            width: '240px',
                            height: '28px',
                            padding: '0',
                            margin: '0',
                            border: 'none',
                            color: '#ADB5BD',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: 1.75,
                        }}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    padding: '4px 16px',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    border: '1px solid #E9ECEF',
                    background: '#FFF',
                }}>
                    <Image src={iconSearch} alt='Search icon' height={24} width={24} />
                    <TextField
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        variant='standard'
                        sx={{
                            width: '240px',
                            height: '28px',
                            padding: '0',
                            margin: '0',
                            border: 'none',
                            color: '#ADB5BD',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: 1.75,
                        }}
                    />
                </Box>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <IconButton
                            color="primary"
                            onClick={handleMenuOpen}
                            aria-controls="user-menu"
                            aria-haspopup="true"
                        >
                            <Avatar alt="Alex" src="/path-to-avatar" />
                            <ArrowDropDownIcon />
                        </IconButton>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <Avatar alt="Alex" src="/path-to-avatar" />
                                <div>
                                    <Typography variant="body1">Alex</Typography>
                                    <Typography variant="body2" color="textSecondary">
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
