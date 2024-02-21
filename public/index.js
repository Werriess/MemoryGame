console.log("Js is connected")
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
let gameCount = 1;


function changeOrange(whichOrange) {
    whichOrange.style.backgroundColor = "rgba(255, 194, 74, 1)";
    setTimeout( () => {
        whichOrange.style.backgroundColor =  "rgba(250, 167, 6, 1)";
    }, 500)
}

function changeBlue(whichBlue) {
    whichBlue.style.backgroundColor = "rgba(71, 112, 255, 1)";
    setTimeout( () => {
        whichBlue.style.backgroundColor =  "rgba(0, 54, 243, 1";
    }, 500)
}

function changeGreen(whichGreen) {
    whichGreen.style.backgroundColor = "rgba(167, 253, 100, 1)";
    setTimeout( () => {
        whichGreen.style.backgroundColor =  "rgba(107, 243, 0, 1";
    }, 500)
}
function changeRed(whichRed) {
    whichRed.style.backgroundColor = "rgba(255, 60, 60, 1)";
    setTimeout( () => {
        whichRed.style.backgroundColor =  "rgba(243, 0, 0, 1)";
    }, 500)
}

const functionsArray = [changeBlue, changeOrange, changeRed, changeGreen];

function playGame(orange, blue, red, green, orangeTwo, blueTwo, blueThree, redTwo, greenTwo) {
    let answer = Math.floor(Math.random() * 4);
    if(answer == 0) {
        let newBlue = Math.floor(Math.random() * 3);
        if(newBlue == 0) {
            functionsArray[0](blue);
        }
        else if(newBlue == 1) {
            functionsArray[0](blueTwo)
        }
        else {
            functionsArray[0](blueThree);
        }
    }
    else if(answer == 1) {
        let newOrange = Math.floor(Math.random());
        if(newOrange == 0) {
            functionsArray[1](orange);
        }
        else {
            functionsArray[1](orangeTwo);
        }  
    }
    else if(answer == 2) {
        let newRed = Math.floor(Math.random());
        if(newRed == 0) {
            functionsArray[2](red);
        }
        else {
            functionsArray[2](redTwo);
        }
    }
    else {
        let newGreen = Math.floor(Math.random());
        if(newGreen == 0) {
            functionsArray[3](green);
        }
        else {
            functionsArray[3](greenTwo)
        }
    }
}

startGame.addEventListener('click', () => {
    for(let i = 0; i < gameCount; i++) {
        setTimeout( () => {
            playGame(orangeOne, blueOne, redOne, greenOne, orangeTwo, blueTwo, blueThree, redTwo, greenTwo)
        }, i * 1000);
    }
    gameCount++;
});
