// Create the canvas
var _canvas = document.createElement("canvas");
_canvas.setAttribute("id", "theGame");
var _ctx = _canvas.getContext("2d"); //will be used to issue draw commands
_canvas.width = 680;
_canvas.height = 480;
document.getElementById("gameCanvas").appendChild(_canvas);

// Background image
var _bgReady = false; //used to know when it's safe to draw the image
var _bgImage = new Image();
_bgImage.onload = function () {
	_bgReady = true;
};
_bgImage.src = "images/background.png";

// Hero image
var _heroReady = false;
var _heroImage = new Image();
_heroImage.onload = function () {
	_heroReady = true;
};
_heroImage.src = "images/hero.png";

// Monster image
var _monsterReady = false;
var _monsterImage = new Image();
_monsterImage.onload = function () {
	_monsterReady = true;
};
_monsterImage.src = "images/goblin.png";

// Game objects
var _hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var _monster = {
	x: 0,
	y: 0
};
var _monstersCaught = 0;

// Handle keyboard controls
// In order for the game's logic to live solely in once place and to retain tight control over when and if things happen,
// we just want to store the user input for later instead of acting on it immediately.
// To accomplish this we simply have a variable _keysDown which stores any event's keyCode.
// If a key code is in the object, the user is currently pressing that key.

var _keysDown = {};

addEventListener("keydown", function (e) {
	_keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete _keysDown[e.keyCode];
}, false);

//New Game
// Reset the game when the player catches a monster
var reset = function () {
	
	if (_monstersCaught == 0){
	_hero.x = _canvas.width / 2;
	_hero.y = _canvas.height / 2;
	}

	// Throw the monster somewhere on the screen randomly
	_monster.x = 32 + (Math.random() * (_canvas.width - 64));
	_monster.y = 32 + (Math.random() * (_canvas.height - 64));
};

// Update game objects
//the modifier variable is used to control the speed in which the Hero moves indepently of the speed the script is executed
var _update = function (modifier) {
	if (38 in _keysDown) { // Player holding up
		_hero.y -= _hero.speed * modifier;
	}
	if (40 in _keysDown) { // Player holding down
		_hero.y += _hero.speed * modifier;
	}
	if (37 in _keysDown) { // Player holding left
		_hero.x -= _hero.speed * modifier;
	}
	if (39 in _keysDown) { // Player holding right
		_hero.x += _hero.speed * modifier;
	}

	// Are they touching?
	if (
		_hero.x <= (_monster.x + 32)
		&& _monster.x <= (_hero.x + 32)
		&& _hero.y <= (_monster.y + 32)
		&& _monster.y <= (_hero.y + 32)
	) {
		++_monstersCaught;
		reset();
	}
};

// Draw everything
var _render = function () {
	if (_bgReady) {
		_ctx.drawImage(_bgImage, 0, 0);
	}

	if (_heroReady) {
		_ctx.drawImage(_heroImage, _hero.x, _hero.y);
	}

	if (_monsterReady) {
		_ctx.drawImage(_monsterImage, _monster.x, _monster.y);
	}

	// Score
	_ctx.fillStyle = "rgb(250, 250, 250)";
	_ctx.font = "24px Helvetica";
	_ctx.textAlign = "left";
	_ctx.textBaseline = "top";
	_ctx.shadowColor = "black";
	_ctx.shadowOffsetX = 3;
    _ctx.shadowOffsetY = 3;
	_ctx.shadowBlur = 4;
	_ctx.fillText("Goblins caught: " + _monstersCaught, 50, 5);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	_update(delta / 1000);
	_render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();

