import express from "express";

const groupFourteenRouter = express.Router();

groupFourteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});


groupFourteenRouter.get("/episode/:podcastEpisodeId",(req,res)=>{
  const  podcastEpisodeId = req.params.podcastEpisodeId;
  // console.log(podcastEpisodeId);
  connection.query(`select * from podcast_episodes
  join (podcast_shows join (podcast_show_categories psc join podcast_categories pc on psc.category_id = pc.id) join podcast_show_categories p on podcast_shows.id = p.show_id) where podcast_episodes.id=${podcastEpisodeId}`,(err,rows)=>{
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
