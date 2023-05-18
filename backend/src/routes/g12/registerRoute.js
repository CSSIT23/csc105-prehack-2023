import express from "express";
const groupTwelveRouter = express.Router();
import mysql from "mysql2";

groupTwelveRouter.get("/genre/:genreId", (req, res) => {
  const section_Id = req.params.genreId;

  connection.query(
    "select * from podcast_sections where id = ?",
    section_Id,
    (err, data) => {
      if (err) {
        res.send({
          error: "Section not found",
        });
      } else {
        var response = {
          section: data[0].name,
          category: [],
        };

        connection.query(
          "select * from podcast_categories INNER JOIN podcast_sections ps on podcast_categories.section_id = ps.id where section_id = ?",
          section_Id,
          (err, rows) => {
            if (err) {
              res.json({
                error: "Section not found",
              });
            } else {
              for (let index = 0; index < rows.length; index++) {
                console.log(rows);
                connection.query(
                  "select * from podcast_shows INNER JOIN podcast_show_categories psc on podcast_shows.id = psc.show_id where category_id = ?",
                  rows[index].id,
                  (err, shows) => {
                    if (err) {
                      res.json({
                        error: "Section not found",
                      });
                    } else {
                      response.category.push({
                        name: rows[index].name,
                        items: shows,
                      });

                      res.json(response);
                    }
                  }
                );
              }
            }
          }
        );
      }
    }
  );

  // connection.query(sql, (err, data) => {
  //   if (data.length == 0) {
  //     res.send({
  //       error: "Section not found",
  //     });
  //   } else {
  //     const section_name = data[0].name;
  //     sql = mysql.format(
  //       "select podcast_categories.id,podcast_categories.name as name from podcast_categories inner join podcast_sections ps on podcast_categories.section_id = ps.id where section_id = ?",
  //       [section_Id]
  //     );

  //     connection.query(sql, (err, data) => {
  //       console.log("Connecting to podcast_categories");
  //       if (data.length == 0) {
  //         res.send({
  //           success: false,
  //           data: data,
  //           error: "Genre Id not found",
  //         });
  //       } else {
  //         const category = data;
  //         //Finished 1nd query

  //         sql = mysql.format(
  //           "select title, author, description, cover_url from podcast_shows inner join podcast_show_categories psc on podcast_shows.id = psc.show_id where category_id = ?",
  //           [section_Id]
  //         );

  //       }
  //     });
  //   }
  // });
});

export default function registerGroupTwelve(app) {
  app.use("/groupTwelve", groupTwelveRouter);
}
