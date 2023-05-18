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
          backgroundColor: "var(--grey)",
          height: "30vh",
          maxHeight: "500px",
          minHeight: "250px",
          "@media (min-width: 768px)": {
            minHeight: "340px",
          },
          "&:after": {
            content: '""',
            display: "block",
            width: "100%",
            height: "20vh",
            backgroundColor: "var(--grey)",
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), var(--black))",
            position: "absolute",
            top: "100%",
            zIndex: -1,
          },
        }}
      >
          <Stack direction="row" spacing={4}>
            <Avatar
              alt="Profile picture"
              src="frontend\src\assets\react.svg"
              sx={{
                width: '20%',
                maxWidth: 250,
                minWidth: 120,
                marginRight: (theme) => theme.spacing('lg'),
                boxShadow: '0 4px 60px rgb(0 0 0 / 50%)',
                backgroundColor: (theme) => theme.palette.darkGrey,
                borderRadius: (props) => (props.type === 'user' ? '50%' : '0'),
                '@media (min-width: 768px)': {
                marginRight: (theme) => theme.spacing('xl'),
                },
              }}
            />
          </Stack>

        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          {!!profile ? profile.data.name : ''}

        </Typography>
      </Box>
      <Box >
        <Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>

        </ButtonGroup>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gridGap: "var(--spacing-sm)",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gridGap: "var(--spacing-lg)",
            },
          }}
        >
          {/* Grid items */}
        </ul>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{
            display: 'flex',

            maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="User profile picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
           <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
           <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
    </>
  );
}







