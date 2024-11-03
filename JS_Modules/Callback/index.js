function func1(callBack) {
  console.log("func1");
  callBack("acpt");
}
function func2() {
  console.log("func2");
}
function func3() {
  console.log("func3");
}

func1(func3);

func1(function (param) {
  console.log("call back");
  console.log(param);
});
