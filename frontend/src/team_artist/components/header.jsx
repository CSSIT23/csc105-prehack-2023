import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Photo from "../img/katy.jpeg";
import Verify from "../img/verify.png";

const header = () => {
  return (
    <Box>
      <Box sx={{ mt: "70px", ml: "30px" }}>
        <img
          alt="404 not found"
          src={Photo}
          style={{
            height: "250px",
            width: "250px",
            paddingRight: "10px",
            borderRadius: "250px",
            boxShadow: "10",
          }}
        />
      </Box>
      <Box sx={{ height: "100%", ml: "300px", mt: "-200px" }}>
        <img
          alt="404 not found"
          src={Verify}
          style={{
            height: "25px",
            width: "25px",
          }}
        />
         <Typography
          sx={{
            fontSize: "12px",
            marginTop: "-25px",
            ml: "35px"
          }}
        >
          Verified Artist
        </Typography>
        <Typography
          sx={{
            fontSize: "90px",
            fontWeight: "900",
            marginTop: "-20px"
          }}
        >
          Katy Perry
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px"
          }}
        >
          52,787,079 monthly listeners
        </Typography>
      </Box>
    </Box>
  );
};

export default header;
