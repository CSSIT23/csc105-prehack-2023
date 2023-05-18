
import express from "express"


const groupFifteenRouter = express.Router();

groupFifteenRouter.get("/track/:trackId", (req, res) => {
<<<<<<< Updated upstream
  res.send("Hello World");
});

=======
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

groupFifteenRouter.get("/artist/:artistId",(req, res)=>{
  const { artistId } = req.params

  const query = connection.query('SELECT id, name, profile_url FROM artists WHERE artists.id = ? and artists.name = ? and artists.profile_url = ?',[artistId], (err,rows)=>{
    return res.json({
      success: true,
      data: rows,
      error: null,
    });
  })
});

///////////////////////////////////////////////////////
>>>>>>> Stashed changes
export default function registerGroupFifteen(app) {
  app.use("/groupFifteen", groupFifteenRouter);
}

