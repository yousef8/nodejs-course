import express, { Router } from "express";
import { PostModel } from "../models/post.js";

const router = Router();

router.get("/", async (req, res) => {
  const posts = await PostModel.find();
  res.render("index", {
    title: "Blog Home",
    posts: posts,
  });
});

export default router;
