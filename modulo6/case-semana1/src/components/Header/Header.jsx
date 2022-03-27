import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Header = (props) => {

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" color='secondary'>
                <Typography 
                    align='center' 
                    variant='h4' 
                    mt={3} 
                    mb={3} 
                    fontWeight='bold'
                >
                    iCasei 
                        
                </Typography> 
            </AppBar>
        </Box>
       
    )
}

export default Header
