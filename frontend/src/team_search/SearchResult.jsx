import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BigSong from "./bigSong";
import SmallSong from "./smallSong";

function SearchResult() {
  return (
    <Box className="flex-container" sx={container}>
      <Box className="flex-container" sx={topResultStyle}>
        <Typography fontSize="28px" fontWeight={800}>
          Top result
        </Typography>
        <BigSong />
      </Box>
      <Box className="flex-container" sx={songsStyle}>
        <Typography fontSize="28px" fontWeight={800}>
          Songs
        </Typography>
        {/* <Box className="flex-container" sx={songsContainer}>
          <SmallSong />
          <SmallSong />
          <SmallSong />
          <SmallSong />
        </Box> */}
        <Stack >
          <SmallSong />
          <SmallSong />
          <SmallSong />
          <SmallSong />
        </Stack>
      </Box>
    </Box>
  );
}
const container = {
  justifyContent: "space-between",
};
const topResultStyle = {
  width: "39%",
  flexDirection: "column",
  height:"362px"
};
const songsStyle = {
  width: "59%",
  flexDirection: "column",
  height:"362px"

};
const songsContainer = {
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "space-evenly",
};

export default SearchResult;
