const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write("<h1>Home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Men</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>WoMen</h1>");
    return res.end();
  } else if (req.url === "/kid") {
    res.write("<h1>Kid</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Cart</h1>");
    return res.end();
  }
  res.write(`
      <html lang="en">
      <head>
        <title>Myntra</title>
      </head>
      <body>
        <head>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </nav>
        </head>
      </body>
      </html>
  `);
  res.end();

});

server.listen(3001, () => {
  console.log('server is running is http://localhost:3001')
})