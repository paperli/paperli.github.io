function setup() {
	var myCanvas = createCanvas(window.innerWidth, 300);
	myCanvas.parent("hero-background");
}

function draw() {
	background(220);
	ellipse(window.innerWidth/2, 0, window.innerWidth/2, window.innerWidth/2);
}