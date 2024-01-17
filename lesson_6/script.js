// Изначальная сумма очков
var totalPoints = 0;

// Вопросы и правильные ответы на них
var questions = [
    { text: 'Сколько будет 2+2?', answer: '4' },
    { text: 'Солнце встает на востоке?', answer: 'да' },
    { text: 'Сколько будет 5 / 0?', answer: 'на 0 делить нельзя ' },
    { text: 'Какого цвета небо?', answer: 'голубого' },
    { text: 'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.', answer: '42' }
];

// Проходим по всем вопросам
for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i].text);

    // Проверяем ответ и насчитываем очки
    if (userAnswer !== null) {
        if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            totalPoints += 10;
        } else {
            totalPoints += 0;
        }
    } else {
        totalPoints += 0;
    }
}

// Выводим результат при помощи алерт
alert('Ваш результат: ' + totalPoints + ' очков.');