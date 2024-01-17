// Отримуємо три числа від користувача через prompt
var number1 = parseFloat(prompt("Please enter first number:"));
var number2 = parseFloat(prompt("Please enter second number:"));
var number3 = parseFloat(prompt("Please enter third number:"));

// Перевірка, чи користувач ввів числа
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Please enter numbers");
} else {
    // Показуємо через алерт середнє арифметичне цих чисел
    var average = (number1 + number2 + number3) / 3;

    // Показуємо результат користувачеві
    alert("Arithmetic average of entered numbers: " + average);
}