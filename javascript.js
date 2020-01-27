let box;

function setup() {
  createCanvas(400, 400);
  box = new Square();
}

function draw() {
  background('black');
  
  box.x = 150;
  box.y = 300;
  box.size = 75;
  box.color = 'papayawhip';
  box.spin = 45;
  box.show();
}