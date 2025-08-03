const light = document.getElementById("light");
const car = document.getElementById("car");
const result = document.getElementById("result");

let startTime = 0;
let canClick = false;

//Lets simulate red-red-red-green lights
function startSequence() {
    light.textContext = "Red...";
    result.textContent = "";
    canClick = false;

    setTimeout(() => {
        light.textContent = "Red... Red...";
        setTimeout (() => {
            light.textContent = "Red... Red... Red...";
            const randomDelay = 1000 + Math.random() * 2000; // 1-3 seconds
            setTimeout(() => {
                light.textContent = "Green! GO!";
                startTime = Date.now();
                canClick = true;
            }, randomDelay);
        }, 1000);
    }, 1000);
}

car.addEventListener("click", () => {
    if (!canClick) {
        result.textContext = "Too Soon! Wait for green.";
        return;
    }

    const reactionTime = Date.now() - startTime;
    result.textContent = `🚀 Your reaction time: ${reactionTime} ms`;
    canClick = false;
    light.textContent = "Click the car to try again!";
});

window.onload = startSequence;

car.addEventListener("dblclick", () => {
    startSequence(); //restart on double click
});

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
    startSequence();
});