function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  rectMode(CENTER);
  noStroke();
  fill(225, 225, 225, 100);
  ellipse(mouseX, mouseY, 10);
}

function mousePressed() {
  background(0);
}
