window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
  };  
};
function startGame() {
  drawRoad();
  drawPlayer();
}

function drawRoad() {
  var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(10,0);
ctx.lineTo(10,400);
ctx.lineWidth = 20;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(790,0);
ctx.lineTo(790,400);
ctx.lineWidth = 20;
ctx.strokeStyle= "green";
ctx.stroke();

ctx.fillStyle="grey";
ctx.fillRect(20, 0, 760, 400);
  
ctx.beginPath();
ctx.setLineDash([40, 40]);
ctx.moveTo(400, 0);
ctx.lineTo(400, 400);
ctx.lineWidth = 15;
ctx.strokeStyle = 'white';
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([0, 0]);
ctx.moveTo(40, 0);
ctx.lineTo(40, 400);
ctx.lineWidth = 15;
ctx.strokeStyle = 'white';
ctx.stroke();
  
ctx.beginPath();
ctx.setLineDash([0, 0]);
ctx.moveTo(760, 0);
ctx.lineTo(760, 400);
ctx.lineWidth = 15;
ctx.strokeStyle = 'white';
ctx.stroke();

}


var raceCar = {
  x: 200,
  y: 50,
  moveRight: function () {this.x -= 20},
  moveLeft: function() {this.x +=20},
}

function drawPlayer(raceCar)
  {
  var img = new Image();
  img.onload = function(){
    ctx.drawImage (img, raceCar.x, raceCar.y, 50,50);
  }
  img.src = /..starter_code/images/car.png;
  } 



