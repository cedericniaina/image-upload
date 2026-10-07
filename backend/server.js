import express from "express";
import apiRoutes from "./routes/api.js";
import { config } from "dotenv";

config();
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
