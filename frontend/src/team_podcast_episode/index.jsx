import { Avatar, Box, Button, Grid, IconButton, ListItemButton, Toolbar, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { green } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

export default function TeamPodcastEpisode$() {
  const Btn={
    boxSizing:'border-box',
    borderRadius: '200px',
    color:'white',
    opacity: '0.4',
    bgcolor:'black',
    margin:1
  }
  return (
    <Box sx={{  borderRadius: "5px", 
    // height: '100vh',
    // width: '100vw',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 1))',
    bgcolor: 'rgb(32, 87, 100)' }}>
     
      <Toolbar>
        <Box sx={{display:'flex',
                  flexGrow: 1}}>
        <IconButton sx={Btn} variant="contained">
          <NavigateBeforeIcon/>
          </IconButton>
          <IconButton sx={Btn} variant="contained">
          <NavigateNextIcon/>
        </IconButton>
        </Box>
        <Box>
          <Button sx={{boxSizing:'border-box',
                       borderRadius:'100px',
                       bgcolor:'black',
                        opacity:'0.5',
                      }}
                       variant="contained">
            <ArrowCircleDownOutlinedIcon/>
            <Typography variant="p" sx={{
              fontSize:'0.6rem',
              padding:'3px',
              textTranform:' capitalize',
             
            }}>Install App</Typography>
          </Button>
          <IconButton size='large'>
            <AccountCircleIcon/>
          </IconButton>
        </Box>
      </Toolbar>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={2} >
          <img src="" alt="image"></img>
          </Grid>
          <Grid item lg={10}>
            <Typography variant="h7" sx={{fontSize: '0.6rem',
                                          fontWeight: '600'}}>Podcast Episode<br /><br /></Typography>
            <Typography variant='h5'sx={{fontSize: '1.5rem',
                                          fontWeight: '600'}}>Description<br /><br /></Typography>
            <Typography sx={{fontSize: '0.9rem',
                            fontWeight: '500'}}>The Secret Sauce</Typography>
          </Grid>
        </Grid>
      </Box><br /><br /><br /><br />
      
      <Box sx={{bgcolor: 'rgb(60, 60, 60)',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 1))',
                width:'100vw',
                height:'100vh',

                paddingLeft: '20px'

                }}>
        <Typography sx={{fontSize: '0.6rem',
                         opacity:'0.5'}}> Date and time</Typography>
                         <br/>
        <Box>
          <Button sx={{color:'green',
                       width:'8%' }}><PlayCircleFilledWhiteIcon sx={{fontSize:'65px'}}/></Button>
          <Button sx={{color:'white',
                        opacity:'0.4',
                        width:'5%'}}><ControlPointIcon sx={{fontSize:'30px'}}/></Button>
          <Button sx={{color:'white',
                        opacity:'0.4',
                        width:'5%'}}><MoreHorizIcon sx={{fontSize:'30px'}}/></Button>
        </Box>
        <br/>
        <Box>
          <Typography variant="h7" sx={{
            fontSize:'1rem',
            fontWeight:'600'
          }}>Episode Description<br/><br/></Typography>
          <Typography  sx={{
            fontSize:'0.7rem',
              opacity:'0.5'}}>Description</Typography>
        </Box>
        <NavLink replace to="/show/:podcastShowId">
        <Button sx={{boxSizing:'border-box',
                      border:'0.5px solid white',
                       borderRadius:'100px',
                       bgcolor:'black',
                       opacity:'0.5'
                      }}><Typography sx={{fontSize:'0.5rem', color:'white',fontWeight:'700'}}>See all episodes</Typography>
                      </Button>
        </NavLink>
       
      </Box>
      
    </Box>
  );
}

