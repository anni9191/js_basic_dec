// 1. Запрашиваем через prompt значение переменной a
var a = parseInt(prompt("Please enter value a:"));

// 2. Запрашиваем через prompt значение переменной b, которое должно быть больше введенного a
var b = parseInt(prompt("Please enter value b (should be more than value a):"));

// Проверяю что значение b больше значения а
if (isNaN(a) || isNaN(b) || b <= a) {
    alert("Please enter correct values a and b.");
} else {
    // 3. Запрашиваем через prompt значение переменной h, которая должна быть строго больше 0
    var h = parseInt(prompt("Please enter value h (more than 0):"));

    // Проверка что значение h больше 0
    if (isNaN(h) || h <= 0) {
        alert("Please enter correct value h.");
    } else {
        // 4.Запускаем цикл перебора чисел от a до b включительно, с шагом h. 
        // Для каждого числа в переборе считаем факториал и прибавляем его к переменной sumOfFactorials.
        var sumOfFactorials = 0;

        for (var i = a; i <= b; i += h) {
            sumOfFactorials += factorial(i);
        }

        // Выводим результат юзеру
        alert("The sum of factorials of numbers from " + a + " to " + b + " with the step " + h + " is equal to " + sumOfFactorials);
    }
}

// Функция для вычисления факториала числа 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}