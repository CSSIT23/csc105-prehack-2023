import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import Button from './Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Button } from '@mui/material';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <Toolbar position="static"style={{ backgroundColor: "transparent"}}>
          <IconButton
            size="small"
            edge="start"
            sx={{ mr: 2 }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            sx={{ mr: 2 }}
          >
            <NavigateNextIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
            <Box>
              <Button sx={{backgroundColor:"black", borderRadius:"25px",fontSize:"0.5rem",padding:"0.1rem 0.3rem",opacity:"60%",color:"white"}}> 
                <DownloadForOfflineIcon sx={{marginRight:"5px", size:"small"}}/>
                Install App</Button>

              <IconButton
                size="small"
              >
                <AccountCircle />
              </IconButton>
              
            </Box>
        </Toolbar>
    </Box>
  );
}
