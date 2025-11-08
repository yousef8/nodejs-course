import fs from "fs/promises";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

class Post {
  constructor(parentDir) {
    this.filePath = path.join(parentDir, "../../data/posts.json");
  }

  async find() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading posts:", error);
      return [];
    }
  }

  async create(postData) {
    try {
      const posts = await this.find();
      const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        ...postData,
      };
      posts.push(newPost);
      await fs.writeFile(this.filePath, JSON.stringify(posts, null, 2));
      return newPost;
    } catch (error) {
      console.error("Error creating post:", error);
      return null;
    }
  }

  async update(postId, postData) {
    try {
      const posts = await this.find();
      const post = posts.find((p) => p.id === parseInt(postId));

      if (!post) {
        return null;
      }

      Object.assign(post, postData);
      await fs.writeFile(this.filePath, JSON.stringify(posts, null, 2));
      return post;
    } catch (error) {
      console.error("Error updating post:", error);
      return null;
    }
  }

  async delete(postId) {
    try {
      const posts = await this.find();
      const filteredPosts = posts.filter((p) => p.id !== parseInt(postId));
      await fs.writeFile(this.filePath, JSON.stringify(filteredPosts, null, 2));
      return;
    } catch (error) {
      console.error("Error deleting post:", error);
      return null;
    }
  }
}

export const PostModel = new Post(__dirname);
