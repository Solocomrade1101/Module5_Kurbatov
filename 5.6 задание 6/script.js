// Задание 6 модуль 5.6
const arr = [1, 1, 1, 1, 1, 1, 1, 2,];
for (let i = 1; i < arr.length; i++) {
   if (arr[i] !== arr[0]) {
      console.log('false');
      break;
   }
   if (i === arr.length - 1) {
      console.log('true');
   }
}
