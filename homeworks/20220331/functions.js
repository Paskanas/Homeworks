console.log('Funkcijos');
console.log('-------------------------');
console.log('Uzduotis 1');
function sumNumbers(a, b) {
  return a + b;
}
console.log(sumNumbers(2, 3));
console.log('-------------------------');
console.log('Uzduotis 2');
function compareNumbers(a, b) {
  return a === b
    ? 'Skaiciai lygus'
    : a > b
    ? 'Pirmas skaicius didesnis'
    : 'Antras skaicius didesnis';
}
console.log(compareNumbers(4, 3));
console.log('-------------------------');
console.log('Uzduotis 3');
function leapYear(a) {
  return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0
    ? 'Metai yra keliamieji'
    : 'Metai nera keliamieji';
}
console.log(leapYear(300));
console.log('-------------------------');
console.log('Uzduotis 4');
function numberSquared(a) {
  return a ** 2;
}
console.log(numberSquared(6));
console.log('-------------------------');
console.log('Uzduotis 5');
function numberSum(a) {
  let numSum = 0;
  if (a > 1) {
    for (i = 1; i <= a; i++) {
      numSum += i;
    }
  } else {
    return 'Skaicius turi buti didesnis uz 1';
  }
  return numSum;
}
console.log(numberSum(4));
console.log('-------------------------');
console.log('Uzduotis 6');
function allNumberDecimals(a) {
  let numDecimals = [];
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      numDecimals.push(i);
    }
  }
  return numDecimals;
}
console.log(allNumberDecimals(6));
console.log('-------------------------');
console.log('Uzduotis 7');
function showTextAndLength(a) {
  console.log(`${a}, teksto ilgis: ${a.length}`);
  return `${a}, teksto ilgis: ${a.length}`;
}
console.log(showTextAndLength('labas'));
console.log('-------------------------');
console.log('Uzduotis 8');
function telefonoNumeris(arr) {
  let concatString = '';
  if (arr.length !== 10) {
    concatString = 'Įvestas neteisingas numeris';
  } else {
    concatString = '(';
    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      concatString += arr[i];
      if (i === 2) {
        concatString += ') ';
      } else if (i === 5) {
        concatString += '-';
      }
    }
  }
  return concatString;
}
console.log(telefonoNumeris([3, 7, 0, 6, 7, 3, 3, 5, 2, 0]));
console.log('-------------------------');
console.log('Uzduotis 9');
const longerText = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return 'Paduodami parametrai nera teskto formato, iveskite teskto formato tekstus';
  }
  return str1.length === str2.length
    ? 'Tekstai lygūs'
    : str1.length < str2.length
    ? 'Pirmas tekstas trumpesnis'
    : 'Antras tekstas trumpesnis';
};
console.log(longerText('aaaa', 1));
console.log('-------------------------');
console.log('Uzduotis 10');
const findLetterA = (str) => {
  let countA = 0;
  if (typeof str !== 'string') {
    return 'Paduodamas parametras nera teskto tipo.';
  } else {
    for (i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        countA++;
      }
    }
  }
  return countA;
};
console.log(findLetterA('Labas ir viso gero. Labanakt'));
