// Задание 8 модуль 5.7
let map = new Map();
map.set('key1', 'what');
map.set('key2', 'where');
map.set('key3', 'why');
map.set('key4', 'when');
for (let pair of map) {
   console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}