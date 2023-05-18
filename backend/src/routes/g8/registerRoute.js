import express from "express";

const groupEightRouter = express.Router();

groupEightRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupEight(app) {
  app.use("/groupEight", groupEightRouter);
}
