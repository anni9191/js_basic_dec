function pow(num, degree) {
  // Базовий випадок: якщо ступінь 0, повертаємо 1
  if (degree === 0) {
      return 1;
  }

  // Рекурсивний випадок: зводимо число до ступеня - 1 та множимо на саме число
  return num * pow(num, degree - 1);
}

// Приклад виклику функції
var result = pow(2, 3); // 2^3 = 8
console.log(result); // Виведе 8