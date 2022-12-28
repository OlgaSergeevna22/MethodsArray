// // 1. Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

// // Пример:
// // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// // Ни один из массивов не будет пустым, так что вам не нужно беспокоиться об этом!

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = []
// for (i = 0; i < arr.length; i += 2) {

//     if (i % 2 !== 0) {
//         arr.splice(i + 1, 1);
//     }
//     newArr.push(arr[i])

// }

// console.log(arr.filter((item, index) => index % 2 !== 0));

// console.log(newArr);


// // 2. Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.

// // Порядок последовательности должен оставаться неизменным.

// let arr = [1, 6, 2, 3, 1, 4, 5, 6, 7, 7, 8, 9, 10, 8, 2, 4]

// let newArr = arr.filter((item, index, arr) => arr.indexOf(item) === index)

// console.log(newArr);


// // 2 способ
// // let unikalArr = [...new Set(arr)]
// // console.log(unikalArr);




// // 3. Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// // Пример [1,-4,7,12]=> 1 + 7 + 12 = 20
// // Примечание: если нечего суммировать, по умолчанию используется значение sum 0.


// let arr = [1, 2, -3, 4, 5, 6, -7, 8, -9, -10]

// console.log(arr.filter(item => item > 0).reduce((summa, item) => summa + item, 0));


// // 4. Завершите метод, который принимает последовательность объектов с двумя ключами для каждого: страна или штат и столица. Ключи могут быть символами или строками.
// // Метод должен возвращать массив предложений с указанием штата или страны и ее столицы.
// // Примеры
// state_capitals = [{ state: 'Maine', capital: 'Augusta' }]
// capital(state_capitals) // returns "The capital of Maine is Augusta"
// country_capitals = [{ 'country': 'Spain', 'capital': 'Madrid' }]
// capital(country_capitals) // returns "The capital of Spain is Madrid"
// mixed_capitals = [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }]
// capital(mixed_capitals) // returns "The capital of Spain is Madrid"


// function capital(capitals) {
//     console.log(capitals.map(item => `The capital of ${item.state || item.country} is ${item.capital}`));
// }




// // 5. Возвращает массив, содержащий числа от 1 до N, где N - заданное значение параметра.

// // Однако замените некоторые значения, если выполняются какие-либо из следующих условий:

// // Если значение кратно 3: вместо этого используйте значение "Шипение".
// // Если значение кратно 5: вместо этого используйте значение "Buzz"
// // Если значение кратно 3 и 5: вместо этого используйте значение "FizzBuzz"
// // N никогда не будет меньше 1.

// // Пример вызова метода:

// // fizzbuzz(3) -->  [1, 2, "Fizz"]

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let n = 15
// arr = Array.from(Array(n + 1).keys())
// arr.splice(0, 1)

// for (i = 0; i < arr.length; i++) {

//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//         arr.splice(i, 1, 'FizzBuzz')
//     } else if (arr[i] % 5 === 0) {
//         arr.splice(i, 1, 'Buzz')
//     } else if (arr[i] % 3 === 0) {
//         arr.splice(i, 1, 'Fizz')
//     }
// }

// console.log(arr);


// // 6. Простой, учитывая строку слов, возвращает длину самого короткого слова (ов).
// // Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// // let arr = ['apple', 'orange', 'milk', 'cat', 'mother', 'tea'];

// // arr = arr.sort((a, b) => a.length - b.length)
// // console.log(arr[0].length);


// function findShort(s) {

//     let stringArray = s.split(' ')
//     let sortString = stringArray.sort((a, b) => a.length - b.length)
//     console.log(sortString[0].length);

// }

// findShort("bitcoin take over the world maybe who knows perhaps")





// // 7. Добро пожаловать. В этом ката вас попросят возвести в квадрат каждую цифру числа и объединить их.
// // Например, если мы запустим 9119 через функцию, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.
// // Примечание: функция принимает целое число и возвращает целое число

// // let digits = num.split('')
// //     // let squareDigits = 

// // digits.map(item => item ** 2)

// // digits.join('')
// // console.log(digits);

// function squareDigits(num) {

//     num = num.toString()

//     let digits = num.split('').map(item => item ** 2).join('')

//     console.log(+digits);

// }

// squareDigits(3212)
// squareDigits(2112)
// squareDigits(0)


// // 8. Создайте функцию inter, получающую 2 набора в качестве аргументов и возвращающую новый набор в результате пересечения этих 2 наборов.

// // Примеры:
// // A = new Set([1,2]);
// // B = new Set([2,3]);

// // C = inter(A,B) // -> {2}


// let A = new Set([1, 2]),
//     B = new Set([2, 3]),
//     C = new Set([2])

// function inter(s1, s2) {

//     let intersection = new Set([...new Set(s1)].filter(item => new Set(s2).has(item)));

//     console.log(intersection);

// }





// inter(A, A)
// inter(A, B)
// inter(B, C)


// // 9. Учитывая смешанный массив числовых и строковых представлений целых чисел, сложите нестроковые целые числа и вычтите это из общего числа строковых целых чисел.
// // Возвращает в виде числа.

// let arr = [9, 3, '7', '3'];

// function divCon(x) {

//     let sumNumbers = arr.filter(item => typeof item === 'number').reduce((summa, item) => summa + item, 0)

//     let strNumbers = arr.filter(item => typeof item === "string").map(item => parseFloat(item)).reduce((summa, item) => summa + item, 0)

//     console.log(sumNumbers - strNumbers);
// }

// divCon(arr)


// 10. Учитывая массив целых чисел, найдите число то, которое встречается нечетное число раз.

// Всегда будет только одно целое число, которое появляется нечетное число раз.

function findOdd(A) {
    let count = 0;
    let arr = A.sort((a, b) => a - b);
    for (let item1 of arr) {
        for (let item2 of arr) {
            if (item1 == item2) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            // return item1
            console.log(item1);


        }
    }
}


findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])

// // 11. Вам предоставляется массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого N числа . Напишите метод, который принимает массив в качестве аргумента и возвращает этот "выброс" N.

// // Примеры
// // [2, 4, 0, 100, 4, 11, 2602, 36]
// // Should return: 11 (the only odd number)
// // [160, 3, 1719, 19, 11, 13, -21]
// // Should return: 160 (the only even number)

// function findOutlier(integers) {

//     integers.filter(item => item % 2 === 0).length > integers.filter(item => item % 2 !== 0).length ? console.log(Number(integers.filter(item => item % 2 !== 0))) : console.log(Number(integers.filter(item => item % 2 === 0)))

//     // через for, 2 способ 
//     // if (item % 2 === 0) {

//     //     N = Number(integers.filter(item => item % 2 !== 0));
//     // } else {
//     //     N = Number(integers.filter(item => item % 2 === 0))
//     // }
//     // console.log(N);
// }

// findOutlier([11, 2, 4, 0, 100, 4, 2602, 36])
// findOutlier([160, 3, 1719, 19, 11, 13, -21])