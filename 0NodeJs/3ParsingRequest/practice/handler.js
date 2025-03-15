const sumRequest=require('./sum')
const requestHandler = ((req, res) => {
  console.log(req.url, req.method)
  if (req.url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
          <body>
            <h1>welcome to calculator</h1>
            <a href="/calculator">Go To CalCulator</a>
          </body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === '/calculator') {
    res.write(`
      <html>
        <head><title>Calculator</title></head>
          <body>
            <h1>Calculator</h1>
            <form action="/calculate-result" method="POST">
            <input type='text' placeholder='num1' name="first"/>
            <input type='text' placeholder='num2' name="second"/>
            <input type='submit' value="Sum"/>
            </form>
          </body>
      </html>
    `);
    return res.end();
    
  } else if (req.url.toLowerCase() === "/calculator-result" && req.method=='POST') {
    return sumRequest(req, res);
    
  }
    res.setHeader("Content-Type", "text/html");
   res.write(`
      <html>
        <head><title>Calculator</title></head>
          <body>
            <h1>Page not found 404</h1>
            <a href="/calculator">Go To Home</a>
          </body>
      </html>
    `);
   return res.end();
})

module.exports=requestHandler