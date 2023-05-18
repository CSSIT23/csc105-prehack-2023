import { Stack } from "@mui/material";

export default function Body({ children }) {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: 0,
        left: 0,

        height: "100%",
        borderRadius: "5px",
        paddingTop: "3rem",
        color: "white",
        zIndex: 2,
        gap: 1,
        paddingLeft: 2,
        paddingRight: 2,
        overflowY: "auto",
        paddingBottom: 2,
      }}
    >
      {children}
    </Stack>
  );
}
