console.log('------uzduotis-1-------');
let sum1 = 0;
const minNumber1 = 1;
const maxNumber1 = 10;
let randNum1 = 0;
while (sum1 < 100) {
  // randNum = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  randNum1 = Math.ceil(Math.random() * 10);
  sum1 += randNum1;
  // console.log(randNum1);
  console.log('Skaiciu suma', sum1);
}

console.log('------uzduotis-2-------');
let sum2 = 0;
const minNumber2 = 1;
const maxNumber2 = 10;
let randNum2 = 0;
sum2 = randNum2 = Math.ceil(Math.random() * 10);
console.log('Skaiciu suma', sum2);
while (sum2 % 7 !== 0) {
  // randNum = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  randNum2 = Math.ceil(Math.random() * 10);
  sum2 += randNum2;
  // console.log(randNum2);
  console.log('Skaiciu suma', sum2);
}
console.log('Galutine skaiciu suma kuri dali is 7:', sum2);
console.log('------uzduotis-3-------');
const totalChapterNum = 17;
let currentChapterNum = 0;
let dayToRead = 0;

while (currentChapterNum < totalChapterNum) {
  dayToRead++;
  currentChapterNum += dayToRead;
}
console.log(`Tadas visa knyga perskaitys per ${dayToRead} dienas (-u)`);
console.log(
  `Tadas vidutiniskai per diena perskaite ${
    Math.round((totalChapterNum / dayToRead) * 100) / 100
  } skyrius (-u)`
);
console.log('------uzduotis-4-------');
const minNumber4 = 0;
const maxNumber4 = 10;
let randNum4 = Math.floor(Math.random() * (maxNumber4 - minNumber4 + 1));
console.log(randNum4);
while (randNum4 !== 5) {
  randNum4 = Math.floor(Math.random() * (maxNumber4 - minNumber4 + 1));
  console.log(randNum4);
}
console.log('------uzduotis-5-------');
const minNumber5 = 0;
const maxNumber5 = 10;
let randNum5 = Math.floor(Math.random() * (maxNumber5 - minNumber5 + 1));
let counter = 1;
console.log(randNum5);
while (randNum5 !== 5 && randNum5 !== 7) {
  randNum5 = Math.floor(Math.random() * (maxNumber5 - minNumber5 + 1));
  console.log(randNum5);
  ++counter;
  // console.log('c', counter);
}
console.log(`Prasisuko ${counter} ciklas(-ai/-u)`);
