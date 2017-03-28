var c = document.getElementById("MyCanvas");
var canvas = c.getContext("2d");

var ballX = 290,
    ballY = 480,
    peddleX = 250,
    peddleWidth = 100;
    brickWidth = 39,
    brickheigth = 19,
    brickAmount = 90;
    ballDirection = "north";
    var bricksX = new Array();
    var bricksY = new Array();

startGame();
keyboardControl();
setInterval(function(){
  moveBall();
}, 50);

function startGame(){
  drawBall(ballX, ballY);
  drawPeddle(250);
  var x = 0;
  var y = 0;
  for (var i = 0; i < brickAmount; i++) {
    drawBrick(x, y);
    x = x + brickWidth +1;
    if (x >= 600){
      x = 0;
      y = y + brickheigth +1;
    }
    bricksX[i] = x;
    bricksY[i] = y;
  }
}
