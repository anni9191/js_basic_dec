// Запитую у користувача перше число
var number1 = prompt("Please enter first number");

// Запитую у користувача друге число
var number2 = prompt("Please enter second number");

// Перетворюю введені значення на числа
number1 = parseFloat(number1);
number2 = parseFloat(number2);

// Виконання операцій додавання, віднімання, множення та поділу двох чисел та виведення результатів
var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;

// Підготувлюю рядок для виведення
var resultString = number1 + " + " + number2 + " = " + sum + "\n" +
                   number1 + " - " + number2 + " = " + difference + "\n" +
                   number1 + " * " + number2 + " = " + product + "\n" +
                   number1 + " / " + number2 + " = " + quotient;

// Вивожду повідомлення алертом з результатом
alert(resultString);
