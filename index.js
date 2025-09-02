const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Express running via Jenkins & ECR!");
});
app.get("/health", (req, res) => {
  res.send("health1");
});
app.get("/health2", (req, res) => {
  res.send("health2");
});
app.get("/health3", (req, res) => {
  res.send("health3");
});
app.get("/health4", (req, res) => {
  res.send("health4");
});
app.get("/health5", (req, res) => {
  res.send("health5");
});
app.get("/health6", (req, res) => {
  res.send("health5");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


