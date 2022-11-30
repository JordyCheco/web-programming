const data = require('../data/products.json');
const{connect}= require('./mongo');
function getProducts() {
    return data;
}

async function collection (){
    const client = await connect();
   return client.db('Chopiphy').collection('products');

}
async function getProducts() {
    const db = await collection();
    const data = db().find().toArray();
    return data;
}
async function getProduct(id) {
    const db = await collection();
    const data = await db.findOne({_id: id});
    return data.products.find(p => p.id === id);
}

module.exports = {
    collection,
    getProducts,
    getProduct
};