console.log('Ciklai');
console.log('Uzduotis 1');
for (i = 0; i < 5; i++) {
  console.log('Labas');
}
console.log('Uzduotis 2');
for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log('Uzduotis 3');
for (i = 0; i < 5; i++) {
  console.log(i * 10);
}
console.log('Uzduotis 4');
for (i = 49; i < 54; i++) {
  console.log(i);
}
console.log('Uzduotis 5');
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (i = 0; i < 5; i++) {
  // console.log(Math.floor(Math.random() * 11));
  console.log(rand(0, 10));
}
console.log('Uzduotis 6');
for (i = 0; i <= 20; i++) {
  if (i % 3 !== 0) console.log(i);
}
console.log('Uzduotis 7');
const num = 3;
for (i = 1; i <= 10; i++) {
  console.log(num * i);
}
console.log('Uzduotis 8');
const col = 2.54;
const n = 10;
for (i = 1; i <= n; i++) {
  console.log(col * i);
}
console.log('Uzduotis 9');
const palukanos = 2;
const money = 100;
const years = 10;
let currentMoney = money;
for (i = 0; i <= n; i++) {
  console.log(Math.round(((currentMoney * palukanos) / 100) * 100) / 100);
  currentMoney += Math.round(((currentMoney * palukanos) / 100) * 100) / 100;
  console.log(Math.round(currentMoney * 100) / 100);
}
console.log('Uzduotis 10');
const leapYear = 366;
const regularYear = 365;
for (i = 1; i < 2022; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    console.log('Keliamieji metai:', i);
  }
}
