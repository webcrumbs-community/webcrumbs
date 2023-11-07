import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Button, { ButtonProps } from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import Image from "next/image";
import React from "react";

import bgCookie from "@/assets/images/bg-cookie.svg";

const drawerWidth: number = 257;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface MenuItemProps extends ButtonProps {
    active?: boolean;
    name: string;
    icon: string;
}

interface TagProps extends ButtonProps {
    active?: boolean;
    name: string;
}

export const TopBar = styled(Toolbar)(() => ({
    position: "relative",
    width: drawerWidth,
    height: "76px",
    boxShadow: "0px 10px 30px 0px rgba(17, 38, 146, 0.05)"
}));

const TagStyled = styled(Button, { shouldForwardProp: (prop) => prop !== "active" })<TagProps>(({ theme, active }) => ({
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1.71,
    letterSpacing: "-0.28px",
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    ...(active && {
        backgroundColor: theme.palette.primary.contrastText,
        padding: "4px 14px",
    }),
    ...(!active && {
        padding: "4px 8px",
    })
}));

export const Tag = ({ name, active }: TagProps) => {
    return (
        <TagStyled active={active} variant="text" name={name}>
            {name}
        </TagStyled>
    )
}

const MenuItemStyled = styled(Button, { shouldForwardProp: (prop) => prop !== "active" && prop !== "open" })<MenuItemProps>(({ theme, active }) => ({
    width: "233px",
    height: "44px",
    margin: "0 12px",
    padding: "12px 24px",
    borderRadius: "4px",
    justifyContent: "flex-start",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.75,
    position: "relative",
    "&:before": {
        content: '""',
        position: "absolute",
        left: 14,
        bottom: 0,
        height: "1px",
        width: "205px",
        borderBottom: "1px solid #fff",
    },
    ...(active && {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        boxShadow: "0px 2px 4px 0px rgba(138, 146, 166, 0.30)",
    }),
    ...(!active && {
        color: '#8A92A6',
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: "0px 2px 4px 0px rgba(138, 146, 166, 0.30)",
        },
    }),
}));

export const MenuItem = ({ name, icon, active }: MenuItemProps) => {
    const [bright, setBright] = React.useState(active);
    const brightness = bright || active ? 2 : 1;
    const style = {
        filter: `brightness(${brightness})`,
        marginRight: "8px",
    }

    return (
        <MenuItemStyled active={active} fullWidth={true}
            onMouseEnter={() => setBright(true)}
            onMouseLeave={() => setBright(false)}
            startIcon={<Image src={icon} alt={name} style={style} />}
            name={name}
            icon={icon}
        >
            {name}
        </MenuItemStyled>
    )
}

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
    backdropFilter: 'blur(32px)',
    height: "76px",
    boxShadow: "none",
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        border: "none",
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        boxShadow: "0px 2px 4px 0px rgba(138, 146, 166, 0.10)",
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: `#fff url(${bgCookie.src}) no-repeat left bottom`,
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("all", {
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