import { Box, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function TeamRecentlyPlayed$() {
  axios
    .post("http://localhost:8000/groupOne/getRecentPlaylists", {
      params: { user_id: 18 },
    })
    .then((res) => {
      console.log(res.data.data);
      setSongs(res.data.data);
    });

  const [songs, setSongs] = useState([
    {
      title: "Reputation",
      img_link:
        "https://imageio.forbes.com/blogs-images/brittanyhodak/files/2017/08/20988198_10154975234150369_1493436770276743217_o-1200x1200.jpg?format=jpg&width=1200",
    },
    {
      title: "Midnights",
      img_link:
        "https://i.iheart.com/v3/re/new_assets/63502b9eaee0f4b0e56f9a54?ops=contain(1480,0)",
    },
    {
      title: "1989",
      img_link:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png",
    },
    {
      title: "Lover",
      img_link: "https://pbs.twimg.com/media/D8-LieAWsAAaiTS.jpg:large",
    },
    {
      title: "2014 Forest Hills Drive",
      img_link:
        "https://e0.pxfuel.com/wallpapers/497/956/desktop-wallpaper-room-style-j-cole-album.jpg",
    },
    {
      title: "Kamikaze",
      img_link:
        "https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg",
    },
  ]);

  return (
    <Box sx={{ padding: 2, borderRadius: "5px", background: "#190d36" }}>
      <Typography fontSize="28px" fontWeight={800}>
        Good Morning
      </Typography>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {songs.map((song) => {
          return (
            <div
              key={song.id}
              className=" flex items-center rounded-sm w-full bg-[#302641]"
            >
              <img
                className="w-20 rounded-l-sm"
                src={song.cover_url}
                alt="album_cover"
              />
              <div>
                <p className="font-medium pl-4">{song.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
