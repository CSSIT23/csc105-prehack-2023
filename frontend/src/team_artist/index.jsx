import { Box, Typography } from "@mui/material";
import Header from "./components/header";
import Popular from "./components/popular";
import Discography from "./components/discography";

export default function TeamArtist$() {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          left: "-16px",
          right: "-16px",
          top: "-45px",
          borderRadius: "5px",
          background: "linear-gradient(to bottom, #B90E0A, black)",
          height: "1000px"
        }}
      >
        <Header />
        <Popular />
        <Discography />
      </Box>
    </Box>
  );
}
