// Create web server
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});