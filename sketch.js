
var react1,react2;
function setup() {
  createCanvas(800,400);
react1=createSprite(400, 200, 50, 50);
react1.shapeColor="green"
  react2=createSprite(200,200,20,20);
  react2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  react1.x = mouseX
  react1.y = mouseY
console.log(react1.y-react2.y)
  if(react1.x-react2.x < react1.width/2+react2.width/2 && react2.x-react1.x<react1.width/2+react2.width/2 && react1.y-react2.y < react1.width/2+react2.width/2 && react2.y-react1.y <react1.width/2+react2.width/2) {
    react1.shapeColor = "red"
    react2.shapeColor = "red"
  }
 else {
   react1.shapeColor = "green"
   react2.shapeColor = "green"
 }
  drawSprites();
}