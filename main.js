var gameBoard = document.getElementById('board');
var background = document.getElementById('background');
var boardctx = gameBoard.getContext('2d');
var backgroundctx = background.getContext('2d');

var vehicles = [];
var frogger = {
	x: 4*55,
	y: 600,
	img: 'images/frogger_up.png',
	alive:true
};

getBoard = function(){
	var road = new Image();
	road.src='images/road.gif';
	road.onload = function(){
		for(var i=0; i<8; i++){
			backgroundctx.drawImage(road, i*55, 0, 55, 325);
			backgroundctx.drawImage(road, i*55, 325, 55, 325);
		}
	}
}
drawCars = function(){
	for(var i in vehicles){
		boardctx.drawImage(vehicles[i].img, vehicles[i].x, vehicles[i].y, 50, 50);
	}
}
moveCars = function(){
	for(var i=0; i<vehicles.length; i++){
		vehicles[i].y += vehicles[i].speed;
	}
}
addCar = function(){
	var car = {}
	var img = new Image();
	img.src = 'images/car1_down.png';
	car.img = img;
	car.x=0;
	car.y=0;
	car.speed=2.5;
	vehicles.push(car);
}
drawFrogger = function(frogger){
	var img = new Image();
	img.src = frogger.img;
	img.onload = function(){
		boardctx.clearRect(0,0,440,650);
		boardctx.drawImage(img, frogger.x, frogger.y, 50, 50);
	}
}
moveUp = function(frogger){
	if(frogger.y >= 50)
		frogger.y-=50;
}
moveDown = function(frogger){
	if(frogger.y < 600)
		frogger.y+=50;
}
moveLeft = function(frogger){
	if(frogger.x >= 55)
		frogger.x-=55;
}
moveRight = function(frogger){
	if(frogger.x < 385)
		frogger.x+=55;
}
document.onkeydown = function(e){
	// Up
	if(e.keyCode === 38){
		frogger.img = 'images/frogger_up.png';
		moveUp(frogger);
	}
	// Down
	else if(e.keyCode === 40){
		frogger.img = 'images/frogger_down.png';
		moveDown(frogger);
	}
	// Left
	else if(e.keyCode === 37){
		frogger.img = 'images/frogger_left.png';
		moveLeft(frogger);
	}
	// Right
	else if(e.keyCode === 39){
		frogger.img = 'images/frogger_right.png';
		moveRight(frogger);
	}

}
updateBoard = function(){
	drawCars();
	moveCars();
	drawFrogger(frogger);
}
getBoard();
frame = function(){
	updateBoard();
	requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
