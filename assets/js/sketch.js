var dragY = 400;
var currentY = 400;
var midY = 400;
var characterBase, characterHead, characterHands;
var characterSize = { width: 157, height: 284};
var characterOffsetY = 242;
var canvasHeight = 560;

function preload() {
	characterBase = loadImage('/assets/images/picture_character_base_3x.png');
	characterHead = loadImage('/assets/images/picture_character_head_3x.png');
	characterHands = loadImage('/assets/images/picture_character_hands_3x.png');
}

function setup() {
  var canvas = createCanvas(window.innerWidth, canvasHeight);
  canvas.parent("hero-background");
}

function windowResized(){
  resizeCanvas(window.innerWidth, canvasHeight);
}

function draw() {
  background(255);
	
	currentY -= (currentY - dragY) * 0.1;
	var p0 = { x: 0, y: 0 };
	var p1 = { x: 0, y: midY };
	var c1 = { x: 0, y: midY };
	var p2 = { x: width/2, y: currentY };
	var c2l = { x: width*1/4, y: currentY };
	var c2r = { x: width*3/4, y: currentY };
	var p3 = { x: width, y: midY };
	var c3 = { x: width, y: midY };
	var p4 = { x: width, y: 0 };
	
	noStroke();
	fill(189, 33, 193);
	beginShape();
	vertex(p0.x, p0.y);
	vertex(p1.x, p1.y);
	bezierVertex(c1.x, c1.y, c2l.x, c2l.y, p2.x, p2.y);
	bezierVertex(c2r.x, c2r.y, c3.x, c3.y, p3.x, p3.y);
	vertex(p4.x, p4.y);
	endShape(CLOSE);

	image(characterBase, (width - characterSize.width)/2, currentY - characterOffsetY, characterSize.width, characterSize.height);
	image(characterHead, (width - characterSize.width)/2, currentY - characterOffsetY, characterSize.width, characterSize.height);
	image(characterHands, (width - characterSize.width)/2, currentY - characterOffsetY, characterSize.width, characterSize.height);
}

function mouseDragged() {
	dragY = min(max(mouseY, height - 400), height - (characterSize.height - characterOffsetY));
}

function mousePressed() {
	dragY = min(max(mouseY, height - 400), height - (characterSize.height - characterOffsetY));
}

function mouseReleased() {
	dragY = midY;
}