import express from "express";

const app = express(); //not sure what 'implicitly discloses version' means lol

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
