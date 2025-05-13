import * as React from "react";
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import AppMode from "./AppMode";
import Person3Icon from "@mui/icons-material/Person3";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

const Header = () => {
    const auth = useSelector((state) => state.auth.auth);
    console.log(auth);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: "background.default",
                    color: "text.primary",
                    py: 0.8,
                }}
            >
                <Toolbar>
                    <Logo useIn="header" />
                    {auth ? (
                        <Box sx={{ mr: 5, px: 3 }}>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ mr: 2, color: "text.primary" }}
                                startIcon={
                                    <Person3Icon fontSize="medium" />
                                }
                            >
                                Profile
                            </Button>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{ color: "text.primary" }}
                                 endIcon={
                                    <LogoutIcon fontSize="medium" />
                                }
                            >
                                Logout
                            </Button>
                        </Box>
                    ) : null}
                    <AppMode />
                    <IconButton
                        color="inherit"
                        edge="end"
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
