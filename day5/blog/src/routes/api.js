import { Router } from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import { validateBody } from "../middlewares/validateBody.js";
import { register, login } from "../controllers/user.js";
import { authenticateUser } from "../middlewares/auth.js";
import * as z from "zod";

const router = Router();

router.get("/", (req, res) => {
  res.status(501);
  res.json({ message: "Under implementation" });
});

router.get("/posts", getPosts);

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  tags: z.array(z.string()).optional().default([]),
  createdAt: z.date().optional().default(new Date()),
});

const updatePostSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
});

router.post("/posts", authenticateUser, validateBody(postSchema), createPost);

router.patch("/posts/:id", validateBody(updatePostSchema), updatePost);

router.delete("/posts/:id", deletePost);

router.post("/register", register);

router.post("/login", login);

export default router;
