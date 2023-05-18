import { Box, Grid, Typography } from "@mui/material";
import CSS from "../styles/index.css";

export default function TeamTrackDetail$() {
  return (
    <Box sx={{ padding: 2, background: "#E57C23" }}>
      <Typography fontSize="28px" fontWeight={800}>
        <Grid container class='Grid_Half'>
          <Grid item={6}>
          <img
            className="Hero_Pic"
            src="https://i.scdn.co/image/ab67616d0000b2730ed2184bf3fb4466d623a874"
            alt="IMG"
            width="400"
            height="500"
          />
          </Grid>
          <Grid item={6} class="Grid_Hero">
          <p class="Hero_Song">Song</p>
          <h1 class="Hero_SongName">Song Name</h1>
          <p class="Hero_Artist">Art Name Link</p>
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
}
