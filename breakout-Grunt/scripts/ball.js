function drawBall(ballX, ballY){
  canvas.fillRect(ballX, ballY, 10, 10);
  canvas.stroke();
}

function moveBall(){
  canvas.clearRect(ballX, ballY, 10, 10);
  switch (ballDirection) {
    case "north":{
      ballY = ballY -10;
      break;
    }
    case "northEast":{
      ballX = ballX +10;
      ballY = ballY -10;
      break;
    }
    case "east":{
      ballX = ballX +10;
      break;
    }
    case "southEast":{
      ballX = ballX +10;
      ballY = ballY +10;
      break;
    }
    case "south":{
        ballY = ballY +10;
        break;
    }
    case "southWest":{
      ballX = ballX -10;
      ballY = ballY +10;
      break;
    }
    case "west":{
        ballY = ballY -10;
        break;
    }
    case "northWest":{
      ballX = ballX -10;
      ballY = ballY -10;
      break;
    }
  }
  if (ballX >=600){
    ballX = 600;
    if (ballDirection == "northEast"){
      ballDirection = "northWest";
    }
    if (ballDirection == "southEast"){
      ballDirection = "southWest";
    }
  }
  if (ballX <=0){
    if (ballDirection == "northWest"){
      ballDirection = "northEast";
    }
    if (ballDirection == "southWest"){
      ballDirection = "southEast";
    }
  }
  if (ballY >=600){
    alert("yu suck")
  }
  if (ballY <=0){
    if (ballDirection == "northEast"){
      ballDirection = "southEast";
    }
    if (ballDirection == "northWest"){
      ballDirection = "southWest";
    }
    else{
      ballDirection = "south";
    }
  }
  if (peddleWidth == 100){
    if (ballX >= peddleX && ballX <= (peddleX + 33)){
      if (ballY >= 540 && ballY<= 560){
        ballDirection = "northWest";
      }
    }
    if (ballX >= peddleX + 33 && ballX <= (peddleX + 66)){
      if (ballY >= 540 && ballY <= 560){
        ballDirection = "north";
      }
    }
    if (ballX >= peddleX + 66 && ballX <= (peddleX + 100)){
      if (ballY >= 540 && ballY <= 560){
        ballDirection = "northEast";
      }
    }
  }
  checkBricks();
  drawBall(ballX, ballY);
}
