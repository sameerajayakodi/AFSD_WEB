console.log("External Script");
document.write("document write");

document.writeln("<h2>This is H2 tag</h2>");
document.write("<input type='text' placeholder='Enter your name'>");
document.writeln("<br>");
document.writeln("<br>");
// const Button = () => {
//   document.writeln(
//     "<div style='margin-bottom:10px; height:100px; max-width:150px; margin:10px;background-color:lightgreen; text-align:center; font-family:inter; padding:5px; border-radius:5px;'>click here</div>"
//   );
// };
// for (var i = 0; i < 10; i++) {
//   Button();
// }

const num = 23.9;
const string = "acpt";
const bool = true;

const array = [12, "string", true, { name: "acpt" }, {}];
//object
const obj = {
  name: "acpt",
  address: "pandura",
};
//global scope
const globle = "";

//funclion scope
function setname() {
  const func = 90;
}

//block scope
{
  const block1 = "";
}

if (true) {
}

//can redeclare and reassign var variable
var aa = "acpt";
console.log(aa);
var ab = 25;
console.log(ab);
{
  var y = 40;
}

console.log(y);

// let variable can reassign but can't re declare and cant use outside variable that declare block scope

let dd = 12;
// let dd = 100;
dd = 100;

// {
//   let cc = 200;
// }

// console.log(cc);

// const variable can't redeclare , reassign and can't use outside block scope
const co = "acpt";
// const co = 20;

// co = 45;

{
  const coo = 41;
}

// console.log(coo);

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// can't increment const variables
// a++;
let c = 5;
c++;

console.log(c == 5);
console.log(c != 5);
console.log(c >= 6);

console.log(c == 0 && a == 10);
console.log(c == 0 || a == 10);

if (c == 0) {
} else if (c == 1) {
} else {
}

const key = "sam";
switch (key) {
  case "sam":
    console.log("name is sameera");
    break;

  default:
    console.log("wrong");
    break;
}
const array1 = [23, 12, 14, 36, 45, 52];
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

let g = 0;
while (g < array1.length) {
  console.log(g);
  g++;
}

let o = 0;
do {
  console.log("print Do while");
  o++;
} while (o < array1.length);
