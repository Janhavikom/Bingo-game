window.onload = initAll;
var usedNums = new Array(26);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  } else {
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for (var i = 0; i < 25; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;

  var num = getNewNum(1, 26);
  while (usedNums[num]) {
    num = getNewNum(1, 26);
  }
  usedNums[num] = true;
  document.getElementById(currentSquare).innerHTML = num;
}
function getNewNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// function getNewNum() {
//   return Math.floor(Math.random(1,25));
// }

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }

  newCard();
  return false;
}
