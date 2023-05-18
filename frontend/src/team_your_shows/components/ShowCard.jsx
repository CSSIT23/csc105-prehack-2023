import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea} from "@mui/material";
import React,{useState} from "react";

export default function TeamYourShows$({image='', title='', author=''}) {
  const [state, setState] = useState(null);
return (
    
    <Card sx={{maxWidth: 300, padding: 2, backgroundColor: "rgba(28, 28, 28, 0.93)"}}>
      <CardActionArea >      
      <CardMedia 
      component= "img"
      height = "280"
      width= "200"
      image = {image}
      alt="artists"
      sx={{borderRadius: "5%"}}
      />
      
      <CardContent sx={{paddingLeft: 0}}>
      <Typography gutterBottom variant="h6" sx={{color: "white"}}>
       {title}
      </Typography>
      <Typography variant="body1" color="text.tertiary"  sx={{color: "gray"}}>
      {author}
      </Typography >      
      </CardContent>
      </CardActionArea>
    </Card>

);
}
