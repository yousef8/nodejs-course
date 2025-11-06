import http from "http";
import fs from "fs";
import { readTodos } from "./db.js";
import { interpolate, generateTodosHTML } from "./utils.js";

const PORT = 8080;

console.log(import.meta.url);

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`request receieved for path ${url} with method ${method}`);

  if (url === "/" && method === "GET") {
    // load template
    const template = await fs.promises.readFile(
      "./templates/index.html",
      "utf-8"
    );

    // get todos from database
    const todos = await readTodos();
    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.completed).length;
    const pendingCount = totalCount - completedCount;
    const todosContent = generateTodosHTML(todos);

    // interpolate todos data into template
    const rendered = interpolate(template, {
      totalCount,
      completedCount,
      pendingCount,
      todosContent: todosContent,
    });

    // send the response
    res.writeHead(200, { "content-type": "text/html" });
    res.end(rendered);
    return;
  }

  if (url === "/sky" && method === "GET") {
    const image = await fs.promises.readFile("./public/image_of_sky.jpg");
    res.writeHead(200, { "content-type": "image/jpg" });
    res.end(image);
    return;
  }

  if (url === "/styles.css" && method === "GET") {
    const css = await fs.promises.readFile("./public/styles.css", "utf-8");
    res.writeHead(200, { "content-type": "text/css" });
    res.end(css);
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`\n🚀 Todo Server is running!`);
  console.log(`📍 Local:            http://localhost:${PORT}`);
  console.log(`\n💡 Press Ctrl+C to stop the server\n`);
});
