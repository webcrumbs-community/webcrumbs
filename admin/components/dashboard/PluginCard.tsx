import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Avatar, Grid, Button, Stack, Box, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import buttonInfo from '@/assets/images/button-info.svg';

export interface Plugin {
    imageUrl: string;
    title: string;
    tagline: string;
    isFavorited: boolean;
    userLikes: { avatarUrl: string }[];
    isFree: boolean;
}

const StyledCard = styled(Card)(() => ({
    padding: "21px",
}));

const StyledCardMedia = styled(CardMedia)(() => ({
    borderRadius: '12px',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
}));

const StyledAvatar = styled(Avatar)(() => ({
    height: "30px",
    width: "30px",
    zIndex: 1,
    border: "solid 3px white"
}));

const Tagline = styled(Typography)(() => ({
    color: '#A3AED0',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '-0.28px',
    margin: 0
}));

const Price = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: 1.71,
    letterSpacing: '-0.28px',
    margin: 0
}));

const InstallButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    height: "34px",
}));

export function PluginCard({ plugin }: { plugin: Plugin }) {
    return (
        <StyledCard>
            <Box sx={{ width: "100%", height: 0, paddingTop: "61.75%", position: "relative" }}>
                <StyledCardMedia image={plugin.imageUrl} />
                <IconButton
                    sx={{ position: 'absolute', top: '8px', right: '8px', height: "34px", width: "34px", backgroundColor: '#fff', "&:hover": { backgroundColor: '#fff' } }}
                    color="primary"
                    aria-label="add to favorites"
                >
                    {plugin.isFavorited ? <FavoriteIcon sx={{ height: "18px", width: "18px" }} /> : <FavoriteBorderIcon sx={{ height: "20px" }} />}
                </IconButton>
            </Box>
            <CardContent sx={{ padding: "20px 9px 0 9px !important" }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3">{plugin.title}</Typography>
                        <Tagline>
                            {plugin.tagline}
                        </Tagline>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={-1.7}>
                            {plugin.userLikes.slice(0, 3).map((user, index) => (
                                <StyledAvatar key={index} src={user.avatarUrl} sx={{ zIndex: index }} />
                            ))}
                            {plugin.userLikes.length > 3 && (
                                <StyledAvatar sx={{ zIndex: plugin.userLikes.length, backgroundColor: '#E0E5F2' }} >
                                    <Typography color="primary" sx={{
                                        margin: 0,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        lineHeight: 2.4,
                                        letterSpacing: "-0.2px"
                                    }}>
                                        +{plugin.userLikes.length - 3}
                                    </Typography>
                                </StyledAvatar>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ marginTop: "20px" }}>
                    <Grid item>
                        <Price>
                            {plugin.isFree ? 'Free' : 'Freemium'}
                            <Image src={buttonInfo} alt='Info' width={16} height={16} style={{ marginBottom: "-3px", marginLeft: "9px" }} />
                        </Price>
                    </Grid>
                    <Grid item>
                        <InstallButton>Install</InstallButton>
                    </Grid>
                </Grid>
            </CardContent>
        </StyledCard>
    );
}
