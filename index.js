import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));

const port = 9000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({messgae: "hello from express"});
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/pehel", (req, res) => {
  res.render("pehel.ejs");
});

app.get("/sahaayta", (req, res) => {
  res.render("sahaayta.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});