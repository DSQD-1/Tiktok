const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, "public");

app.use(express.json());

app.use(express.static(publicFolder));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicFolder, "index.html"));
});

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    app: "TikTok"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TikTok server started on port ${PORT}`);
});