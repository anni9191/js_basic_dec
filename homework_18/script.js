// Сутність "Людина"
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

// Сутність "Автомобіль"
class Car {
  constructor(brand, model, year, plateNumber, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plateNumber = plateNumber;
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(`Власник автомобіля ${brand} ${model} повинен бути старше 18 років.`);
    }
  }

  displayInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.plateNumber}`);
    console.log('Інформація про власника:');
    this.owner.displayInfo();
  }
}

// Демонстрація
const person1 = new Person('Aнтоніо', 25);
const person2 = new Person('Марлена', 17);
const car1 = new Car('Toyota', 'Camry', 2018, 'BC1234AA', person1);
const car2 = new Car('BMW', 'X5', 2020, 'AB5678BC', person2);

car1.displayInfo();
car2.displayInfo();