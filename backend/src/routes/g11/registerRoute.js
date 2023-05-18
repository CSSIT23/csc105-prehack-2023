import express from "express";

const groupElevenRouter = express.Router();

groupElevenRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupEleven(app) {
  app.use("/groupEleven", groupElevenRouter);
}
