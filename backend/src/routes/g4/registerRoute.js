import express from "express";

const groupFourRouter = express.Router();

groupFourRouter.get("/", async (req, res) => {
  const users = req.query.userId;
  const sortBy = req.query.sortBy;
  let sortSql = "";
  if (sortBy === "recentAdded") {
    sortSql = " ORDER BY created_at DESC";
  } else if (sortBy === "alphabetical") {
    sortSql = " ORDER BY name ASC";
  } else {
    sortSql = " ORDER BY updated_at DESC";
  }
  global.connection.query(
    "SELECT * FROM users WHERE id = ?",
    [users],
    (err, rows) => {
      global.connection.query(
        //"SELECT playlists.name AS playlist_name, playlists.* FROM playlists INNER JOIN playlist_tracks pt on playlists.id = pt.playlist_id WHERE playlist_id = 1 and owner_id = ?" +
        "SELECT * FROM playlists WHERE owner_id = ? AND id != ?" +
          sortSql,
        [users, rows[0].liked_playlist_id],
        (err, playlistRows) => {
          if (err) {
            return res.status(500).json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            playlistRows = playlistRows.map((el) => ({
              name: el.name,
              descrition: el.description,
              owner_name: rows[0].name,
              ...el,
            }));
            global.connection.query(
              "SELECT * FROM playlist_tracks WHERE playlist_id = ? ",
              [rows[0].liked_playlist_id],
              (err, trackRows) => {
                let count = trackRows.length;
                return res.status(200).json({
                  success: true,
                  data: {
                    count: count,
                    playlists: playlistRows,
                  },
                  error: null,
                });
              }
            );
          }
        }
      );
    }
  );
});

export default function registerGroupFour(app) {
  app.use("/groupFour", groupFourRouter);
}