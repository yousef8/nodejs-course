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
}

export const PostModel = new Post(__dirname);
