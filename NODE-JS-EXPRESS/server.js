const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to my backend");
  } 
  
  else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.end("About this backend");
  } 
  
  else if (req.method === "GET" && req.url === "/products") {
    res.statusCode = 200;
    res.end("Products endpoint");
  } 
  
  else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});