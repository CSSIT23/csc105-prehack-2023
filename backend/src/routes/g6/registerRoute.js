import express from "express";
import mysql from "mysql2";
const app = express();

const groupSixRouter = express.Router();

groupSixRouter.get("/", (req, res) => {
  res.send("Hello World");
});

const getFeatures = () => {};

export default function registerGroupSix(app) {
  app.use("/groupSix", groupSixRouter);

  const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "workshop1",
    password: "csc1056789",
    database: "workshop_spot1",
  });

  connection.connect();

  app.get("/podcast", (req, res) => {
    connection.query(
      "SELECT * FROM podcast_categories WHERE featured = 1",
      (err, rows) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          if (rows[0]) {
            res.json({
              succes: true,
              data: rows[0],
              error: null,
            });
          } else {
            res.json({
              succes: true,
              data: null,
              error: null,
            });
          }
        }
      }
    );
  });

  app.get("/podcast/all" , (req,res)=>{

    const sql = mysql.format('SELECT * FROM podcast_categories INNER JOIN podcast_sections ON podcast_categories.section_id = podcast_sections.id WHERE featured =1')

    connection.query(sql,(err,rows)=>{
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      else {
        if (rows[0]) {
          res.json({
            succes: true,
            data: rows[0],
            error: null,
          });
        } else {
          res.json({
            succes: true,
            data: null,
            error: null,
          });
        }
      }
    })
  })
}
