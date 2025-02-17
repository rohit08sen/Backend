const http = require('http');

function reqListener(req, res) {
  console.log(req);
  process.exit();
}

const server = http.createServer(reqListener);
const port = 3001;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})