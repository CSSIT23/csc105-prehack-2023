import express from "express";

const groupTwelveRouter = express.Router();

groupTwelveRouter.get("/", (req, res) => {
  res.send("Hello World");
});
export default function registerGroupTwelve(app) {
  app.use("/groupTwelve", groupTwelveRouter);
}
