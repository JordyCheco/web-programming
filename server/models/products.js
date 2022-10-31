const data = require('../data/products.json');

function getProducts() {
  return data.products;
}

function getProductById(id) {
    return data.products.find(product => product.id === id);
}


module.exports = {
    getProducts,
    getProductById
}