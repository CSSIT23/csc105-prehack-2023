import express from "express";

const groupFourteenRouter = express.Router();

groupFourteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});


groupFourteenRouter.get("/episode/:podcastEpisodeId",(req,res)=>{
  const  podcastEpisodeId = req.query.podcastEpisodeId;
  // console.log(podcastEpisodeId);
  connection.query(`Select * from podcast_episodes where id=${podcastEpisodeId}`,(err,rows)=>{
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  })

})
export default function registerGroupFourteen(app) {
  app.use("/groupFourteen", groupFourteenRouter);
}
