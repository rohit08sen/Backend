
const fs=require('fs')

const userrequestHandler=((req, res) => {
  console.log(req.url,req.method)
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
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);//all the chunks are now store in body
    });//if data ata hai mujhe batao chunk

    req.on('end', () => {
      //iff chunk aana end hua
      const fullBody = Buffer.concat(body).toString(); //convert to original data
      console.log(fullBody); //username=rohit&gender=male o/p

      const params = new URLSearchParams(fullBody); //key value pair mein todega basically decode
      // const bodyObj = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObj[key] = value;
      // }

      const bodyObj = Object.fromEntries(params);

      console.log(bodyObj); //{ username: 'rohit', gender: 'female' }
      fs.writeFileSync("user.text", JSON.stringify(bodyObj));
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    
  }
});


module.exports = userrequestHandler;
