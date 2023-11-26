// Проверяем, является ли число целым используя побитовые операторы
function isInteger(n) {
return (n ^ 0) === n;
}

// Возвращаем массив четных чисел от 2 до 20 включительно
function even() {
var arr =[];
for (var i = 2; i <= 20; i += 2) {
arr.push(i);
}
return arr;
}

// Считаем сумму чисел до заданного используя цикл
function sumTo(n) {
var sum = 0;
for (var i = 1; i <= n; i++) {
sum += i;
}
return sum;
}

// Считаем сумму чисел до заданного используя рекурсию
function recSumTo(n) {
if (n === 1) {
return 1;
}
return n + recSumTo(n - 1);
}

// Считаем факториал заданного числа
function factorial(n) {
if (n === 0) {
return 1;
}
return n * factorial(n - 1);
}

// Определяем, является ли число двойкой, возведенной в степень
function isBinary(n) {
if (n === 0) {
return false;
}
while (n !== 1) {
if (n % 2 !== 0) {
return false;
}
n = n / 2;
}
return true;
}

// Находим N-е число Фибоначчи
function fibonacci(n) {
var fib = [0, 1];
for (var i = 2; i <= n; i++) {
fib[i] = fib[i - 1] + fib[i - 2];
}
return fib[n];
}

// Создаем функцию операции, возвращающую результат операции или начальное значение
function getOperationFn(initialValue, operatorFn) {
return function (newValue) {
if (operatorFn) {
return operatorFn(initialValue, newValue);
} else {
return initialValue;
}
};
}

// Создаем генератор арифметической последовательности
function sequence(start, step) {
start = start || 0;
step = step || 1;
return function () {
var result = start;
start += step;
return result;
};
}

// Сравниваем два объекта на равенство (по содержанию)
function deepEqual(firstObject, secondObject) {
if (firstObject === secondObject) {
return true;
}
if (typeof firstObject !== "object" || typeof secondObject !== "object") {
return false;
}
var keysFirst = Object.keys(firstObject);
var keysSecond = Object.keys(secondObject);
if (keysFirst.length !== keysSecond.length) {
return false;
}
for (var key of keysFirst) {
if (!keysSecond.includes(key)) {
return false;
}
if (!deepEqual(firstObject[key], secondObject[key])) {
return false;
}
}
return true;
}

module.exports = {
isInteger,
even,
sumTo,
recSumTo,
factorial,
isBinary,
fibonacci,
getOperationFn,
sequence,
deepEqual,
};
console.log("Тест 1");
console.log(isInteger(2));
console.log("Тест 2");
var arr = even();
console.log(arr);
console.log("Тест 3");
console.log(sumTo(5));
console.log("Тест 4");
console.log(recSumTo(10));
console.log("Тест 5");
console.log(factorial(4));
console.log("Тест 6");
console.log(isBinary(13));
console.log("Тест 7");
console.log(fibonacci(6));
console.log("Тест 8");
var multiply = function(a,b) {return a-b;};
var operation=getOperationFn(2, multiply);
console.log(operation(7))
console.log("Тест 9");
var seq = sequence(1,2);
console.log(seq());
console.log(seq());
console.log("Тест 10");
var obj1 = {a: 1, b: 2};
var obj2 = {a: 1, b: 2};
console.log(deepEqual(obj1, obj2));
