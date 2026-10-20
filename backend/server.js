/* eslint-disable no-undef */
import express from "express";
import apiRoutes from "./routes/api.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;
const frontend_url = process.env.FRONTEND_ADDRESS;

app.use(
  cors({
    origin: frontend_url,
  }),
);
app.use(express.static("public"));
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use("/api", apiRoutes);

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

export default app;
