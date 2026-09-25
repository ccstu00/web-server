import express from "express";

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const wishlist = [];

app.post('/wishlist', (req, res) => {
  const { item, note } = req.body;
    if (!title || !body) {
    res.status(400).json({ error: 'title and body are required' });
    return;
  }
  const newItem = { item, note };
  wishlist.push(newItem);
  res.status(201).json(newItem);

    
});

app.post('/recommended', (req, res) => {
  const { viral, foryou } = req.body;
    if (!title || !body) {
    res.status(400).json({ error: 'title and body are required' });
    return;
  }
  const newItem = { item, note };
  wishlist.push(newItem);
  res.status(201).json(newItem);
});


app.get("/", (req, res) => {
  res.send("hi, my name is alice and i like to travel!");
});

app.get("contact", (req, res) => {
  res.send("alice@gmail.com");
});

app.get("/portfolio", (req, res) => {
  res.send("IMAGES collection HERE");
});

//Unit 02: filtering with query strings
//use git pull to pull all the projects from the repo
//git status to check what isnt/is in queue to upload to repo
app.get("/projects", (req, res) => {
  const tag = req.query.tag;
  const result = projects.filter((project) => project.tag === tag);
  res.send(result);
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
