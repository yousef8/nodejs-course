import express from "express";
import path from "path";
import url from "url";
import viewRoutes from "./routes/views.js";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = 3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());

app.use("/", viewRoutes);
app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
