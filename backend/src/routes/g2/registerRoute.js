import express from "express";

const groupTwoRouter = express.Router();

groupTwoRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupTwo(app) {
  app.use("/groupTwo", groupTwoRouter);
}
