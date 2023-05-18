import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
const groupOneRouter = express.Router();
const app = express();
app.use(bodyParser.json({ type: "application/json" }));

groupOneRouter.get("/getRecentPlaylists", (req, res) => {
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

groupOneRouter.get("/getFeedKinds", (req, res) => {
  const user_id = req.body.user_id;
  var sql_feedkinds = mysql.format(
    "SELECT * FROM feed_kinds WHERE user_id = '?'",
    [user_id]
  );
  connection.query(sql_feedkinds, (err, feedItems_rows) => {
    if (err) {
      return res.json({
        success: false,
      });
    } else {
      const feed_id = feedItems_rows.feed_id;
      var sql_feeditems = mysql.format(
        "SELECT * FROM feed_items WHERE kind_id = '?'",
        [feed_id]
      );
      connection.query(sql_feeditems, (err, feedKinds_rows) => {
        if (err) {
          return res.json({
            success: false,
          });
        } else {
          const feed_id = feedItems_rows.feed_id;
          var sql_feeditems = mysql.format(
            "SELECT * FROM feed_items WHERE kind_id = '?'",
            [feed_id]
          );
          return res.json({
            success: true,
            data: rows,
          });
        }
      });
    }
  });
});

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
});
export default function registerGroupOne(app) {
  app.use("/groupOne", groupOneRouter);
}
