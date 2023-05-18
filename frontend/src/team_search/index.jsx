import { Box, Grid, Typography } from "@mui/material";
import GenreCard from "./GenreCard";
import "./style.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import axios from "../share/axiosInstance";
import { useEffect, useState } from "react";
/**
 *  use router's query string `?name=` to query all musics you needed.
 */
export default function TeamSearch$() {
  // const instance = axios.create({
  //   withCredentials: true,
  // });
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .get("/groupFive/search")
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(tracks);

  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <SearchBar />
      <Typography fontSize="28px" fontWeight={800}>
        Browse all
      </Typography>
      <Grid container spacing={1}>
        {/* {tracks.map((e) => {
          return <GenreCard/>
        })} */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
         
        {tracks.data?.map((e, index) => (
           <GenreCard name={e.name} />
        ))}
        </Grid>
      </Grid>

      <SearchResult />
    </Box>
  );
}
