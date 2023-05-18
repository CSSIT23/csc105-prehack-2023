import { Box, Grid, Typography } from "@mui/material";
import CSS from "../styles/index.css";

export default function TeamTrackDetail$() {
  return (
    <Box sx={{ padding: 2, background: "#E8AA42" }}>
      <Typography fontSize="28px" fontWeight={800}>
        <Grid container class='Grid_Half'>
          <Grid item={6}>
            <h3 class="Content_Lyrics">Lyrics</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
          <Grid item={6} class="Grid_Padding_Left">
            <h5 class="Content_Lyrics">Artist</h5>
            <p class="Hero_Artist">Art Name Link</p>
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
}
