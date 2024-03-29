console.log("Js is connected");
const startGame = document.querySelector("#startGame");
const orangeOne = document.querySelector("#orangeOne");
const orangeTwo = document.querySelector("#orangeTwo");
const blueOne = document.querySelector("#blueOne");
const blueTwo = document.querySelector("#blueTwo");
const blueThree = document.querySelector("#blueThree");
const redOne = document.querySelector("#redOne");
const redTwo = document.querySelector("#redTwo");
const greenOne = document.querySelector("#greenOne");
const greenTwo = document.querySelector("#greenTwo");
let iterator = 1;
let gameCount = 0;

function changeOrange(whichOrange) {
  whichOrange.style.backgroundColor = "rgba(255, 194, 74, 1)";
  setTimeout(() => {
    whichOrange.style.backgroundColor = "rgba(250, 167, 6, 1)";
  }, 500);
}

function changeBlue(whichBlue) {
  whichBlue.style.backgroundColor = "rgba(71, 112, 255, 1)";
  setTimeout(() => {
    whichBlue.style.backgroundColor = "rgba(0, 54, 243, 1)";
  }, 500);
}

function changeGreen(whichGreen) {
  whichGreen.style.backgroundColor = "rgba(167, 253, 100, 1)";
  setTimeout(() => {
    whichGreen.style.backgroundColor = "rgba(107, 243, 0, 1)";
  }, 500);
}
function changeRed(whichRed) {
  whichRed.style.backgroundColor = "rgba(255, 60, 60, 1)";
  setTimeout(() => {
    whichRed.style.backgroundColor = "rgba(243, 0, 0, 1)";
  }, 500);
}

const functionsArray = [changeBlue, changeOrange, changeRed, changeGreen];
let lightArray = [];

function generateSequence(
  orange,
  blue,
  red,
  green,
  orangeTwo,
  blueTwo,
  blueThree,
  redTwo,
  greenTwo
) {
  let answer = Math.floor(Math.random() * 4);
  if (answer == 0) {
    let newBlue = Math.floor(Math.random() * 3);
    if (newBlue == 0) {
      functionsArray[0](blue);
      lightArray.push(3);
    } else if (newBlue == 1) {
      functionsArray[0](blueTwo);
      lightArray.push(4);
    } else {
      functionsArray[0](blueThree);
      lightArray.push(8);
    }
  } else if (answer == 1) {
    let newOrange = Math.round(Math.random());
    if (newOrange == 0) {
      functionsArray[1](orange);
      lightArray.push(1);
    } else {
      functionsArray[1](orangeTwo);
      lightArray.push(6);
    }
  } else if (answer == 2) {
    let newRed = Math.round(Math.random());
    if (newRed == 0) {
      functionsArray[2](red);
      lightArray.push(2);
    } else {
      functionsArray[2](redTwo);
      lightArray.push(7);
    }
  } else {
    let newGreen = Math.round(Math.random());
    if (newGreen == 0) {
      functionsArray[3](green);
      lightArray.push(5);
    } else {
      functionsArray[3](greenTwo);
      lightArray.push(9);
    }
  }
}

let userChoiceArr = [];

function getUserInput(lightValue) {
    userChoiceArr.push(parseInt(lightValue));
}

function validateSequence(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    console.log("Sorry game over! Arrays have different lengths.");
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log("Sorry game over! Mismatch at index", i);
      console.log("Expected:", arrOne[i]);
      console.log("Actual:", arrTwo[i]);
      console.log("arrOne:", arrOne);
      console.log("arrTwo:", arrTwo);

      return false;
    }
  }

  return true;
}

  orangeOne.addEventListener("click", () => {
    getUserInput(orangeOne.getAttribute("data-value"));
    
});

orangeTwo.addEventListener("click", () => {
    getUserInput(orangeTwo.getAttribute("data-value"));
    
});

redOne.addEventListener("click", () => {
    getUserInput(redOne.getAttribute("data-value"));
    
});

redTwo.addEventListener("click", () => {
    getUserInput(redTwo.getAttribute("data-value"));
    
});

blueOne.addEventListener("click", () => {
    getUserInput(blueOne.getAttribute("data-value"));
    
});

blueTwo.addEventListener("click", () => {
    getUserInput(blueTwo.getAttribute("data-value"));
    
});

blueThree.addEventListener("click", () => {
    getUserInput(blueThree.getAttribute("data-value"));
    
});

greenOne.addEventListener("click", () => {
    getUserInput(greenOne.getAttribute("data-value"));
    
});

greenTwo.addEventListener("click", () => {
    getUserInput(greenTwo.getAttribute("data-value"));
});


startGame.addEventListener('click', () => {
  startLevel();
})

function startLevel() {
  for (let i = 0; i < iterator; i++) {
    setTimeout(() => {
      generateSequence(
        orangeOne,
        blueOne,
        redOne,
        greenOne,
        orangeTwo,
        blueTwo,
        blueThree,
        redTwo,
        greenTwo
      );
    }, i * 1000);

    setTimeout(() => {
      if (validateSequence(lightArray, userChoiceArr)) {
        console.log(true);
      } else {
        iterator = 0;
      }
      
      lightArray = [];
      userChoiceArr = [];
    }, (i + 1) * 1000 + 5000);
  }
  iterator++;
}




//map die divs wat flicker
//vergelyk met users input
//set timer
//indien reg, gaan aan na volgende level

