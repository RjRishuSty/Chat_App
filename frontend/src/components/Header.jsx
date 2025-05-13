import * as React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import AppMode from './AppMode';


const Header = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'background.default', color: 'text.primary',py:0.8}}>
                <Toolbar>
                    <Logo useIn='header'/>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'text.primary', fontWeight: 600 }}>
                                {item}
                            </Button>
                        ))} */}
                    </Box>
                    <AppMode/>
                    <IconButton
                        color="inherit"
                        edge="end"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
