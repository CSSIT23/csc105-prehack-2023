import { Box, Typography } from "@mui/material";


/**
 * TODO:
 * No show all button functioning required
 * Need to loop trough each section of quried sections
 */
export default function TeamPlayListSection$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Playlist Section
      </Typography>

    </Box>
  );
}
