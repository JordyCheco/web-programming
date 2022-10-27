const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('YOUR BOY');
})

app.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
 
const fatArrow = x => x* 2; // by being a fat arrow function, it automatically returns the value