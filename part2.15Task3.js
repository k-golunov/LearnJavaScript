function pow(number, degree) {
  let result = number;

  for (let i = 1; i < degree; i++) {
    result *= number;
  }

  return result;
}

let number = prompt("Введите число", '');
let degree = prompt("Введите степень", '');

if (degree < 1) {
  alert(`Степень должна быть натуральным числом`);
} else {
  alert( pow(number, degree) );
}