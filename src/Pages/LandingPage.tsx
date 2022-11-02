import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'; 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/background.jpg";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from '../Components/SearchBar';



const styles = {
    paperContainer: {
        backgroundImage: `url(${logo})`,
        width: "100vw",
        height: "100vh",
        margin:0
    },
    
};
  

export default function  LandingPage()  {
    
    return (
       
        <Grid style={styles.paperContainer} >

            <AppBar position="absolute"  style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar >
                <Typography variant="h6" color="black" noWrap>
                    BghitColoc
                </Typography>
                <Button sx={{ marginLeft: "auto"  }} color="inherit" >
                    Sign Up
                </Button>
            </Toolbar>
            </AppBar>
            <main>
            {/* Hero unit */}
                <SearchBar />
            </main>
        </Grid>

 
    );
  
}
