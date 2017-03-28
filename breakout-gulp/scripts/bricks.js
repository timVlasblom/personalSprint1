function drawBrick(brickX, brickY){
  switch (Math.floor((Math.random() * 3) + 1)){
    case 1:{
      canvas.fillStyle="#FF0000";
    break;
    }
    case 2:{
      canvas.fillStyle="#0000ff";
    break;
    }
    case 3:{
      canvas.fillStyle="#008000";
    break;
    }
  }
  canvas.fillRect(brickX, brickY, brickWidth, brickheigth);
  canvas.stroke();
  canvas.fillStyle="#000000";
}

function checkBricks(){
  for (var i = 0; i < brickAmount; i++) {
    if (ballX >= bricksX[i]  && ballX <= bricksX[i] +brickWidth ){
      if ( ballY >= bricksY[i] && ballY <= bricksY[i] +brickheigth){
        canvas.clearRect(bricksX[i], bricksY[i], brickWidth, brickheigth);
        bricksX[i] = 600;
        bricksY[i] = 0;
        if (ballDirection == "northEast"){
          ballDirection = "southEast";
        }
        if (ballDirection == "northWest"){
          ballDirection = "southWest";
        }
        if (ballDirection == "north"){
          ballDirection = "south";
        }
      }
    }
  }
}
