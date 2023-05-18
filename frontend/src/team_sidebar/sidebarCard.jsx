import { Box } from "@mui/material";
import React, { useState } from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

function SidebarCard(data) {
  const [cover, setCover] = useState(data.cover);
  const [label, setLabel] = useState(data.label);
  const [artist, setArtist] = useState(data.artist);
  const [pin, setPin] = useState(false);

  const sidebarCardBox = {
    display: "flex",
    alignItems: "center",
    height: "64px",
    width: "279px",
    cursor: "pointer",
    borderRadius: "8px",
    "&: hover": {
        bgcolor: "#171717"
    }
  }

  const textLabelInCard = {
    margin: "3px",
    fontSize: "14px",
  }

  const textArtistInCard = {
    margin: "3px",
    fontSize: "14px",
    color: "#8d8d8d",
  }

  const coverIsNull = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "42px",
    width: "42px",
    bgcolor: "#242424",
    borderRadius: "2px",
    marginLeft: "8px"
  }

  const labelArtist = {
    display: "flex",
    flexDirection: "column",
  }
  return (
    <Box sx={sidebarCardBox}>
      <Box sx={{marginRight: "16px"}}>
        {cover ? (
          <img src={cover} alt="cover"></img>
          
        ) : (
            <Box sx={coverIsNull}>
                <FolderOpenIcon sx={{height: "20px"}}/>
            </Box>
        )}
      </Box>
      <Box sx={labelArtist}>
        <p style={textLabelInCard}>Label</p>
        <p style={textArtistInCard}>Artisit</p>
      </Box>
    </Box>
  );
}

export default SidebarCard;
