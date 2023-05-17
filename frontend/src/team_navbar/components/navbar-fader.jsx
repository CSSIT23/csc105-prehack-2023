import { Box } from "@mui/material";

export default function NavbarFader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        height: "100px",
        opacity: ".5",
        pointerEvents: "none",
      }}
      style={{ zIndex: 1 }}
    />
  );
}
