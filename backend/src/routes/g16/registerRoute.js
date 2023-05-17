import express from "express";

const groupSixteenRouter = express.Router();

groupSixteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupSixteen(app) {
  app.use("/groupSixteen", groupSixteenRouter);
}
