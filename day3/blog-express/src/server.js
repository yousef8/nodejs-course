import express from "express";
import { PostModel } from "./models/post.js";
import path from "path";
import url from "url";

const app = express();
const PORT = 3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", async (req, res) => {
  const posts = await PostModel.find();
  res.render("index", {
    title: "Blog Home",
    posts: posts,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
