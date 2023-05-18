<<<<<<< HEAD
// const express = require("express");
// const mysql = require("mysql2");
import express from "express";
=======
import mysql from "mysql2";
import express from "express";

>>>>>>> 076b19abfb502d3dcd411f5395192cdaad5b3ab5
const groupFifteenRouter = express.Router();

//=========================Lyric======================
groupFifteenRouter.get("/track/:trackId", (req, res) => {
  const { trackId }  = req.params

  const query = connection.query('SELECT lyric FROM tracks, track_lyrics WHERE tracks.id = ? and tracks.id = track_lyrics.track_id order by `order`', [trackId], (err, rows) => {
      // Return data to the client if success
      return res.json({
        success: true,
        data: rows,
        error: null,
      });
    
  });
});
//=========================Artist======================
groupFifteenRouter.get("/artist/:artistId",(req, res)=>{
  const { artistId } = req.params

  const query = connection.query('SELECT id, name, profile_url FROM artists WHERE artists.id = ?',[artistId], (err,rows)=>{
    console.log(err, rows);
    return res.json({
      success: true,
      data: rows,
      error: null,
    });
  });
});

///////////////////////////////////////////////////////
export default function registerGroupFifteen(app) {
  app.use("/groupFifteen", groupFifteenRouter);
}

