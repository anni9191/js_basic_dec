let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

kitchenProducts.forEach(product => {
  let newProduct = Object.create(Kitchen);
  newProduct.type = product.type;
  newProduct.price = product.price;
  Kitchen[product.type] = newProduct;
});

devicesProducts.forEach(product => {
  let newProduct = Object.create(Devices);
  newProduct.type = product.type;
  newProduct.price = product.price;
  Devices[product.type] = newProduct;
});

cosmeticsProducts.forEach(product => {
  let newProduct = Object.create(Cosmetics);
  newProduct.type = product.type;
  newProduct.price = product.price;
  Cosmetics[product.type] = newProduct;
}); 