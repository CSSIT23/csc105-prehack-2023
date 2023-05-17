import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import TeamSidebar from "../../../team_sidebar";
import TeamNavbar from "../../../team_navbar";
import { AuthProvider } from "../../context/auth";
import NavbarFader from "../../../team_navbar/components/navbar-fader";

export default function MainLayout() {
  return (
    <AuthProvider>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flex: 1, padding: ".5rem", gap: ".5rem" }}>
          <Box sx={{ width: "300px", height: "100%" }}>
            <TeamSidebar />
          </Box>
          <Box
            flex={1}
            sx={{
              position: "relative",
              background: "#242424",
              borderRadius: "5px",
            }}
          >
            <TeamNavbar />
            <NavbarFader />
            <Box sx={{ position: "absolute", inset: 0, overflowY: "auto" }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </AuthProvider>
  );
}
