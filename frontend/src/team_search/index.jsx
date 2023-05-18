import { Box, Grid, Typography } from "@mui/material";
import GenreCard from "./GenreCard";
import "./style.css";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
/**
 *  use router's query string `?name=` to query all musics you needed.
 */
export default function TeamSearch$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <SearchBar/>
      <Typography fontSize="28px" fontWeight={800}>
        Browse all
      </Typography>
      <Grid container spacing={1}>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <GenreCard />
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <GenreCard />
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <GenreCard />
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <GenreCard />
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={3}>
          <GenreCard />
        </Grid>
      </Grid>

      {/* <SearchResult/> */}
    </Box>
  );
}
