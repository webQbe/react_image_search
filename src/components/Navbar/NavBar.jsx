import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const theme = createTheme();

const NavBar = () => {
        return (
                <ThemeProvider theme={theme}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div">
                                    Pixabay Image Finder
                                </Typography>
                            </Toolbar>
                        </AppBar>
                </ThemeProvider>
            )
        }

export default NavBar;
