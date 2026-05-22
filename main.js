const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello World,I am a Node.js server! and this is a simple API" });
});
app.get("/health/ci-cd",(req,res)=>{
  res.json({message:"CI/CD pipeline is working fine!"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
