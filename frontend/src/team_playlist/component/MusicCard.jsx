import { Box } from "@mui/material";

function MusicCard(props) {
  return (
    <Box>
      {/* <Box className="mCard" sx={{ display: "flex", flexDirection: "column" }}>
        <p className="songName">
          {props.name}
          <span className="artist" style={{ fontSize: "10px", color: "#C6C6C6" }}>
            <br />
            {props.artist}
          </span>
        </p>
      </Box> */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "5%" }}>1</Box>
        <Box sx={{ width: "35%" }}>
          <Box
            className="mCard"
            sx={{ mt:0 }}
          >
            <p className="songName">
              {props.name}
              <span
                className="artist"
                style={{ fontSize: "10px", color: "#C6C6C6" }}
              >
                <br />
                {props.artist}
              </span>
            </p>
          </Box>
        </Box>
        <Box sx={{ width: "35%" }}>I Love DJ</Box>
        <Box sx={{ width: "15%" }}>18/05/2023</Box>
        <Box sx={{ width: "10%" }}>Duration</Box>
      </Box>
    </Box>
  );
}

export default MusicCard;
