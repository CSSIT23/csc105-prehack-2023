import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function GenreCard({name}) {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={{ padding: "20px" }}>{name}</CardContent>
    </Card>
  );
}

export default GenreCard;

const cardStyle = {
  backgroundColor: "#f2f2f2",
  borderRadius: "5px",
  minWidth: "100px",
  height:"130px",

  // backgroundImage: 'url("/path/to/image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
