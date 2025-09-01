const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Express running via Jenkins & ECR!");
});
app.get("/health", (req, res) => {
  res.send("Everything is fine here");
});
app.get("/health2", (req, res) => {
  res.send("Everything is fine here");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
