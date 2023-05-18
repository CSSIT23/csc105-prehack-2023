import mysql from "mysql2";
import express from "express";

const groupFifteenRouter = express.Router();

groupFifteenRouter.get("/track/:trackId", (req, res) => {
  const { trackId }  = req.params
  const Neo = 0

  const query = connection.query('SELECT lyric FROM tracks, track_lyrics WHERE tracks.id = ? and tracks.id = track_lyrics.track_id order by `order`', [trackId], (err, rows) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      // Return data to the client if success
      return res.json({
        success: true,
        data: rows,
        error: null,
      });
    }
  });
});



///////////////////////////////////////////////////////
export default function registerGroupFifteen(app) {
  app.use("/groupFifteen", groupFifteenRouter);
}
