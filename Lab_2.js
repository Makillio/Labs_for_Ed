// Задание 1: произведение двух максимальных из трёх чисел
function func1(a, b, c) {
  let max1, max2;
  if (a >= b && a >= c) {
    max1 = a;
    max2 = (b >= c) ? b : c;
  } else if (b >= a && b >= c) {
    max1 = b;
    max2 = (a >= c) ? a : c;
  } else {
    max1 = c;
    max2 = (a >= b) ? a : b;
  }
  return max1 * max2;
}

// Задание 2: функция с параметрами имя и звание (по умолчанию "рядовой")
function func2(name, rank = "рядовой") {
  return "Здравствуйте, " + rank + " " + name + "!";
}

// Задание 3: функция, вызывающая переданное функциональное выражение
function func3(fn, param1, param2) {
  return fn(param1, param2);
}

// Задание 4: функция, возвращающая стрелочное выражение (квадрат для чётных, куб для нечётных)
function func4(num) {
  if (num % 2 === 0) {
    return (x) => x * x;
  } else {
    return (x) => x * x * x;
  }
}

// Задание 5: рекурсивная функция для факториала
function func5(n) {
  if (n <= 1) return 1;
  return n * func5(n - 1);
}

// Демонстрация работы

// Задание 1
alert("Задание 1: произведение двух максимальных чисел");
let p1 = Number(prompt("Введите первое число:"));
let p2 = Number(prompt("Введите второе число:"));
let p3 = Number(prompt("Введите третье число:"));
if (!Number.isNaN(p1) && !Number.isNaN(p2) && !Number.isNaN(p3)) {
  alert("Результат: " + func1(p1, p2, p3));
} else {
  alert("Ошибка ввода.");
}

// Задание 2
alert("Задание 2: приветствие");
let name1 = prompt("Введите имя:");
alert(func2(name1)); // со званием по умолчанию
let name2 = prompt("Введите имя для вызова с двумя параметрами:");
let rank2 = prompt("Введите звание:");
alert(func2(name2, rank2));

// Задание 3
alert("Задание 3: вызов переданной функции");
function sum(a, b) {
  return a + b;
}
let a3 = Number(prompt("Введите первое число для суммы:"));
let b3 = Number(prompt("Введите второе число для суммы:"));
if (!Number.isNaN(a3) && !Number.isNaN(b3)) {
  let res = func3(sum, a3, b3);
  alert("Сумма: " + res);
} else {
  alert("Ошибка ввода.");
}

// Задание 4
alert("Задание 4: получение функции возведения в степень");
let num4 = Number(prompt("Введите целое число (чётное/нечётное):"));
if (!Number.isNaN(num4) && Number.isInteger(num4)) {
  let powerFn = func4(num4);
  let arg4 = Number(prompt("Введите число, которое будем возводить:"));
  if (!Number.isNaN(arg4)) {
    alert("Результат: " + powerFn(arg4));
  } else {
    alert("Ошибка ввода.");
  }
} else {
  alert("Ошибка ввода.");
}

// Задание 5
alert("Задание 5: рекурсивный факториал");
let n5 = Number(prompt("Введите целое неотрицательное число:"));
if (!Number.isNaN(n5) && Number.isInteger(n5) && n5 >= 0) {
  alert("Факториал " + n5 + " = " + func5(n5));
} else {
  alert("Ошибка ввода.");
}
