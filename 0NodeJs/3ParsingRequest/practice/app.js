const http = require('http')
const requestHandler= require('./handler')
const server = http.createServer(requestHandler);

server.listen(3001, () => {
  console.log("Server is Running... http://localhost:3001");
})