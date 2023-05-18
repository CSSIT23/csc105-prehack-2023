import { Box, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from "react";
import Axois from "../share/axiosInstance";

export default function TeamAlbum$() {
  const [data, setData] = useState([]);
  const eiei = async () => {
    await Axois.get("groupEight/album/1").then((response) =>
      setData(response.data)
    );
  };
  useEffect(() => {
    eiei();
  });
  
  const mockupdata = {
    id: 1234,
    create_at: "170347",
    deleted_at: "",
    name: "frozen 2 (original motion picture soundtrack/deluxe edition)",
    artwork_url:
      "https://i.scdn.co/image/ab67616d0000b2736ff59d18c018a2845758deed",
  };

  const pictureStyle = {
    width: "12rem",
    height: "12rem",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const marginPage = {
    marginLeft: "2vh",
    marginRight: "2vh",
    
  };

  const bottomSpace = {
    background: "linear-gradient(to top, black, transparent)",
  };

  return (
    <div style={{backgroundColor:"#1c4cb9",}}>
    <div style={marginPage} >
      {/* <Typography fontSize="28px" fontWeight={800}>
        Album based on `:albumId`
      </Typography> */}

      {/* button above*/}
      <IconButton style={{backgroundColor:"black", color:"white", justifyItems: "center",marginBottom:"30px", marginRight:"10px"}}><ArrowBackIosNewIcon/></IconButton>
      <IconButton style={{backgroundColor:"black", color:"white", justifyItems: "center", opacity: "0.5", marginBottom:"30px"}}><ArrowForwardIosIcon/></IconButton>

      {/* top info container */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* picture */}
        <Box
          sx={{
            width: "17rem",
            position: "relative",
            paddingBottom: "15rem",
          }}
        >
          <img
            src={mockupdata.artwork_url}
            alt="Album Artwork"
            style={pictureStyle}
          />
        </Box>
        {/* top info */}
        <Box sx={{ marginTop: "4.2rem", marginLeft:"2rem"}}>
          <Box sx={{marginBottom:"0px"}}>
          <h6 style={{ margin: "0px", marginBottom:"10px", fontSize:"12px", fontWeight:"bold" }}>Compilation</h6>
          <h1 style={{ marginTop:"10px", marginBottom:"10px", fontWeight:"bold" }}>{mockupdata.name}</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "black",
                marginRight: "5px",
              }}
            ></Box>
            <p style={{ fontSize: "0.7rem", fontWeight: "semibold" }}>
              Various Artists • 2019 • 46 songs, 2 hr 9 min
            </p>
          </Box>
          </Box>
        </Box>

        

      </Box>

      
    </div>
    {/* bottom info */}
    <Box style={bottomSpace}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PlayCircleFilledIcon
            sx={{ color: "#1ed760", fontSize: "4rem", margin: "1rem" }}
          />
          <FavoriteBorderIcon />
          <MoreHorizIcon />
          

        </Box>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center" }}>
            <p>#  Title</p> 
            <IconButton style={{color:"white", marginLeft:"50rem"}}><AccessTimeIcon/></IconButton>
          </Box>
          <hr/>
      </Box>
    </div>
  );
}
