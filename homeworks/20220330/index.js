let nr = 1;

console.log('-------------------------');
console.log('Uzduotis:', nr++);
const n1 = 20;
if (n1 <= 0) {
  console.log('Blogas');
} else {
  console.log('Geras');
}
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const colorCode = 2;
if (colorCode === 1) {
  console.log('Galite eiti');
} else if (colorCode === 2) {
  console.log('Palaukite');
} else if (colorCode === 3) {
  console.log('Draudziama eiti');
}
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const d = 3; //dezes
const k = 15; //knygos
const n = 5; //i viena deze telpa knygu
if (Math.ceil(k / n) > d) {
  console.log('Knygos netelpa i dezes');
} else {
  console.log('Knygos telpa i dezes');
}

console.log('-------------------------');
console.log('Uzduotis:', nr++);
let a = 1;
let b = 4;
console.log('a', a);
console.log('b', b);
if (a === b) {
  console.log('Skaiciai lygūs, veiksmai nebus atliekami');
} else if (a > b) {
  a--;
  b++;
} else {
  a++;
  b--;
}
console.log('a', a);
console.log('b', b);
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const c = 50;
const p = 20;
const m = c % p;
// const k1 = (c - m) / p; //galima ir taip
const k1 = Math.floor(c / p);
console.log('Gali nusipirkti ' + k1 + ' porciju ledu');
console.log('Graza:', m);

console.log('-------------------------');
console.log('Uzduotis:', nr++);
const n3 = 4;
if (n3 % 3 > 0) {
  console.log('Trikampio sudelioti negalima');
} else {
  console.log('Trikampi sudelioti galima');
}
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const monthNumber = 4;
let d1 = 0;
if (
  monthNumber === 1 ||
  monthNumber === 3 ||
  monthNumber === 5 ||
  monthNumber === 7 ||
  monthNumber === 8 ||
  monthNumber === 10 ||
  monthNumber === 12
) {
  d1 = 31;
} else if (monthNumber === 2) {
  d1 = 28;
} else {
  d1 = 30;
}
console.log('Menesio dienu skaicius:', d1);
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const diceNumber = 1;
if (diceNumber % 2 > 0) {
  console.log('Kambari tvakro jaunelis');
} else {
  console.log('Kambari tvakro vyresnelis');
}
console.log('-------------------------');
console.log('Uzduotis:', nr++);
const firstOlimpics = 1896;
const currentYear = 2005;
const yearsDiffecences = currentYear - firstOlimpics;
const nthOlimpics = (yearsDiffecences - (yearsDiffecences % 4)) / 4 + 1;
if (yearsDiffecences % 4 === 0) {
  console.log(
    currentYear + ' metais buvo/bus ' + nthOlimpics + ' olimpines zaidynes'
  );
} else {
  console.log('Metai neolimpiniai');
}

console.log('-------------------------');
console.log('Uzduotis:', nr++);
const v1 = 9;
const m1 = 5;
const m2 = 0;
const v = 9;
const mm = 5;
const lessonStartInMinutes = v * 60 + mm;
const leftTimeInMinutes = v1 * 60 + m1;
const timeArrive = leftTimeInMinutes + m2;
if (lessonStartInMinutes >= timeArrive) {
  console.log('Petras i pamoka nepaveluos');
} else {
  console.log('Petras i pamoka paveluos');
}
