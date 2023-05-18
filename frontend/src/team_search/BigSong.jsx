import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function BigSong() {
  return (
    <Card sx={bigSongStyle}>
      <CardMedia
        component="img"
        // alt={title}
        height="140"
        image={'https://picsum.photos/150/150'}
        sx={{ width: "150px" }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {/* {title} */}
          asffs
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {/* {artist} */}
          asffaf
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Duration: {duration} */}
          Duration: "fsafaf"
        </Typography>
      </CardContent>
    </Card>
  );
}

const bigSongStyle = {
  height: "320px",
};

export default BigSong;
