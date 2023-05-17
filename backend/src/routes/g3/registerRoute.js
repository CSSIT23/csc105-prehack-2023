import express from "express";

const groupThreeRouter = express.Router();

groupThreeRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupThree(app) {
  app.use("/groupThree", groupThreeRouter);
}
