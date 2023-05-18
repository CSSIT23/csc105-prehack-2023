import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
const groupOneRouter = express.Router();
const app = express();
app.use(bodyParser.json({ type: "application/json" }));

groupOneRouter.post("/getRecentPlaylists", (req, res) => {
    const user_id = req.body.params.user_id;
    var sql = mysql.format(
        "SELECT * FROM playlists JOIN user_recent_playlists ON playlists.id = user_recent_playlists.playlist_id WHERE user_recent_playlists.user_id = '?' ",
        [user_id]
    );
    connection.query(sql, [user_id], (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                error: err,
            });
        } else {
            return res.json({
                success: true,
                data: rows,
            });
        }
    });
});

groupOneRouter.get("/getPlaylists", (req, res) => {
    const user_id = req.body.user_id;
    var sql = mysql.format(
        "SELECT * FROM playlists JOIN user_recent_playlists ON playlists.id = user_recent_playlists.playlist_id WHERE user_recent_playlists.user_id = '?' ",
        [user_id]
    );
    connection.query(sql, [user_id], (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                error: err,
            });
        } else {
            return res.json({
                success: true,
                data: rows,
            });
        }
    });
});

groupOneRouter.get("/getData", (req, res) => {
    var sql = mysql.format("SELECT * FROM user_recent_playlists");
    connection.query(sql, (err, rows) => {
        if (err) {
            return res.json({
                success: false,
            });
        } else {
            return res.json({
                success: true,
                data: rows,
            });
        }
    });
});

<<<<<<< HEAD
groupOneRouter.get("/getFeedItems", (req, res) => {
    const user_id = req.body.user_id;
    var sql = mysql.format("SELECT * FROM feed_kinds WHERE user_id = '?'", [
        user_id,
    ]);
    connection.query(sql, (err, rows) => {
        if (err) {
            return res.json({
                success: false,
            });
        } else {
            return res.json({
                success: true,
                data: rows,
            });
        }
    });
=======
groupOneRouter.get("/getFeedKinds", (req, res) => {
  const user_id = req.body.user_id;
  var sql = mysql.format(
    "SELECT * FROM feed_kinds JOIN users ON feed_kinds.user_id = users.id WHERE user_id = '?'",
    [user_id]
  );
  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        error: err,
      });
    } else {
      return res.json({
        success: true,
        data: rows,
      });
    }
  });
>>>>>>> 8a04f1a41e2eff34f5bf5e90abd65c824f90e38b
});
export default function registerGroupOne(app) {
    app.use("/groupOne", groupOneRouter);
}
