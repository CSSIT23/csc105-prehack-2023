import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Play from "../img/play.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const popular = () => {
  return (
    <Box>
      {/* background */}
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          mt: "50px",
          height: "500px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          {/* spotify play */}
          <Box
            sx={{
              backgroundColor: "#03C04A",
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              mt: "25px",
              ml: "25px",
            }}
          >
            <img
              alt="404 not found"
              src={Play}
              style={{
                height: "18px",
                width: "18px",
              }}
            />
          </Box>

          {/* Follow */}
          <div>
            <Button
              sx={{
                border: "1px solid grey",
                color: "white",
                fontSize: "10px",
                ml: "30px",
                mt: "33px",
              }}
            >
              Follow
            </Button>
          </div>

          {/* more */}
          <MoreHorizIcon
            sx={{
              color: "white",
              ml: "30px",
              mt: "33px",
              height: "30px",
              width: "30px",
            }}
          ></MoreHorizIcon>
        </Box>

        <Box
          sx={{
            ml: "20px",
            mt: "20px",
            height: "30px",
          }}
        >
          <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "900",
          }}>
          Popular
          </Typography>
          <PlayArrowIcon
              sx={{
                height: "18px",
                width: "18px",
                ml: "10px",
                mt: "20px"
              }}
            />
        </Box>
      </Box>
    </Box>
  );
};

export default popular;
