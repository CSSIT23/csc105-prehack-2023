import express from "express";

const groupFiveRouter = express.Router();

groupFiveRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupFive(app) {
  app.use("/groupFive", groupFiveRouter);
}
