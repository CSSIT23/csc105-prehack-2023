import express from "express";

const groupFifteenRouter = express.Router();

groupFifteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupFifteen(app) {
  app.use("/groupFifteen", groupFifteenRouter);
}
