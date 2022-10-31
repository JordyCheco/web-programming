const express = require('express');
const app = express();

const productsController = require('./controllers/products');

const hostname = '127.0.0.1';
const port = 3000;

app
.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})
.use('api/products',productsController);

app.listen(port, hostname, () =>  
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
 
const fatArrow = x => x* 2; // by being a fat arrow function, it automatically returns the value