import { Box, Typography } from "@mui/material";

export default function TeamPodcastsBrowse$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Podcasts
      </Typography>
      <Typography fontSize="18px">Categories</Typography>
    </Box>
  );
}
