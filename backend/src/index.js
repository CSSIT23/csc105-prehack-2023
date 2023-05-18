import express from "express";
import cors from "cors";

import registerGroupOne from "./routes/g1/registerRoute.js";
import registerGroupTwo from "./routes/g2/registerRoute.js";
import registerGroupThree from "./routes/g3/registerRoute.js";
import registerGroupFour from "./routes/g4/registerRoute.js";
import registerGroupFive from "./routes/g5/registerRoute.js";
import registerGroupSix from "./routes/g6/registerRoute.js";
import registerGroupSeven from "./routes/g7/registerRoute.js";
import registerGroupEight from "./routes/g8/registerRoute.js";
import registerGroupNine from "./routes/g9/registerRoute.js";
import registerGroupTen from "./routes/g10/registerRoute.js";
import registerGroupEleven from "./routes/g11/registerRoute.js";
import registerGroupTwelve from "./routes/g12/registerRoute.js";
import registerGroupThirteen from "./routes/g13/registerRoute.js";
import registerGroupFourteen from "./routes/g14/registerRoute.js";
import registerGroupFifteen from "./routes/g15/registerRoute.js";
import registerGroupSixteen from "./routes/g16/registerRoute.js";
import registerGroupSeventeen from "./routes/g17/registerRoute.js";
import initDatabase from "./database.js";

const app = express();
const port = 8000;

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.use(express.json());

initDatabase();

registerGroupOne(app);
registerGroupTwo(app);
registerGroupThree(app);
registerGroupFour(app);
registerGroupFive(app);
registerGroupSix(app);
registerGroupSeven(app);
registerGroupEight(app);
registerGroupNine(app);
registerGroupTen(app);
registerGroupEleven(app);
registerGroupTwelve(app);
registerGroupThirteen(app);
registerGroupFourteen(app);
registerGroupFifteen(app);
registerGroupSixteen(app);
registerGroupSeventeen(app);

app.listen(port, () => {
  console.log(`App is listenning on http://localhost:${port}`);
});
