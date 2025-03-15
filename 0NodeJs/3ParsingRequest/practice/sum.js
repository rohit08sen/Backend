const sumRequest = (req, res) => {
  const body=[]
  req.on('data', chunk => {
    body.push(chunk)
  });
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const param = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(param);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
  })
}
module.exports=sumRequest