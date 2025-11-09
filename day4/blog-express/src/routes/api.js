import { Router } from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(501);
  res.json({ message: "Under implementation" });
});

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.patch("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

export default router;
