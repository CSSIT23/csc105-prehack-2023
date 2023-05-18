import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import axios from 'axios';

const Axios = axios.create({ baseURL: 'http://localhost:8000', withCredentials: true });

const categoryList1 = [
  { categoryname: "Educational", index: 1, color: "#477D95" },
  { categoryname: "Documentary", index: 2, color: "#503750" },
  { categoryname: "Comedy", index: 3, color: "#AF2896" },
  { categoryname: "Pop Culture", index: 4, color: "#DC148C" },
  { categoryname: "Fitness & Nutrition", index: 5, color: "#27856A" },
  { categoryname: "Celebrities", index: 6, color: "#777777" },
  { categoryname: "TV", index: 7, color: "#8D67AB" },
  { categoryname: "Beauty", index: 8, color: "#A56752" },
  { categoryname: "Flim", index: 3, color: "#1E3264" },
  { categoryname: "Books", index: 3, color: "#503750" },];

const categoryList2 = [
  { categoryname: 'Aets & Entertainment', index: 1, color: "#477D95" },
  { categoryname: 'Book', index: 2, color: "#503750" },
  { categoryname: 'Celerbrities', index: 3, color: "#AF2896" },
  { categoryname: 'Comedy', index: 4, color: "#DC148C" },
  { categoryname: 'Design', index: 5, color: "#27856A" },
  { categoryname: 'Fiction', index: 6, color: "#777777" },
  { categoryname: 'Film', index: 7, color: "#8D67AB" },
  { categoryname: 'Literature', index: 8, color: "#A56752" },
  { categoryname: 'Pop culture', index: 3, color: "#1E3264" },
  { categoryname: 'Horror', index: 3, color: "#503750" },];

const categoryZone = [
  { categoryheader: 'Arts & Business', index: 1, categorydetails: categoryList1 },
  { categoryheader: 'Business & Technology', index: 2, categorydetails: categoryList2 },
];

export default function TeamPodcastAll$() {
  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
      <Typography variant="h2" fontWeight={800} mb={8}>
        All podcast categories
      </Typography>


      {categoryZone.map((cate, i) => (
        <React.Fragment>
          <Typography variant="body2" fontWeight="bold" mt={3} key={i}>{cate.categoryheader}</Typography>
          <Grid container direction='row' rowSpacing={2} columnGap={2} mt={1} key={i}>
            {cate.categorydetails.map((c, index) => (
              <Grid item md={2} key={index} >
                <Link style={{ textDecoration: 'none' }} key={index}>
                  <Box bgcolor={c.color} height="150px" borderRadius={2} padding={1.5} key={index}>
                    <Typography variant="body2" fontWeight="bold" sx={{ color: 'white' }}>{c.categoryname}</Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}

    </Box>
  );
}
