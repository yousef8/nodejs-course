import http from "http";

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.end("Hello, Todo HTTP Server!");
});

server.listen(PORT, () => {
  console.log(`\n🚀 Todo Server is running!`);
  console.log(`📍 Local:            http://localhost:${PORT}`);
  console.log(`\n💡 Press Ctrl+C to stop the server\n`);
});
