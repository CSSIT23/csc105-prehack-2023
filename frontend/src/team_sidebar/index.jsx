import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddIcon from "@mui/icons-material/Add";
import PushPinIcon from "@mui/icons-material/PushPin";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SidebarCard from "./sidebarCard";
import CategorySidebar from "./categorySidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TeamSidebar$() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const iconButton = {
    marginRight: "18px",
  };

  const searchRecentIcon = {
    marginRight: "18px",
    marginLeft: "10px",
    width: "18px",
  };

  const sideBarHeader = {
    bgcolor: "#1b1b1b",
    height: "112px",
    width: "295px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    marginBottom: "6px",
  };

  const homeSearch = {
    display: "flex",
    alignItems: "center",
    height: "40x",
    width: "247px",
    cursor: "pointer",
  };

  const sidebarLib = {
    bgcolor: "#1b1b1b",
    width: "295px",
    height: "calc(100vh - 134px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  };

  const sideBarYourLib = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    width: "263px",
  };
  const catSlide = {
    height: "48px",
    width: "295px",
  };

  const sidebarSearchRecent = {
    display: "flex",
    alignItems: "center",
    height: "34px",
    width: "279px",
  };

  const sidebarPlaylist = {
    display: "flex",
  };

  const searchPlaylist = {
    height: "calc(100vh - 238px)",
    width: "279px",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/");
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        // background: "#242424",
        height: "100%",
        borderRadius: "5px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={sideBarHeader}>
        <Box sx={homeSearch} onClick={() => navigate("/")}>
          <HomeIcon sx={iconButton} />
          <p>Home</p>
        </Box>
        <Box sx={homeSearch} onClick={() => navigate("/search")}>
          <SearchIcon sx={iconButton} />
          <p>Search</p>
        </Box>
      </Box>

      <Box sx={sidebarLib}>
        <Box sx={sideBarYourLib}>
          <FileCopyIcon sx={iconButton} />
          <p>Your Library</p>
          <AddIcon sx={{ marginLeft: "auto" }} />
          <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
        </Box>
        <Box sx={catSlide}>
          <CategorySidebar />
        </Box>
        <Box sx={searchPlaylist}>
          <Box sx={sidebarSearchRecent}>
            <SearchIcon sx={searchRecentIcon} />
            <p style={{ marginLeft: "auto", fontSize: "14px" }}>Recents</p>
            <ArrowDropDownIcon sx={{ marginRight: "5px" }} />
          </Box>
          <Box sx={sidebarPlaylist}>
            {data &&
              data.map((playlist) => (
                <SidebarCard
                  key={playlist.id}
                  label={playlist.name}
                  artist={playlist.owner_name}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
