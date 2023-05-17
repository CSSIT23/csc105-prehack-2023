import express from "express";

const groupNineRouter = express.Router();

groupNineRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupNine(app) {
  app.use("/groupNine", groupNineRouter);
}
