// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function start() {
    setInterval(() => {
        time++;
        updateCounterElement(time);
    }, 1000);
}

function updateCounterElement(time) {
    counterElement.textContent = time;
}

start();