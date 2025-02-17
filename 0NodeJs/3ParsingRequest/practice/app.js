const http = require('http')

const server = http.createServer();

server.listen(3001, () => {
  console.log("Server is Running... http://localhost:3001");
})