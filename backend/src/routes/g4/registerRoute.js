import express from "express";

const groupFourRouter = express.Router();

groupFourRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupFour(app) {
  app.use("/groupFour", groupFourRouter);
}
