
// Задание 1
// Хотел исключить еще пустую строку, но тогда исключается и 0.
// Как правильнее будет сделать? Дайте пожалуйста обратную связь)).
let x = +prompt('Введите число');
if (isNaN(x) || x == '') {
   console.log('Упс, кажется, вы ошиблись');
} else {
   console.log(typeof x);
   if (x % 2 === 0) {
      console.log('чётное');
   } else {
      console.log('нечётное');
   }
}