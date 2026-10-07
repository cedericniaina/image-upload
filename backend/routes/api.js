import express from "express";
import multer from "multer";

const apiRoutes = express.Router();
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

apiRoutes.get("/", (req, res) => {
  res.send("HELLO WORLD");
  console.log("TEST");
});

apiRoutes.post("/upload", upload.single("image"), (req, res) => {
  console.log("EXECUTION");
  console.log(`/uploads/` + Date.now() + "_" + req.file.originalname);
  // res.json({
  //   url: `/uploads/` + Date.now() + "-" + req.file.originalname,
  // });
  res.sendStatus(200);
});

apiRoutes.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  console.log("DOWNLOADING");
  console.log("public/uploads/" + filename);
  res.download("public/uploads/" + filename);
});
export default apiRoutes;
