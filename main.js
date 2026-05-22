const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello World,I am a Node.js server! and this is a simple API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
