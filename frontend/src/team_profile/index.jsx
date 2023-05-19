import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import React, {useEffect} from "react";
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia  } from "@mui/material";
import {useParams, useRoutes} from "react-router-dom";


export default function TeamProfile$()  {
  const {userId} = useParams();
  const [profile, setProfile] = React.useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/groupSeventeen/profile/${userId}`, {withCredentials: true})
      .then((res) => res.json())
      .then(data => setProfile(data))
      .catch(console.error)
  }, [userId]);

  return (
    <>
      <Box
        sx={{
          padding: 2,
          borderRadius: "5px",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
          backgroundColor: "rgb(32, 87, 100)",
          height: "40vh",
          maxHeight: "600px",
          minHeight: "350px",
        }}
      >
        <div style={{ position: "absolute", top: "10px", left: "10px" }}>
          <button
            type="button"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              background: "black",
              color: "white",
              border: "none",
            }}
          >
            &larr;
          </button>
        </div>

        <div style={{ position: "absolute", top: "10px", left: "60px" }}>
          <button
            type="button"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              background: "black",
              color: "white",
              border: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            &rarr;
          </button>
        </div>
            {/* add the icon and the avatar next to the button */}
        <div style={{ position: "absolute", top: "10px", right: "60px" }}>
          <button
            type="button"
            style={{
              fontWeight: 700,
              boxSizing: "border-box",
              WebkitTapHighlightColor: "transparent",
              position: "relative",
              backgroundColor: "var(--background-base, rgba(0, 0, 0, 0.54))",
              color: "var(--text-base, #ffffff)",
              display: "flex",
              borderRadius: "500px",
              fontSize: "inherit",
              minHeight: "32px",
              WebkitBoxAlign: "center",
              alignItems: "center",
              WebkitBoxPack: "center",
              justifyContent: "center",
              paddingBlock: "4px",
              paddingInline: "33px 16px",
            }}
          >
            Install App
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
            <img
              className="Profile pic"
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
              alt="Profile"
              style={{
                display: "flex-left",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                backgroundColor: 'grey',
                shadowColor: "black",
                shadowOffset: { height: 6 },
                shadowOpacity: 1.0,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginLeft: "260px" }}>
            <h1
              dir="auto"
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 fLMRCf"
              style={{
                margin: "0.08em 0px 0.12em",
                visibility: "visible",
                width: "100%",
                fontSize: "14px",
                fontFamily: "var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
              }}
            >
              Profile
            </h1>

            {/* Format user name with formatName(user) */}
            <h1
              dir="auto"
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 fLMRCf"
              style={{
                margin: "0.08em 0px 0.12em",
                visibility: "visible",
                width: "100%",
                fontSize: "96px",
                fontFamily: "var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
              }}
            >
              Apisit Maneerat
            </h1>

            <h1
              dir="auto"
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 fLMRCf"
              style={{
                margin: "0.08em 0px 0.12em",
                visibility: "visible",
                width: "100%",
                fontSize: "14px",
                fontFamily: "var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
              }}
            >
              10 public Playlists - 11 followers - 24 following
            </h1>
          </div>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%" }}>
          <div style={{ borderRadius: "50%", padding: "0 0 0 1" }}>
            <Button variant="outlined" style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}>
              Following
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}>
          <h1
            dir="auto"
            data-encore-id="type"
            className="Type__TypeElement-sc-goli3j-0 fLMRCf"
            style={{
              margin: "0.08em 0px 0.12em",
              visibility: "visible",
              fontSize: "20px",
              fontFamily: "var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
              flexShrink: 0,
            }}
          >
            Public Playlists
          </h1>
          <div style={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
            <h1
              dir="auto"
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 fLMRCf"
              style={{
                margin: "0.08em 0px 0.12em",
                visibility: "visible",
                color: "grey",
                fontSize: "14px",
                fontFamily: "var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif))",
              }}
            >
              Show all
            </h1>
          </div>
        </div>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: "10px",
              backgroundColor: "#181818",
              color: "#FFFFFF",
            }}
          >
            <CardMedia
              sx={{
                height: 140,
                width: 200,
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfVoICjAPr6TYO0Sq6nd2E8WzOc9AGvq3JA&usqp=CAU"
              title="User profile picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Jamanese Music
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: "10px",
              backgroundColor: "#181818",
              color: "#FFFFFF",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://i.kym-cdn.com/entries/icons/original/000/032/965/making-of-a-2d-animation-for-chilledcow-20180706052709.jpg"
              title="User profile picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Lofi Study
              </Typography>
              <Typography variant="body2" color="grey">
                1,909,093 Followers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: "10px",
              backgroundColor: "#181818",
              color: "#FFFFFF",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXNzMuoWosXUdhzPKANB61mjyIdb1ixkjrg&usqp=CAU"
              title="User profile picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                kpop
              </Typography>
              <Typography variant="body2" color="grey">
                5 Followers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 345,
              padding: "10px",
              backgroundColor: "#181818",
              color: "#FFFFFF",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1584012574355-008c9476e6ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODU4MTc5M3x8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
              title="User profile picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                International mii
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
    )
}
