import express from "express";

const groupSevenRouter = express.Router();

groupSevenRouter.get("/", (req, res) => {
  res.send("Hello World");
});
export default function registerGroupSeven(app) {
  app.use("/groupSeve", groupSevenRouter);
}
