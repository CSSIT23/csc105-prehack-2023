import { Box, Typography } from "@mui/material";

export default function TeamProfile$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Profile
      </Typography>
    </Box>
  );
}
