const http = require("http");
const userReq=require('./user1');
const server = http.createServer(userReq);



const port = 3001;
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});

