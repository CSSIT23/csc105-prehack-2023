import { Box, Typography } from "@mui/material";

/**
 * Need to retrieve :sectionId params and parse them to fetch each section to show up
 */
export default function TeamPlayListArtist$({ children }) {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Best of Artists
      </Typography>
    </Box>
  );
}
