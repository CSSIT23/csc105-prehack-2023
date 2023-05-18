import express from "express";

const groupSeventeenRouter = express.Router();

  //editing start for profile
  //to print the data
  //profile => profile
  //playlist owned by id => playlist
  //playlist by playlistId => data
  groupSeventeenRouter.get("/profile/:userId", (req,res) => {
    //assign the params as a variable
    //get the userId
    const userId = req.params.userId;
    console.log(userId);
    global.connection.query(`SELECT * FROM users WHERE id = ${userId}`, (err, profileRow) => {
      //check if cannot find
      if(err){
        res.json({
          success: false,
          profile: null,
          error: err.message,
        });
      }
      else{
        //return data
        if(profileRow[0]){
          ///testing to retieve playlist listende by owner
          const userProfileId = profileRow[0].id;
          global.connection.query(`SELECT * FROM playlists WHERE owner_id = ${userProfileId}`, (err, playlistRow) => {
            //check if cannot find
            if(err){
              res.json({
                success: false,
                playlist: null,
                error: err.message,
              });
            }
            else{
              //return data
              if(playlistRow[0]){
                res.json({
                  success: true,
                  playlist: playlistRow[0],
                  data: profileRow[0],
                  error: null,
                });
              }
              else{
                res.json({
                  success: true,
                  playlist: null,
                  error: null,
                });
              }

            }
          });
          // res.json({
          //   success: true,
          //   data: rows[0],
          //   error: null,
          // });
        }
        else{
          res.json({
            success: true,
            profileRow: null,
            error: null,
          });
        }
        
      }
    });

  });
//end profile

//editing start for playlist owned by user
groupSeventeenRouter.get("/playlist/:playlistId", (req,res) => {
  //assign the params as a variable
  //get the userId
  const playlistId = req.params.playlistId;
  console.log(playlistId);
  global.connection.query(`SELECT * FROM playlists WHERE id = ${playlistId}`, (err, rows) => {
    //check if cannot find
    if(err){
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    else{
      //return data
      if(rows[0]){
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      }
      else{
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
      
    }
  });

});
//end playlist owned by user

export default function registerGroupSeventeen(app) {
  app.use("/groupSeventeen", groupSeventeenRouter);
}
