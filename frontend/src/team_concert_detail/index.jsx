import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import bg from "./temp/bg.jpg";
import Navbar from "./components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function TeamConcertDetail$() {
  return (
    <Box>
      <Box className="container"
      sx={{width:"100%",
                height:300,
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
              display:"flex",
              flexDirection: "column",
            }}
      >
      <Navbar/>

      <Typography sx={{marginBottom:"5px", fontWeight:"500",border:"1px ",width:"5em",textAlign:"Center",background:"gray",opacity:"70%",borderRadius:"5px",marginLeft:"10px"}}>
        Aug 26
      </Typography>
      <div>
      <Typography className="album_name"
      fontSize="46px" fontWeight={800} >
        Concert Detail
      </Typography>
      </div>
      
    </Box>
    <Box>
    <Typography className="album_name"
      fontSize="28px" fontWeight={800} >
        Concert Address
      </Typography>
      <Typography className="album_name"
      fontSize="16px" fontWeight={100} sx={{color:"gray"}}>
        Date & Time
      </Typography>
      <Button
       sx={{backgroundColor:"gray",color:"white",borderRadius:"25px",fontWeight:"400px",fontSize:"12px", padding:"0.2rem"}}>
        <AddIcon sx={{size:"small"}}/>Interested
      </Button>
      <Typography className="album_name"
      fontSize="28px" fontWeight={800} >
        Available tickes from
      </Typography>
      {/* <button sx={{backgroundColor:"transparent"}}> */}
      <Card component="button" sx={{display:"flex",}}>
        <CardMedia component="img"
        sx={{ width: 100}}
        image="https://img.freepik.com/free-psd/blank-cd-cover-design-mockup_53876-57947.jpg?w=900&t=st=1684384250~exp=1684384850~hmac=93436e9b2f37bb24588dd85f237ca3bc6ad640c2d07664036b4d1f67e74bfc9d"
        alt="Live from space album cover"
        />
        <CardContent>
          Songkick
        </CardContent>
        <OpenInNewIcon sx={{
        justifyContent:"flex-end"}}/>
      </Card>
      {/* </button> */}
    </Box>        
    </Box>
  );
}
