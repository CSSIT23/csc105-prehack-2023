import express from "express";

const groupSixteenRouter = express.Router();

groupSixteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});

groupSixteenRouter.get("/concert/:concertId", (req, res) => {
  const concertid = req.query.concertId;

  connection.query(`SELECT * FROM concert_tickets WHERE id = ${concertid}`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})

export default function registerGroupSixteen(app) {
  app.use("/groupSixteen", groupSixteenRouter);
}
