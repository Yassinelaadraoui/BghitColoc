import * as React from 'react';
import {useState} from 'react';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';



const styles = {
   
    searchBar:{
        width: "80%",
        height: "10%",
        backgroundColor: "white",
        position:"absolute",
        top:"50%",
        left:"10%",
        borderRadius: "25px",
        display: 'flex', alignItems: 'center',
    }
};
  

export default function  SearchBar()  {
    const [currency, setCurrency]  = useState('EUR') ;
    ;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
  
    return (
       
        
        
    <Grid container spacing={6}
      component="form"
      style={styles.searchBar} 
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', paddingLeft:10 , paddingRight:10 },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography sx={{marginLeft:3}}  variant="h6" color="black" >
                Je Suis
        </Typography>
        <TextField
          size="small"
          select
          value={currency}
          onChange={handleChange}
        >
            <MenuItem value={"etudiant"}>
              etudiant
            </MenuItem>
            <MenuItem value={"colocataire"}>
              un colocataire
            </MenuItem>
            
         
        </TextField>
        <Typography variant="h6" color="black" >
               Et Je Cherche
        </Typography>
        <TextField
          size="small"
          select
          value={currency}
          onChange={handleChange}
        >
          <MenuItem value={"etudiant"}>
              etudiant
            </MenuItem>
            <MenuItem value={"colocataire"}>
              un colocataire
            </MenuItem>
        </TextField>
      </Grid>
    

 
    );
  
}
