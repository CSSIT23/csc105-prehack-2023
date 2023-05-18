import { Box, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function TeamAlbum$() {
  const mockupdata = {
    id: 1234,
    create_at: "170347",
    deleted_at: "",
    name: "Loonk Too Song",
    artwork_url:
      "https://i.pinimg.com/originals/5d/8d/fc/5d8dfcfa9bcfb964469f02572b57574d.jpg",
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

  return (
    <div style={marginPage}>
      {/* <Typography fontSize="28px" fontWeight={800}>
        Album based on `:albumId`
      </Typography> */}

      {/* button above*/}
      <IconButton style={{backgroundColor:"black", color:"white", justifyItems: "center"}}><ArrowBackIosNewIcon/></IconButton>
      <IconButton style={{backgroundColor:"black", color:"white", justifyItems: "center", opacity: "0.5"}}><ArrowForwardIosIcon/></IconButton>

      {/* top info container */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* picture */}
        <Box
          sx={{
            width: "12rem",
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
        <Box sx={{ margin: "2rem" }}>
          <h6 sx={{ margin: "0px" }}>Compilation</h6>
          <h2 sx={{ margin: "0px" }}>{mockupdata.name}</h2>
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
    </div>
  );
}
