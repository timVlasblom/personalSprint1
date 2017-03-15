function keyboardControl(){
 document.addEventListener('keydown', function(event) {
   if(event.keyCode == 37 || event.keyCode == 65) {
       movePeddle("right");
   }
   else if(event.keyCode == 39 || event.keyCode == 68) {
        movePeddle("left");
   }
 });
}

function drawPeddle(peddleX){
  canvas.fillRect(peddleX, 550, peddleWidth, 10);
  canvas.stroke();
}

function movePeddle(direction){
  if (direction == "right"){
    peddleX = peddleX - 10;
    if(peddleX < 0){
      peddleX = 0;
    }
    canvas.clearRect(0,549,600,100);
  }
  if (direction == "left"){
    peddleX = peddleX + 10;
    if(peddleX > 600 - peddleWidth){
      peddleX = 600 - peddleWidth;
    }
    canvas.clearRect(0,549,600,100);
  }
  drawPeddle(peddleX);
}
