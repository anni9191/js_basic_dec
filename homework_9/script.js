// Функция для проверки, является ли число простым
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Запрос размерности массива у пользователя
const length = parseInt(prompt("Введите размерность массива:"));

// Создание и заполнение массива arrA рандомными числами
const arrA = [];
for (let i = 0; i < length; i++) {
    arrA.push(Math.floor(Math.random() * 100) + 1); // Здесь 100 - максимальное значение случайного числа, можно изменить по необходимости
}

// Фильтрация простых чисел и запись их в массив arrB
const arrB = arrA.filter(num => isPrime(num));

// Поиск минимального и максимального числа в массиве arrB
const minNumber = Math.min(...arrB);
const maxNumber = Math.max(...arrB);

// Вывод результатов
console.log("Массив arrA:", arrA);
console.log("Массив arrB (простые числа):", arrB);
console.log("Минимальное простое число в arrB:", minNumber);