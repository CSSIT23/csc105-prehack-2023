
import express from "express"


const groupFifteenRouter = express.Router();

groupFifteenRouter.get("/track/:trackId", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupFifteen(app) {
  app.use("/groupFifteen", groupFifteenRouter);
}
