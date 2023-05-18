import express from "express";
import connection from "../../database.js";

const groupNineRouter = express.Router();

groupNineRouter.get("/artist/:artistId", async (req, res) => {
  const artistId = req.params['artistId'];

//   const run = async () => {
//     const row = await global.connection.query(
//       `SELECT * FROM artists WHERE id = ?`, [+artistId])
//       return row[0]
//  }
  

// SELECT * FROM artists 
// INNER JOIN album_artists ON artists.id = artist_id 
// INNER JOIN tracks ON album_artists.album_id = tracks.album_id 
// WHERE artists.id = ? 
// ORDER BY tracks.popularity

 global.connection.query(
    `SELECT * FROM artists 
    WHERE artists.id = ? `, [+artistId],
     async (err,rows) => {
      if (err) {
        res.json ({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        let artist = rows[0];
        global.connection.query(
          `SELECT * FROM tracks
          INNER JOIN album_artists ON tracks.album_id = album_artists.album_id
          WHERE album_artists.artist_id = ? 
          ORDER BY tracks.popularity DESC`,[+artistId], 
          async (err, rows) => {
            if (err) {
              res.json ({
                success: false,
                data: null,
                error: err.message,
              });
            } else {
              // res.json({
              //   success: true,
              //   data: {artist: artist, popular_tracks: rows} 
              // })
              let track = rows;
              global.connection.query(
                `SELECT * FROM albums
                INNER JOIN album_artists ON albums.id = album_artists.album_id
                WHERE album_artists.artist_id = ? 
                ORDER BY albums.updated_at DESC`,[+artistId],

                async (err, rows) => {
                  if (err) {
                    res.json ({
                      success: false,
                      data: null,
                      error: err.message,
                    });
                  } else {
                    res.json({
                      success: true,
                      data:{
                        artist: artist, popular_tracks: track, discography: rows
                      }
                    })
                  }

                }
              )
            }
          }
        )
        // res.json ({
        //   success: true,
        //   data: rows,
        // });
      }
    }
  )

  // res.json({});
});

export default function registerGroupNine(app) {
  app.use("/groupNine", groupNineRouter);
}

// artistid --> albumId (album_artists)  --> list of trasks (tracks)  --> order by popularity
//    1     -->   [2,42,452,52]          -->  {2: [2,4,15,12], 42: [35,252,52], ...}  --> 4, 12, 35

/* {
 success: true,
 message: "Get Artist successfully",
 data: {
  artist: {...},
  popular_tracks: [
    {...}, {...}, ...
  ],
  discography: [
    {...}, {...}, ...
  ]
 }
}*/