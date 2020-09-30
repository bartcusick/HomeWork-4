
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
//

function answer1() {
    console.log("I I just clicked Answer 1 ");
}
function answer2() {
    console.log("I I just clicked Answer 2 ");
}
function answer3() {
    console.log("I I just clicked Answer 3 ");
}
function answer4() {
    console.log("I I just clicked Answer 4 ");
}

var count = 15;

var timer = setInterval(function() {
  document.getElementById("timerNumber").innerHTML = count;
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  document.getElementById("timerNumber").innerHTML = 'time is up!';
  clearInterval(timer);
}

answer1Btn.addEventListener("click", answer1);
answer2Btn.addEventListener("click", answer2);
answer3Btn.addEventListener("click", answer3);
answer4Btn.addEventListener("click", answer4);