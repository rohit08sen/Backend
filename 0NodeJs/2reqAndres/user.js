const http = require('http')
const fs=require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method == "POST") {
    fs.writeFileSync('user.text', 'Rohit')
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});
