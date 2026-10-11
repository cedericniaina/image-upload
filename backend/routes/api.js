import express from "express";
import multer from "multer";

const apiRoutes = express.Router();
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

apiRoutes.get("/", (req, res) => {
  res.send("HELLO WORLD");
  console.log("TEST");
});

apiRoutes.post("/upload", upload.single("image"), (req, res) => {
  const fileName = req.file.originalname;
  const files = `/uploads/` + fileName;
  // res.json({
  //   url: `/uploads/` + Date.now() + "-" + req.file.originalname,
  // });
  // console.log(res.json());
  res.json({
    fileUrl: files,
    fileName: req.file.originalname,
    fileDownload: "/api/download/" + fileName,
  });
});

apiRoutes.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  console.log("DOWNLOADING");
  console.log("public/uploads/" + filename);
  res.download("public/uploads/" + filename);
});
export default apiRoutes;
