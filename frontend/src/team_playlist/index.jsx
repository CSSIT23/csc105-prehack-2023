import { Box, Button, Typography } from "@mui/material";
import userIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz48 (3).svg";
import play from "./assets/play.png";
import more from "./assets/more.png"
import "./style.css";
import MusicCard from "./component/MusicCard.jsx";
export default function TeamPlaylist$() {
  return (
    <Box>
      <Box
        sx={{
          padding: 2,
          borderRadius: "5px",
          background:
            "linear-gradient(to bottom, rgb(171,225,239), rgba(92,120,128,255))",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: { lg: "200px" },
            width: { lg: "200px" },
            m: { lg: 0 },
            background:
              "linear-gradient(to bottom, rgba(172,168,255,255), rgba(255,168,237,255))",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            fontSize="15px"
            fontWeight={700}
            sx={{ pl: { lg: 3 }, pt: { lg: 5 } }}
          >
            {/* Playlist based on `:playlistId` */}
            Playlist
          </Typography>
          <Typography
            fontSize="70px"
            fontWeight={700}
            sx={{ pl: { lg: 3 }, pt: { lg: 0 } }}
          >
            Mood2
          </Typography>
          {/* <img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" alt="Spotify" height="20px" width="20px"/> */}
          <Box sx={{ pl: { lg: 3 }, pt: { lg: 1.6 }, display: "flex" }}>
            <Box
              component="img"
              src={userIcon}
              sx={{ height: { xs: 2, md: 2, lg: 20, xl: 20 } }}
            />
            <Typography
              fontSize="15px"
              fontWeight={500}
              sx={{ pl: { lg: 0.25 } }}
            >
              BSthun <span style={{ fontWeight: "bold" }}>·</span> songs 20,{" "}
              <span style={{ fontWeight: "normal", color: "#C6C6C6" }}>
                1hr 13min
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: { lg: "auto" }, width: { lg: "auto" }, mt: { lg: 2 } }}>
      <Button disableRipple sx={{"&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },}}>
          <Box
              component="img"
              src={play}
              className="btn"
              sx={{ height: { xs: 80, md: 80, lg: 80, xl: 80 } }}
            />
          
      </Button>
      <Button disableRipple sx={{"&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },}}>
          <Box
              component="img"
              src={more}
              className="btn"
              sx={{ height: { xs: 30, md: 30, lg: 30, xl: 30 },pl:{lg:1} }}
            />
          
      </Button>
      </Box>
      <Box sx={{ display: "flex",borderBottom:1,m:2 }}>
          <Box sx={{ width: "5%" }}>#</Box>
          <Box sx={{ width: "35%" }}>Title</Box>
          <Box sx={{ width: "35%" }}>Album</Box>
          <Box sx={{ width: "15%" }}>Date Added</Box>
          <Box sx={{ width: "10%" }}>Duration</Box>
        </Box>
      <MusicCard
        name="Take on me"
        artist="aha"
      />
    </Box>
  );
}
