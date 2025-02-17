const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.headers, req.url, req.method)

  if (req.url === '/') {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body><h1>Home</h1></body>");
    res.write("</html>");
    return res.end();//once response.end is called then no more headers can be added for that return is used
  } else if (req.url === '/about') {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body><h1>about</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body><h1>contact</h1></body>");
    res.write("</html>");
    return res.end();
  }
  
})

const port = 3001;
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`)
})