import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../share/context/auth";
import Avatar from "./components/avatar";

export default function TeamNavbar$() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 6,
        height: "2.5rem",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: ".5rem",
        paddingRight: "1rem",
      }}
    >
      <Box flex={1} />
      <Avatar />
    </Box>
  );
}
