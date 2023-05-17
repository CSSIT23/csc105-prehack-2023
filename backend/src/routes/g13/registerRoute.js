import express from "express";

const groupThirteenRouter = express.Router();

groupThirteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});
export default function registerGroupThirteen(app) {
  app.use("/groupThirteen", groupThirteenRouter);
}
