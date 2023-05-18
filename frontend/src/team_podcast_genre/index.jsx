import { Box, Typography, Grid } from "@mui/material";

export default function TeamPodcastGenre$() {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "5px",
        background: "rgba(0,0,0,.1)",
        position: "absolute",
        top: "-15px",
        left: "-15px",
        width:"100%",
        // right: "-50px",
      }}
    >
      <div
        className="head-cover"
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          //insert bg here
          backgroundImage:
            'url("https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="head-text">
          <Typography
            fontSize="28px"
            fontWeight={900}
            color="white"
            style={head_text}
          >
            Business & Technology
          </Typography>
        </div>
      </div>
      <div
        className="podcast-part"
        style={{
          // backgroundColor: "#1E1E1E",
          marginLeft: "40px",
        }}
      >
        <div className="head-name">
          <Typography
            fontSize="18px"
            fontWeight={600}
            color="white"
            style={head_name}
          >
            Popular business & Technology podcast
          </Typography>
        </div>
        <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-01" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-02"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            {/* <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-02" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-02"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-03" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-01"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-04" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-03"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-05" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-04"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-06" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-03"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-07" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-03"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-08" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-03"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="podcast-container" style={pod_con}>
                <div className="podcast-container-id-10" style={pod_con_info}>
                  <div className="padcast-img">
                    <img
                      src="https://www.garmento.net/wp-content/uploads/2017/01/1920px-white-parallax.png"
                      alt="podcast-pic-03"
                      style={pod_img}
                    ></img>
                  </div>
                  <div className="podcast-name" style={pod_name}>
                    <Typography fontSize="16px" fontWeight={400} color="white">
                      insert text here
                    </Typography>
                  </div>
                  <div className="podcast-detail" style={pod_detail}>
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#797979"
                    >
                      insert text podcast detail here
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid> */}
          {/* </div> */}
        </Grid>
      </div>
    </Box>
  );
}

const head_text = {
  fontSize: "36px",
  marginTop: "330px",
  marginLeft: "50px",
};

const head_name = {
  marginTop: "30px",
  marginBottom: "20px",
};

const pod_con = {
  marginTop: "20px",
  // marginLeft: "10px",
  backgroundColor: "#262626",
  width: "12rem",
  height: "fit-content",
  borderRadius: "10px",
  padding: "0 1rem"
};

const pod_con_info = {
  marginBottom: "1rem",
};

const pod_img = {
  width: "10rem",
  height: "10rem",
  marginTop: "1rem",
  borderRadius: "5px",
};

const pod_name = {
  marginTop: "1rem",
};

const pod_detail = {
  // marginLeft: "1rem",
};

const pod_coll = {
  // display: "flex",
  // flexDirection: "row-reverse",
  // width: "fit-content",
};
