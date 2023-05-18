import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

function SmallSong() {
  return (
    <Card sx={smallSongStyle}>
      <Grid container >
        <Grid item>
          <CardMedia
            component="img"
            // alt={title}
            height="80"
            image={'https://picsum.photos/300/300'}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{padding:"0"}}>
            <Typography  component="div" gutterBottom>
              {/* {title} */}
              asffaf
            </Typography>
            <Typography  color="text.secondary">
              {/* {artist} */}
              asfsf
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={2}
          container
          justifyContent="flex-end"
          
        >
          <Typography variant="body2" color="text.secondary">
            {/* Duration: {duration} */}
            Duration: "asflsalmf"
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

const smallSongStyle = {
  height: "80px",
};
export default SmallSong;
