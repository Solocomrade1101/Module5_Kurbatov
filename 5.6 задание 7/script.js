// Задание 7 модуль 5.6
// как я понял null не считается нулевым элементом поэтому его не вывел.
let arr = [1, "54", 2, "fgddf", 3, 0, 4, 5, '', 6, null, 7, 8, NaN,];
let arrEven = [];
let arrOdd = [];
for (i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0 && typeof (arr[i]) === 'number' && arr[i] !== 0) {
      arrEven.push(arr[i])
   } else if (arr[i] % 2 !== 0 && typeof (arr[i]) === 'number' && isNaN(arr[i]) !== true) {
      arrOdd.push(arr[i])
   } else if (arr[i] == 0) {
      console.log(arr[i]);
   }
}
console.log(arrEven.length);
console.log(arrOdd.length);