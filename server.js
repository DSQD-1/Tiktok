const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, "public");
const indexFile = path.join(publicFolder, "index.html");

console.log("Project folder:", __dirname);
console.log("Public folder:", publicFolder);
console.log("Index exists:", fs.existsSync(indexFile));

app.use(express.json());

app.use(express.static(publicFolder));

app.get("/", (req, res) => {
  if (!fs.existsSync(indexFile)) {
    return res.status(500).send("index.html not found");
  }

  res.sendFile(indexFile);
});

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    app: "TikTok",
    indexExists: fs.existsSync(indexFile)
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TikTok server started on port ${PORT}`);
});