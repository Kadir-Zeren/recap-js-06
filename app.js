// const calculateAge = (year) => new Date().getFullYear() - year;

// console.log(`AGE: ${calculateAge(1990)}`);

// const h = Number(prompt("h:"));
// const r = Number(prompt("r:"));

// const volume = (radius, height) => Math.PI * radius * radius * height;

// console.log("VOLUME:", volume(r, h).toFixed(2));
// console.log("VOLUME:", volume(r, h).toPrecision(4));
// console.log("VOLUME:", volume(r, h).toExponential(5));

// const add = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const mul = (n1, n2) => n1 * n2;
// const div = (n1, n2) => n1 / n2;

// const compute = (n1, n2, operator) => {
//   let result = 0;

//   switch (operator) {
//     case "+":
//       result = add(n1, n2);
//       break;
//     case "-":
//       result = sub(n1, n2);

//       break;
//     case "x":
//     case "*":
//       result = mul(n1, n2);
//       break;
//     case "/":
//       result = div(n1, n2);
//       break;

//     default:
//       alert("Incorrect Operator");
//       result = "Error";
//       break;
//   }
//   return result;
// };

// const n1 = +prompt("First Number:");
// const operator = prompt("Operator:");
// const n2 = +prompt("Second Number:");

// console.log(`${n1}${operator}${n2}= ${compute(n1, n2, operator)}`);

// const fakto = (n) => {
//   let f = 1;
//   for (let i = n; i > 1; i--) {
//     f = f * i;
//   }
//   return f;
// };

// const fakto = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fakto(n - 1);
//   }
// };

// const number = +prompt("n:");

// number < 0
//   ? alert("Number should be bigger than zero")
//   : console.log(`Fakto(${number})= ${fakto(number)}`);

let number1 = 3;
let number2 = 5;
console.log(number1);

const funk1 = () => {
  number1 = 44;
  let number2 = 7;
  console.log("LOCAL:", number2);
};

funk1();

console.log(number1);
console.log("GLOBAL:", number2);

{
  let x = 77;
  x++;
  console.log(x);
}

number2 = 4;
console.log(number2);

console.log(number3);
var number3 = 101;
console.log(number3);

if (number3 === 102) {
  let result = "Hi";
  console.log(result);
} else {
  console.log(result);
  var result = "Hello";
}
console.log(result);
