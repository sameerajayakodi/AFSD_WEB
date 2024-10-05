const e = require("express");

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const ans = num1 + num2;
  document.getElementById("result").innerText = ans;
}

//click
function clickEvent() {
  console.log("clicked");
}
//onChange
function onChangeEvent() {
  console.log("changed Event");
}

//onMouseOver

function onMouseOverEvent() {
  document.getElementById("mouseOver").style.backgroundColor = "red";
}
function onMouseOutEvent() {
  document.getElementById("mouseOver").style.backgroundColor = "blue";
}

//keyUp
function keyUpEvent() {}

//keyDown
function keyDownEvent() {
  const va = document.getElementById("input1").value;
  console.log(va);
}

function onKeyPressEvent() {
  const va = document.getElementById("input1").value;
  console.log(va);
}

function isEqual() {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();

  console.log(input1);
  console.log(input2);

  if (input1 == input2) {
    document.getElementById("result1").innerText = "Equal";
  } else {
    document.getElementById("result1").innerText = "Not Equal";
  }
}

function sum() {
  let numberInput = document.getElementById("numberInput").value;
  let sum = 0;

  for (let digit of numberInput) {
    sum += parseInt(digit);
  }

  document.getElementById("result3").innerText = sum;
}

function shortToLong() {
  let input1 = document.getElementById("shortInput").value.toLowerCase();
  let resultText;

  switch (input1) {
    case "intern":
      resultText = "Intern Software Engineer";
      break;
    case "ase":
      resultText = "Associate Software Engineer";
      break;
    case "se":
      resultText = "Software Engineer";
      break;
    case "sse":
      resultText = "Senior Software Engineer";
      break;
    case "alt":
      resultText = "Associate Tech Lead";
      break;
    case "tl":
      resultText = "Tech Lead";
      break;
    default:
      resultText = "Invalid Input";
      break;
  }

  document.getElementById("result4").innerText = resultText;
}

//FIRST LETTER CAPITAL
function firstLetterCapital() {
  let input1 = document.getElementById("firstLetter").value;
  let resultText = input1.charAt(0).toUpperCase() + input1.slice(1);

  document.getElementById("result5").innerText = resultText;
}

//GENERATE RANDOM NUMBRES 100 AND STORE AND DISPLAY , THEN INPUT 1-100 AND PRINT 12 DEVIDE NUMBERS 