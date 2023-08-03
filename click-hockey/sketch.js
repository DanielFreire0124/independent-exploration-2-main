let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(222);

    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);

    fill(18);
    textSize(20);
    text("Score: " + score, 10, 30);

    if (xPos >= 220 && xPos <= 280 && yPos >= 460) {
        score++;
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(2, 10);
    }

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 0) {
        xPos = 500;
    }
    if (xPos > 500) {
        xPos = 0;
    }
    if (yPos > 500) {
        yPos = 0;
        score--;
    }
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(2, 5);
}
