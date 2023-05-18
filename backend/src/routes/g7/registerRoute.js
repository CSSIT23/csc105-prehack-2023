import express from "express";

const groupSevenRouter = express.Router();

groupSevenRouter.get("/playlist/:playlistId", (req, res) => {
  const playlistId = req.params.playlistId;
  console.log(playlistId);
  global.connection.query(`SELECT * FROM playlists INNER JOIN users ON playlists.id=${playlistId} AND owner_id = users.id`, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else { 
      const playlist = rows[0];
      console.log(playlist);

      global.connection.query(`SELECT * FROM playlist_tracks WHERE playlist_id=${playlistId}`, (err, rows) => {
        console.log(rows);
        for (let index in rows) {
          global.connection.query(`SELECT * FROM tracks INNER JOIN albums ON ${rows[index].album_id} = albums.track_id`, (err, res) => {
              console.log(res);
          });
        }
      });
      // SELECT * FROM workshop_spot1.playlists INNER JOIN workshop_spot1.users ON playlists.owner_id = users.id;
      // SELECT COUNT(*) FROM workshop_spot1.playlist_tracks WHERE playlist_id=1;
      // SELECT * FROM workshop_spot1.tracks WHERE id=1;
      // SELECT * FROM workshop_spot1.tracks INNER JOIN workshop_spot1.albums ON albums.id = tracks.id;
      return res.json(playlist);
    }
  });
});

export default function registerGroupSeven(app) {
  app.use("/groupSeve", groupSevenRouter);
}
