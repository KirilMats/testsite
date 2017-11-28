var canvas = document.getElementById('canvas_desc');
var context = canvas.getContext('2d');
var radius = 5;
var dragging = false;

var w = 560;
var h = 570;

canvas.width = w;
canvas.height = h;

context.lineWidth = radius*2;


var putPoint = function(e) {	
	if(dragging){
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	context.beginPath();
	context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(e.offsetX, e.offsetY);
	}
}
var engage = function(e) {
	dragging = true;
	putPoint(e);
}
var	disengage = function(e) {
	dragging = false;
	context.beginPath(e);
}

canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);

var setRadius = function(newRadius) {
	if(newRadius<minRad)
		newRadius = minRad;
	else if(newRadius>maxRad)
		newRadius = maxRad;
	radius = newRadius;
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;
}
var minRad = 1,
	maxRad = 100,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');
	interval = 1,

	decRad.addEventListener('click', function(){
		setRadius(radius-interval);
	})
	incRad.addEventListener('click', function(){
		setRadius(radius+interval);
	})

	cleanall.addEventListener('click', function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
	})
