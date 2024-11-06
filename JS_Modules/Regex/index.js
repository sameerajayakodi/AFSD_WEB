$("#error").hide();
$("#success").hide();
function changeText() {
  const reg = /^(0|[1-9]\d*)(e-?(0|[1-9]\d*))?$/i;
  const value = document.getElementById("input").value;
  if (reg.test(value)) {
    $("#error").hide();
    $("#success").show();
    console.log("true");
  } else {
    $("#success").hide();
    $("#error").show();
    console.log("false");
  }
}
