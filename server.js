import express from "express";
//new line for path:
import { join } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

//two lines that make templates work:
app.set("view engine", "ejs"); //1) which engine to hand templates to
app.set("views", "views"); //2) which folder to look in

app.use(express.static("public"));
app.get("/entries", (req, res) => {
  const entries = [
    { title: "First note", body: "Notes from the first session." },
    { title: "Second note", body: "Notes from the second session." },
    { title: "Third note", body: "Notes from the third session." },
  ];
  res.render("entries", { title: "My Notes", entries });
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//
