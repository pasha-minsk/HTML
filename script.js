// современный режим
"use strict"
// alert(3+3+73);
// alert("Сейчас будет ошибка");
// [1, 2].forEach(alert);
// console.log('Hello world!');
// let message;
// message="Hello";
// console. log(message);
// let message="Hello";


// let message="Hello";// тип данных namber это числа до (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел
// message=34567;

// если числа больше/меньше вышенаписанных, то этот тип называется bigint. поддерживается Firefox, Chrome, Edge и Safari, но не поддерживается в IE.
// Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:
// const bigInt = 1234567890123456789012345678901234567890n; 
// alert(message);

// тип данных infinity это бесконечность:
// console. log(1/0);

// NaN это тип данных вычеслительной ошибки, например:
// console. log("htpp"/32);

// !!Обратные кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:
// let name="Иван";
// alert (`Привет, ${name}`);
// alert (`результат: ${1+6}`);

// В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках.
// Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
// let age = null;
// console. log(age);

/* Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
 Оно означает, что «значение не было присвоено».
 Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:*/
//  let php;
//  alert(php);
// Тип object (объект) – особенный.