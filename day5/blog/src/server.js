import express from "express";
import path from "path";
import url from "url";
import viewRoutes from "./routes/views.js";
import apiRoutes from "./routes/api.js";
import mongoose from "mongoose";
import morgan from "morgan";
import { handleError } from "./middlewares/errorHandler.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());

app.use(morgan("dev"));

// Handmade logging middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.use("/", viewRoutes);
app.use("/api/v1", apiRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  mongoose.connection.once("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.once("error", (err) => {
    console.error("MongoDB connection error:", err.message);
  });
});
