import express from "express";

const groupTenRouter = express.Router();

groupTenRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupTen(app) {
  app.use("/groupTen", groupTenRouter);
}
