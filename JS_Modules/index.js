// import defaultExport, { age, getAge, getName } from "./common.js"; // Importing the default export
// getName();
// getAge();
// console.log(age);
// defaultExport();

$(document).ready(function () {
  console.log("Ready...");
});

$("#btn").click(function () {
  console.log("Clicked...");
});

$("#btn").click(() => {
  $(".hide").hide();
});
