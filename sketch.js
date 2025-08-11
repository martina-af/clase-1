function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(99,109,170);
}
function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
