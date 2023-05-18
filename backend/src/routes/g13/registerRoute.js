import express from "express";

const groupThirteenRouter = express.Router();

groupThirteenRouter.get("/", (req, res) => {
  const showId = req.query.id;
  connection.query(
    `SELECT * FROM podcast_shows WHERE id = ${showId}`,
    (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        if (rows) {
          const podcastData = rows;
          console.log(podcastData);
          connection.query(
            `SELECT * FROM podcast_episodes WHERE show_id = ${showId}`,
            (err, episode) => {
              if (err) {
                res.json({
                  success: false,
                  data: null,
                  error: err.message,
                });
              } else {
                if (rows) {
                  res.json({
                    success: true,
                    data: { podcastData: podcastData[0], episode },
                    error: null,
                  });
                }
              }
            }
          );
        }
      }
    }
  );
});
export default function registerGroupThirteen(app) {
  app.use("/groupThirteen", groupThirteenRouter);
}
