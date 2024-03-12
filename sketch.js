function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function mousePressed(){
  setTimeout(makeRandomSquare, 5,);
}

function makeRandomSquare(){
  noStroke();
  fill(random(0, 255));
  rect(random(0, width), random(0, height), random(100, 5), random(5, 100));
  setTimeout(makeRandomSquare, 1,);
}

function draw() {
}
