console.log('-----Uzduotis-1------');
const arrayLength1 = 20;
const minValue1 = 1;
const maxValue1 = 20;
const myArray1 = [];
for (i = 0; i < arrayLength1; i++) {
  myArray1.push(
    minValue1 + Math.floor(Math.random() * (maxValue1 - minValue1 + 1))
  );
}
console.log(myArray1);
console.log('-----Uzduotis-2------');
const minArrayLength2 = 40;
const maxArrayLength2 = 60;
const arrayLength2 =
  minArrayLength2 +
  Math.floor(Math.random() * (maxArrayLength2 - minArrayLength2 + 1));
console.log(arrayLength2);
const minValue2 = 1;
const maxValue2 = arrayLength2;
const myArray2 = [];
if (arrayLength2 < minArrayLength2) {
  console.log('Nusatytas per mazas masyvo ilgis');
} else if (arrayLength2 > maxArrayLength2) {
  console.log('Nusatytas per didelis masyvo ilgis');
} else {
  for (i = 0; i < arrayLength2; i++) {
    myArray2.push(
      minValue2 + Math.floor(Math.random() * (maxValue2 - minValue2 + 1))
    );
  }
}
console.log('Masyvas:', myArray2);
console.log('-----Uzduotis-3------');
const minArrayLength3 = 10;
const maxArrayLength3 = 15;
const arrayLength3 =
  minArrayLength3 +
  Math.floor(Math.random() * (maxArrayLength3 - minArrayLength3 + 1));
console.log(arrayLength3);
const minValue3 = 5;
const maxValue3 = 47;
const myArray3 = [];
if (arrayLength3 < minArrayLength3) {
  console.log('Nusatytas per mazas masyvo ilgis');
} else if (arrayLength3 > maxArrayLength3) {
  console.log('Nusatytas per didelis masyvo ilgis');
} else {
  for (i = 0; i < arrayLength3; i++) {
    myArray3.push(
      minValue3 + Math.floor(Math.random() * (maxValue3 - minValue3 + 1))
    );
  }
}
console.log('Masyvas:', myArray3);
console.log('-----Uzduotis-4------');
const arrayLength4 = 100;
console.log(arrayLength4);
const minValue4 = 4;
const maxValue4 = 8;
const myArray4 = [];

for (i = 0; i < arrayLength4; i++) {
  myArray4.push(
    String.fromCharCode(
      'A'.charCodeAt(0) -
        1 +
        minValue4 +
        Math.floor(Math.random() * (maxValue4 - minValue4 + 1))
    )
  );
}
console.log('Masyvas:', myArray4);

console.log('-----Uzduotis-5------');
const arrayLength5 = 100;
console.log(arrayLength5);
const minValue5 = 1;
const maxValue5 = 4;
const myArray5 = [];
const obj = { M: 0, N: 0, O: 0, P: 0 };
let randNum5 = 0;
let letter = 0;
let maxLetterCount = 0;
let maxLetter = '';
for (i = 0; i < arrayLength5; i++) {
  randNum5 =
    minValue5 + Math.floor(Math.random() * (maxValue5 - minValue5 + 1));
  letter = String.fromCharCode('M'.charCodeAt(0) - 1 + randNum5);
  obj[letter] += 1;
  myArray5.push(letter);
}
for (const key in obj) {
  if (maxLetterCount < obj[key]) {
    maxLetterCount = obj[key];
    maxLetter = key;
  }
}

console.log('Masyvas:', myArray5);
console.log(`Daugiausiai yra ${maxLetter} raidziu: ${maxLetterCount}`);
console.log('-----Uzduotis-6------');
const arrayLength6 = 20;
const minValue6 = 10;
const maxValue6 = 50;
const myArray6 = [];
let randNum6 =
  minValue6 + Math.floor(Math.random() * (maxValue6 - minValue6 + 1));
for (i = 0; i < arrayLength6; i++) {
  while (myArray6.indexOf(randNum6) > -1) {
    randNum6 =
      minValue6 + Math.floor(Math.random() * (maxValue6 - minValue6 + 1));
  }
  myArray6.push(randNum6);
}
console.log('Masyvas:', myArray6);
// console.log(
//   'Masyvas:',
//   myArray6.sort((a, b) => a - b)
// );
