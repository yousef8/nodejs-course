import { PostModel } from "../models/post.js";

export const getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.json({
    message: "posts fetched successfully",
    data: {
      posts,
    },
  });
};

export const createPost = async (req, res) => {
  const { title, content, date, tags } = req.body;
  const newPost = await PostModel.create({ title, content, date, tags });
  res.status(201).json({
    message: "Post created successfully",
    data: {
      post: newPost,
    },
  });
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const updatedPost = await PostModel.update(postId, req.body);
  if (!updatedPost) {
    res.status(404).json({ message: "Post not found" });
    return;
  }

  res.json({
    message: "Post updated successfully",
    data: { post: updatedPost },
  });
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  await PostModel.delete(postId);
  res.status(204).json({ message: `Deleted post ${postId} successfully` });
};
