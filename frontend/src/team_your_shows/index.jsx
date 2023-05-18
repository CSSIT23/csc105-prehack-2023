import { Box, Typography } from "@mui/material";
import React,{useState} from "react";
import ShowCard from "./components/ShowCard";

export default function TeamYourShows$() {
  const [state, setState] = useState(null);
  const [userData, setUserData] = useState(null);
  
return (
  <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
    <Typography fontSize="28px" fontWeight={800}>
      Your Show All
    </Typography>

    <Box sx={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
      {shows.map((show, index) => (
        
        <ShowCard key={index} image={show?.coverUrl}  title={show?.title} author={show.author} />
     ))};

    </Box>
  </Box>
);
}
