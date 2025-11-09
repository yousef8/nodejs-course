import express from "express";
import path from "path";
import url from "url";
import viewRoutes from "./routes/views.js";
import apiRoutes from "./routes/api.js";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const MONGO_URI = "mongodb://localhost:27017/blogDB";

mongoose.connect(MONGO_URI);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());

app.use("/", viewRoutes);
app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  mongoose.connection.once("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.once("error", (err) => {
    console.error("MongoDB connection error:", err.message);
  });
});
