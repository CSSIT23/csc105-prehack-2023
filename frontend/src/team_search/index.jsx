import { Box, Typography } from "@mui/material";
/**
 *  use router's query string `?name=` to query all musics you needed.
 */
export default function TeamSearch$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Browse all
      </Typography>
    </Box>
  );
}
