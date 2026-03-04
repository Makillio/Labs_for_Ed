// Задание 1. Проверка числа на простоту
alert("Задание 1. Проверка числа на простоту.");
let n1 = Number(prompt("Введите целое число n:"));
if (!Number.isNaN(n1) && Number.isInteger(n1)) {
  let isPrime = true;
  if (n1 <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < n1; i++) {
      if (n1 % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  alert(isPrime ? "Число простое." : "Число не простое.");
} else {
  alert("Ошибка: введите целое число.");
}

// Задание 2. Автоморфные числа на отрезке [a, b]
alert("Задание 2. Автоморфные числа на отрезке [a, b].");
let a2 = Number(prompt("Введите левую границу a:"));
let b2 = Number(prompt("Введите правую границу b:"));
if (!Number.isNaN(a2) && !Number.isNaN(b2) && Number.isInteger(a2) && Number.isInteger(b2) && a2 <= b2) {
  let result2 = "";
  for (let i = a2; i <= b2; i++) {
    let square = i * i;
    let strI = String(i);
    let strSquare = String(square);
    if (strSquare.endsWith(strI)) {
      result2 += i + " ";
    }
  }
  if (result2 === "") {
    alert("На отрезке нет автоморфных чисел.");
  } else {
    alert("Автоморфные числа: " + result2);
  }
} else {
  alert("Ошибка: введите корректные целые числа (a <= b).");
}

// Задание 3. Проверка числа на совершенство
alert("Задание 3. Совершенное число.");
let x3 = Number(prompt("Введите целое положительное число x:"));
if (!Number.isNaN(x3) && Number.isInteger(x3) && x3 > 0) {
  let sum3 = 0;
  for (let i = 1; i < x3; i++) {
    if (x3 % i === 0) {
      sum3 += i;
    }
  }
  alert(sum3 === x3 ? "Число совершенное." : "Число не совершенное.");
} else {
  alert("Ошибка: введите положительное целое число.");
}

// Задание 4. Проверка числа на избыточность (мой вариант)
alert("Задание 4. Избыточное число.");
let x4 = Number(prompt("Введите целое положительное число x:"));
if (!Number.isNaN(x4) && Number.isInteger(x4) && x4 > 0) {
  let sum4 = 0;
  for (let i = 1; i < x4; i++) {
    if (x4 % i === 0) {
      sum4 += i;
    }
  }
  alert(sum4 > x4 ? "Число избыточное." : "Число не избыточное.");
} else {
  alert("Ошибка: введите положительное целое число.");
}

// Задание 5. Проверка числа на негипотенузность
alert("Задание 5. Негипотенузное число.");
let c5 = Number(prompt("Введите целое положительное число c:"));
if (!Number.isNaN(c5) && Number.isInteger(c5) && c5 > 0) {
  let isHypotenuse = false;
  for (let a = 1; a < c5; a++) {
    for (let b = 1; b < c5; b++) {
      if (a * a + b * b === c5 * c5) {
        isHypotenuse = true;
        break;
      }
    }
    if (isHypotenuse) break;
  }
  alert(isHypotenuse ? "Число гипотенузное (не подходит)." : "Число негипотенузное.");
} else {
  alert("Ошибка: введите положительное целое число.");
}

// Задание 6. Числа Армстронга на отрезке [a, b] (без Math.pow)
alert("Задание 6. Числа Армстронга.");
let a6 = Number(prompt("Введите левую границу a:"));
let b6 = Number(prompt("Введите правую границу b:"));
if (!Number.isNaN(a6) && !Number.isNaN(b6) && Number.isInteger(a6) && Number.isInteger(b6) && a6 <= b6) {
  let result6 = "";
  for (let num = a6; num <= b6; num++) {
    let strNum = String(num);
    let power = strNum.length;
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
      let digit = Number(strNum[i]);
      let powered = 1;
      for (let j = 0; j < power; j++) {
        powered *= digit;
      }
      sum += powered;
    }
    if (sum === num) {
      result6 += num + " ";
    }
  }
  if (result6 === "") {
    alert("На отрезке нет чисел Армстронга.");
  } else {
    alert("Числа Армстронга: " + result6);
  }
} else {
  alert("Ошибка: введите корректные целые числа (a <= b).");
}

// Задание 7. Первые n пифагоровых троек
alert("Задание 7. Пифагоровы тройки.");
let n7 = Number(prompt("Введите количество троек n:"));
if (!Number.isNaN(n7) && Number.isInteger(n7) && n7 > 0) {
  let count7 = 0;
  let c7 = 1;
  let result7 = "";
  while (count7 < n7) {
    for (let a = 1; a < c7; a++) {
      for (let b = a; b < c7; b++) {
        if (a * a + b * b === c7 * c7) {
          result7 += "(" + a + ", " + b + ", " + c7 + ") ";
          count7++;
          if (count7 >= n7) break;
        }
      }
      if (count7 >= n7) break;
    }
    c7++;
  }
  alert("Первые " + n7 + " пифагоровых троек: " + result7);
} else {
  alert("Ошибка: введите положительное целое число.");
}
