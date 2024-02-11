function main(a = 2, b = 3, c) {
    const resultSum = sum(a, b);
  
    if (c && typeof c === 'function') {
      return c(resultSum);
    } else {
      return resultSum;
    }
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  // Примеры использования:
  const result1 = main(); // Результат: 5, так как a и b равны 2 и 3 по умолчанию
  const result2 = main(4, 5); // Результат: 9, так как переданы значения a=4 и b=5
  const result3 = main(1, 2, function(result) {
    return result * 2;
  });
  
  // Результат: 6, так как c - это функция, которая умножает результат sum (1 + 2) на 2
  console.log(result1);
  console.log(result2);
  console.log(result3);
  