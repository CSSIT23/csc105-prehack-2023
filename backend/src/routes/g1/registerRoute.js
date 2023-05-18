import express from "express";

const groupOneRouter = express.Router();

groupOneRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupOne(app) {
  app.use("/groupOne", groupOneRouter);
}
