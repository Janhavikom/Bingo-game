window.onload = initAll;

counter = 0;
count = 0;
let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let win = new Audio("win.mp3");
let onerow = new Audio("onerow.mp3");

var usedNums = new Array(26);

// window.setInterval(changebingo,1000);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
    // changebingo();
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

// count =0;

value1 = 0;
value2 = 0;
value3 = 0;
value4 = 0;
value5 = 0;
value6 = 0;
value7 = 0;
value8 = 0;
value9 = 0;
value10 = 0;

function getcolor() {
  //  checkcount();
  var backgroundColor0 = window.getComputedStyle
    ? window
        .getComputedStyle(square0, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor1 = window.getComputedStyle
    ? window
        .getComputedStyle(square1, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor2 = window.getComputedStyle
    ? window
        .getComputedStyle(square2, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor3 = window.getComputedStyle
    ? window
        .getComputedStyle(square3, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor4 = window.getComputedStyle
    ? window
        .getComputedStyle(square4, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor5 = window.getComputedStyle
    ? window
        .getComputedStyle(square5, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor6 = window.getComputedStyle
    ? window
        .getComputedStyle(square6, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor7 = window.getComputedStyle
    ? window
        .getComputedStyle(square7, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor8 = window.getComputedStyle
    ? window
        .getComputedStyle(square8, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor9 = window.getComputedStyle
    ? window
        .getComputedStyle(square9, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor10 = window.getComputedStyle
    ? window
        .getComputedStyle(square10, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor11 = window.getComputedStyle
    ? window
        .getComputedStyle(square11, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor12 = window.getComputedStyle
    ? window
        .getComputedStyle(square12, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor13 = window.getComputedStyle
    ? window
        .getComputedStyle(square13, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor14 = window.getComputedStyle
    ? window
        .getComputedStyle(square14, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor15 = window.getComputedStyle
    ? window
        .getComputedStyle(square15, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor16 = window.getComputedStyle
    ? window
        .getComputedStyle(square16, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor17 = window.getComputedStyle
    ? window
        .getComputedStyle(square17, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor18 = window.getComputedStyle
    ? window
        .getComputedStyle(square18, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor19 = window.getComputedStyle
    ? window
        .getComputedStyle(square19, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor20 = window.getComputedStyle
    ? window
        .getComputedStyle(square20, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor21 = window.getComputedStyle
    ? window
        .getComputedStyle(square21, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor22 = window.getComputedStyle
    ? window
        .getComputedStyle(square22, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor23 = window.getComputedStyle
    ? window
        .getComputedStyle(square23, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;
  var backgroundColor24 = window.getComputedStyle
    ? window
        .getComputedStyle(square24, null)
        .getPropertyValue("background-color")
    : myDiv.style.backgroundColor;

  if (
    backgroundColor0 == "rgb(173, 216, 230)" &&
    backgroundColor1 == "rgb(173, 216, 230)" &&
    backgroundColor2 == "rgb(173, 216, 230)" &&
    backgroundColor3 == "rgb(173, 216, 230)" &&
    backgroundColor4 == "rgb(173, 216, 230)"
  ) {
    if (value1 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value1 = 1;
    }
  }
  if (
    backgroundColor5 == "rgb(173, 216, 230)" &&
    backgroundColor6 == "rgb(173, 216, 230)" &&
    backgroundColor7 == "rgb(173, 216, 230)" &&
    backgroundColor8 == "rgb(173, 216, 230)" &&
    backgroundColor9 == "rgb(173, 216, 230)"
  ) {
    if (value2 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value2 = 1;
    }
  }
  if (
    backgroundColor10 == "rgb(173, 216, 230)" &&
    backgroundColor11 == "rgb(173, 216, 230)" &&
    backgroundColor24 == "rgb(173, 216, 230)" &&
    backgroundColor12 == "rgb(173, 216, 230)" &&
    backgroundColor13 == "rgb(173, 216, 230)"
  ) {
    if (value3 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value3 = 1;
    }
  }
  if (
    backgroundColor14 == "rgb(173, 216, 230)" &&
    backgroundColor15 == "rgb(173, 216, 230)" &&
    backgroundColor16 == "rgb(173, 216, 230)" &&
    backgroundColor17 == "rgb(173, 216, 230)" &&
    backgroundColor18 == "rgb(173, 216, 230)"
  ) {
    if (value4 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value4 = 1;
    }
  }
  if (
    backgroundColor19 == "rgb(173, 216, 230)" &&
    backgroundColor20 == "rgb(173, 216, 230)" &&
    backgroundColor21 == "rgb(173, 216, 230)" &&
    backgroundColor22 == "rgb(173, 216, 230)" &&
    backgroundColor23 == "rgb(173, 216, 230)"
  ) {
    if (value5 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value5 = 1;
    }
  }
  if (
    backgroundColor0 == "rgb(173, 216, 230)" &&
    backgroundColor5 == "rgb(173, 216, 230)" &&
    backgroundColor10 == "rgb(173, 216, 230)" &&
    backgroundColor14 == "rgb(173, 216, 230)" &&
    backgroundColor19 == "rgb(173, 216, 230)"
  ) {
    if (value6 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value6 = 1;
    }
  }

  if (
    backgroundColor1 == "rgb(173, 216, 230)" &&
    backgroundColor6 == "rgb(173, 216, 230)" &&
    backgroundColor11 == "rgb(173, 216, 230)" &&
    backgroundColor15 == "rgb(173, 216, 230)" &&
    backgroundColor20 == "rgb(173, 216, 230)"
  ) {
    if (value7 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value7 = 1;
    }
  }
  if (
    backgroundColor2 == "rgb(173, 216, 230)" &&
    backgroundColor7 == "rgb(173, 216, 230)" &&
    backgroundColor24 == "rgb(173, 216, 230)" &&
    backgroundColor16 == "rgb(173, 216, 230)" &&
    backgroundColor21 == "rgb(173, 216, 230)"
  ) {
    if (value8 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value8 = 1;
    }
  }
  if (
    backgroundColor3 == "rgb(173, 216, 230)" &&
    backgroundColor8 == "rgb(173, 216, 230)" &&
    backgroundColor12 == "rgb(173, 216, 230)" &&
    backgroundColor17 == "rgb(173, 216, 230)" &&
    backgroundColor22 == "rgb(173, 216, 230)"
  ) {
    if (value9 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        onerow.play();
      }
      counter = 0;
      value9 = 1;
    }
  }
  if (
    backgroundColor4 == "rgb(173, 216, 230)" &&
    backgroundColor9 == "rgb(173, 216, 230)" &&
    backgroundColor13 == "rgb(173, 216, 230)" &&
    backgroundColor18 == "rgb(173, 216, 230)" &&
    backgroundColor23 == "rgb(173, 216, 230)"
  ) {
    if (value10 == 0) {
      counter = 1;
      if (counter == 1) {
        count = count + 1;
        turnmusic.pause();
        onerow.play();
      }
      counter = 0;
      value10 = 1;
    }
  }

  console.log(count);
  if (count == 5) {
    onerow.pause();
    win.play();
    alert();
    refresh();
  }
}

function changebingo() {
  if (count == 1) {
    ele = document.getElementById(textb);
    console.log(ele);
    ele.style.background = "white";
  } else {
    console.log("hello");
  }
}
function changecolor(p) {
  // console.log("here");
  turnmusic.play();
  const myElement = document.getElementById(p);
  // console.log(myElement);
  myElement.style.backgroundColor = "#ADD8E6";
}
function refresh() {
  // location.reload();
  // //   console.log("here");
  const myElement = document.getElementsByClassName("tile");
  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "orange";
  }
  count = 0;
  counter = 0;
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  value6 = 0;
  value7 = 0;
  value8 = 0;
  value9 = 0;
  value10 = 0;
}

function alert() {
  swal({
    title: "You Win !!",
    text: "Now make fun of your Friends !!",
    icon: "success",
    button: "Ok",
  });
}
