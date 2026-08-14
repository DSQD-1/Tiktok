const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("TIKTOK SERVER WORKS");
});

app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    message: "Server works",
    directory: __dirname
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("TIKTOK SERVER STARTED");
});