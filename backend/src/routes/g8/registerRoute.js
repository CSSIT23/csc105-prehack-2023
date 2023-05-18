import express from "express";

const groupEightRouter = express.Router();

groupEightRouter.get("/album/:albumId", async (req, res) => {
  const albumId = req.params.albumId;
  connection.query(
    "SELECT albums.id as album_id, albums.name AS album_name, albums.year, tracks.id as track_id, tracks.name AS track_name, tracks.duration, artists.name AS artist_name, SUM(tracks.duration) AS total_duration FROM albums INNER JOIN tracks ON albums.id = tracks.album_id INNER JOIN track_artists ON tracks.id = track_artists.track_id INNER JOIN artists ON track_artists.artist_id = artists.id WHERE albums.id = ?", [albumId], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving tracks record");
      } else if (result.length === 0) {
        res.status(404).send("Track not found");
      } else {

        res.send(result);
      }
    })
});

export default function registerGroupEight(app) {
  app.use("/groupEight", groupEightRouter);
}
