import express from "express";

const groupFourteenRouter = express.Router();

groupFourteenRouter.get("/", (req, res) => {
  res.send("Hello World");
});
export default function registerGroupFourteen(app) {
  app.use("/groupFourteen", groupFourteenRouter);
}
