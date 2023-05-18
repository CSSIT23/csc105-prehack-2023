import { Avatar, Box, Button, Grid, IconButton, ListItemButton, Toolbar, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
              fontSize:'0.8rem',
              padding:'3px',
              textTranform:' capitalize',
             
            }}>Install App</Typography>
          </Button>
          <Avatar></Avatar>
        </Box>
        
      </Toolbar>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={2}>
          <img src="" alt="image"></img>
          </Grid>
          <Grid item lg={10}>
            <Typography>Podcast Episode</Typography>
            <Typography>Description</Typography>
            <Typography>The Secret Sauce</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{background: 'linear-gradient(transparent, rgba(0, 0, 0, 1))',
                width:'100vw',
                height:'100vh',
                overflow:'hidden',
                }}>
        <Typography> Date and time</Typography>
        <Box>
          <Button><PlayCircleFilledWhiteIcon/></Button>
          <Button><ControlPointIcon/></Button>
          <Button><MoreHorizIcon/></Button>
        </Box>
        <Box>
          <Typography>Episode Description</Typography>
          <Typography>Description</Typography>
        </Box>
        <Button>See all episodes</Button>
      </Box>
      
    </Box>
  );
}
