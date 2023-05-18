import express from "express";

const groupSixRouter = express.Router();

groupSixRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupSix(app) {
  app.use("/groupSix", groupSixRouter);
}
