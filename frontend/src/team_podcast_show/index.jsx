import { Box, Typography, Button } from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../share/axiosInstance.js";
export default function TeamPodcastsShow$() {
  const { podcastShowId } = useParams();
  const [isloading, setisloading] = useState(true);
  const [podcastData, setPodcastData] = useState({
    id: 0,
    title: "",
    author: "",
    description: "",
    cover_url: null,
  });
  const [episodes, setEpisodes] = useState([]);
  const showid = async () => {
    setisloading(true);
    const podshow = await Axios.get(`/groupThirteen?id=${podcastShowId}`);
    console.log(podshow.data);
    setPodcastData({
      id: podshow.data.data.podcastData.id,
      title: podshow.data.data.podcastData.title,
      author: podshow.data.data.podcastData.author,
      description: podshow.data.data.podcastData.description,
      cover_url: podshow.data.data.podcastData.cover_url,
    });
    setEpisodes(podshow.data.data.episode);
    setisloading(false);
  };

  useEffect(() => {
    showid();
  }, []);

  
  return (
    <Box sx={{ background: "rgba(248, 200, 0)" }}>
      <Typography sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <img
          style={{
            width: "25%",
            borderRadius: 10,
            marginLeft: 40,
            marginBottom: 10,
            boxShadow: "3px 3px 60px rgba(0, 0, 0, 0.8)",
          }}
          src={podcastData.cover_url}
          alt="cover"
        />
        <div>
          <br />
          <Typography
            variant="h6"
            sx={{ fontSize: "15px", fontWeight: 700, marginTop: 20 }}
          >
            Podcast
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: "70px", fontWeight: 700, marginBottom: 1 }}
          >
            {podcastData.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", fontWeight: 600, marginBottom: 8 }}
          >
            {podcastData.author}
          </Typography>
        </div>
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            backgroundColor: "black",
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginLeft: 5,
              marginTop: 2,
              marginBottom: 2,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              border: "2px solid gray",
              padding: 0.5,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "2px solid white",
              },
            }}
          >
            <Typography
              sx={{
                marginLeft: 2,
                marginRight: 2,
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Following
            </Typography>
          </Button>
          <Button
            sx={{
              "&:hover": {
                background: "black",
              },
            }}
          >
            <BsThreeDots size={"30px"} color="white" />
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: "100%", background: "black" }}>
          <Box>
            <Box sx={{ width: "70%" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <Typography
                  sx={{
                    marginLeft: 5,
                    marginTop: 2,
                    marginBottom: 2,
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  ALL Episodes
                </Typography>
              </Box>
              <div
                style={{
                  borderBottom: "1px solid white",
                  margin: "10px 0",
                  width: "95%",
                  display: "block",
                  marginLeft: 20,
                }}
              ></div>
              <div>
                {episodes.map((ep) => (
                  <div>
                    <img
                      style={{
                        width: "15%",
                        marginLeft: 40,
                        marginBottom: 10,
                        marginTop: 10,
                      }}
                      src={
                        "https://thestandard.co/wp-content/uploads/2017/08/logo-TSS-600x600.jpg?x28809"
                      }
                      alt="aps"
                    />
                    <div>{ep.title}</div>
                    <div>{ep.description}</div>
                  </div>
                ))}
              </div>
              <Box>
                <Typography>snfjsjndf</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              About
            </Typography>
            <Typography
              sx={{
                marginLeft: 2,
                marginRight: 2,
                fontSize: "10px",
                fontWeight: 400,
              }}
            >
              <br />
              detail
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
