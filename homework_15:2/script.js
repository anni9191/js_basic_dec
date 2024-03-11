let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

kitchenProducts.forEach(product => {
  Object.setPrototypeOf(product, Kitchen);
});

devicesProducts.forEach(product => {
  Object.setPrototypeOf(product, Devices);
});

cosmeticsProducts.forEach(product => {
  Object.setPrototypeOf(product, Cosmetics);
});

let grater = Object.create(Kitchen);
grater.type = 'grater';
grater.price = 10;

let pastryBag = Object.create(Kitchen);
pastryBag.type = 'pastry-bag';
pastryBag.price = 25;

let scale = Object.create(Kitchen);
scale.type = 'scale';
scale.price = 5;

let whisk = Object.create(Kitchen);
whisk.type = 'whisk';
whisk.price = 15;

let desktop = Object.create(Devices);
desktop.type = 'desktop';
desktop.price = [100, 1000];

let laptop = Object.create(Devices);
laptop.type = 'laptop';
laptop.price = [50, 1500];

let smartphone = Object.create(Devices);
smartphone.type = 'smartphone';
smartphone.price = [80, 2000];

let tablet = Object.create(Devices);
tablet.type = 'tablet';
tablet.price = [20, 1300];

let blush = Object.create(Cosmetics);
blush.type = 'blush';
blush.price = 100;

let eyeshadow = Object.create(Cosmetics);
eyeshadow.type = 'eyeshadow';
eyeshadow.price = 50;

let lipstick = Object.create(Cosmetics);
lipstick.type = 'lipstick';
lipstick.price = 80;

let nailPolish = Object.create(Cosmetics);
nailPolish.type = 'nail-polish';
nailPolish.price = 200;

let perfume = Object.create(Cosmetics);
perfume.type = 'perfume';
perfume.price = 300;


// Функция для отрисовки категории и товаров
function renderCategory(category, products) {
  console.log(`Category: ${category.category}`);
  products.forEach(product => {
      console.log(`Type: ${product.type}, Price: ${Array.isArray(product.price) ? product.price.join(' - ') : product.price}`);
  });
}

// Отрисовка всех категорий и товаров
renderCategory(Kitchen, kitchenProducts);
renderCategory(Devices, devicesProducts);
renderCategory(Cosmetics, cosmeticsProducts);
