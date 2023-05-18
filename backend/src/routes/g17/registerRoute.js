import express from "express";

const groupSeventeenRouter = express.Router();

groupSeventeenRouter.get("/", (req, res) => {
  res.send("Hello World");
});
export default function registerGroupSeventeen(app) {
  app.use("/groupSeventeen", groupSeventeenRouter);
}
