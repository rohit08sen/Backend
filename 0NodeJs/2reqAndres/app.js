const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.headers, req.url, req.method)
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<body><h1>jdjfka</h1></body>')
  res.write('</html>');
  res.end();
})

const port = 3001;
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`)
})