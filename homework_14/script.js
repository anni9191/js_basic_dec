// Крок 1: Створюємо об'єкти-прототипи для кожної категорії
let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

// Крок 2: Додаємо об'єкти-прототипи до кожного товару
let kitchenProducts = [
  {
    type: 'grater',
    price: 10,
  },
  {
    type: 'pastry-bag',
    price: 25,
  },
  {
    type: 'scale',
    price: 5,
  },
  {
    type: 'whisk',
    price: 15,
  },
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000],
  },
  {
    type: 'laptop',
    price: [50, 1500],
  },
  {
    type: 'smartphone',
    price: [80, 2000],
  },
  {
    type: 'tablet',
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100,
  },
  {
    type: 'eyeshadow',
    price: 50,
  },
  {
    type: 'lipstick',
    price: 80,
  },
  {
    type: 'nail-polish',
    price: 200,
  },
  {
    type: 'perfume',
    price: 300,
  },
];

kitchenProducts.forEach(product => {
  let newItem = Object.create(Kitchen);
  Object.assign(newItem, product);
  console.log(newItem);
});

devicesProducts.forEach(product => {
  let newItem = Object.create(Devices);
  Object.assign(newItem, product);
  console.log(newItem);
});

cosmeticsProducts.forEach(product => {
  let newItem = Object.create(Cosmetics);
  Object.assign(newItem, product);
  console.log(newItem);
});

