import express from "express";

const groupThreeRouter = express.Router();

groupThreeRouter.get("/", (req, res) => {
  res.send("Hello World");
});

groupThreeRouter.get("/artist", (req, res) => {
  const artistId = req.query.artistId;

  const query = `
  SELECT artists.*,
  SUM(artist_listeners.count) AS listener,
  follower_counts.followers
  FROM artists
  INNER JOIN artist_listeners ON artists.id = artist_listeners.artist_id
  JOIN (
    SELECT COUNT(user_id) AS followers, artist_id
    FROM user_artist_follows
    GROUP BY artist_id
  ) AS follower_counts ON artists.id = follower_counts.artist_id
  WHERE artists.id = ?;`;

  connection.query(query,
    [artistId],
    (err, rows) => {
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
          data: rows[0],
          error: null,
        });
      }
    })
});

groupThreeRouter.get("/country", (req, res) => {
  const artistId = req.query.artistId;

  const query = `
  SELECT *
  FROM artist_listeners
  INNER JOIN countries c on artist_listeners.country_id = c.id
  WHERE artist_id = 1;`;

  connection.query(query,
    [artistId],
    (err, rows) => {
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
    })
});

export default function registerGroupThree(app) {
  app.use("/groupThree", groupThreeRouter);
}
