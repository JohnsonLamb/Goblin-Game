// Create the canvas
var _canvas = document.createElement("canvas");
_canvas.setAttribute("id", "theGame");
var _ctx = _canvas.getContext("2d"); //will be used to issue draw commands
_canvas.width = 680;
_canvas.height = 480;
document.getElementById("gameCanvas").appendChild(_canvas);

// --- Images ---

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

// Green Goblin image
var _greenGoblinReady = false;
var _greenGoblinImage = new Image();
_greenGoblinImage.onload = function () {
	_greenGoblinReady = true;
};
_greenGoblinImage.src = "images/greenGoblin.png";

//Blue Goblin Image
var _blueGoblinReady = false;
var _blueGoblinImage = new Image();
_blueGoblinImage.onload = function () {
	_blueGoblinReady = true;
};
_blueGoblinImage.src = "images/blueGoblin.png";

// Game objects
var _hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var _greenGoblin = {
	x: 0,
	y: 0
};
var _blueGoblin = {
	x:120,
	y:120
};

// Game Score
var _goblinsCaught = 0; // total goblins caught
var _pointsGreenGoblin = 5;
var _pointsBlueGoblin = 50; // variable that holds the Blue Goblin Points standard
var _pointsBlueGoblinTime = 0; //variable to hold the time dependent points the player gets for catching the Blue Goblin
var _pointsTotal = 0;
var _pointsDisplayTime = 0.5; //varibale to control the amount of time the single goblin score is shown 
var _greenGoblinCaught = false; //varibale to control if the green goblin is caught
var _blueGoblinCaught = false; //varuiable to control if the blue goblin is caught
var _blueGoblinCaughtXY = []; //variable to store the coordinates where the blue goblin was caught
var _blueGoblinAppeared = false; // variable to control the appearance of the blue goblin
var _blueGoblinAppChance = 0.3; //variable to control the probablity of appearance of the blue Goblin
var _blueGoblinTimeout = 1.5; //variable to control the amount of time the BlueGoblin stays alive
var _blueGoblinTimerControl; //varibale used to control the SetTimeOut on the blue goblin
var _blueGoblinStartTime;
var _blueGoblinEndTime;
var _blueGoblinCatchPoints = 0;

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
	
	if (_goblinsCaught == 0){
	_hero.x = _canvas.width / 2;
	_hero.y = _canvas.height / 2;
	}

	// Throw the Green Goblin somewhere on the screen randomly
	// The 50 subtracted to the height is to account for the Hero's movement restrictions. So that goblins don't spawn out of reach
	// Why 50? First I used the width/height minus the pixels I restricted in the hero's update function (90 for width and 80 for height)
	// Seemed a bit too much because spwans were more towards the inner part to the play area so reduced it to 50.
	if (_greenGoblinCaught == true || _goblinsCaught == 0 ){
		_greenGoblin.x = 32 + (Math.random() * ((_canvas.width-50) - 64));
		_greenGoblin.y = 32 + (Math.random() * ((_canvas.height-50) - 64)); 
	}
	//Throw the Blue goblin somewhere on screen randomly
	if (_blueGoblinCaught == true || _goblinsCaught == 0){
		_blueGoblin.x = 32 + (Math.random() * ((_canvas.width-50) - 64));
		_blueGoblin.y = 32 + (Math.random() * ((_canvas.height-50) - 64));
	}
};

// Update game objects
//the modifier variable is used to control the speed in which the Hero moves indepently of the speed the script is executed
var _update = function (modifier) {
	//on top of checking where the player is intending to move the character, this function also checks to see if the Hero 
	//is within the intended bounds. The hero is supposed to just move a bit into the bushes and not pass them
	
	if (38 in _keysDown && _hero.y >10) { // Player holding up 
		_hero.y -= _hero.speed * modifier;
	}
	if (40 in _keysDown && _hero.y<410) { // Player holding down
		_hero.y += _hero.speed * modifier;
	}
	if (37 in _keysDown && _hero.x >25) { // Player holding left
		_hero.x -= _hero.speed * modifier;
	}
	if (39 in _keysDown && _hero.x<615) { // Player holding right
		_hero.x += _hero.speed * modifier;
	}

	// Is the hero Touching the Green Goblin?
	if (
		_hero.x <= (_greenGoblin.x + 32)
		&& _greenGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_greenGoblin.y + 32)
		&& _greenGoblin.y <= (_hero.y + 32)
	) {
		++_goblinsCaught;
		_pointsTotal += _pointsGreenGoblin;
		_greenGoblinCaught = true;
		//when a green goblin is caught, randomly make the Blue One Appear
		if (Math.random()<_blueGoblinAppChance && _blueGoblinAppeared == false){
		_blueGoblinAppeared = true;
		_blueGoblinTimerControl = setTimeout(function() {
			_blueGoblinAppeared = false;
			
		}, _blueGoblinTimeout * 1000);
		_blueGoblinStartTime = new Date();
		}
		reset();
	}
	//is the hero touching the Blue Goblin?
	if ( _blueGoblinAppeared == true &&
		_hero.x <= (_blueGoblin.x + 32)
		&& _blueGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_blueGoblin.y + 32)
		&& _blueGoblin.y <= (_hero.y + 32)
	) {
		++_goblinsCaught;
		_blueGoblinEndTime = new Date();
		var _timeDiff = _blueGoblinEndTime - _blueGoblinStartTime;
		if (_timeDiff == 0){_timeDiff = 3000;}
		_pointsBlueGoblinTime = Math.round(_pointsBlueGoblin / (_timeDiff / 1000));
		_pointsTotal += _pointsBlueGoblinTime;
		_blueGoblinCaught = true;
		_blueGoblinCaughtXY = [_blueGoblin.x,_blueGoblin.y]; //registers where the blue goblin was caught to show the points
		_blueGoblinAppeared = false;
		clearTimeout(_blueGoblinTimerControl);
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

	if (_greenGoblinReady) {
		_ctx.drawImage(_greenGoblinImage, _greenGoblin.x, _greenGoblin.y);
	}
	
	if (_blueGoblinReady) {
			if (_blueGoblinAppeared == true){
			_ctx.drawImage(_blueGoblinImage, _blueGoblin.x, _blueGoblin.y);}
		
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
	//_ctx.fillText("Goblins caught: " + _greenGoblinsCaught, 50, 5); OLD display of monsters caught
	_ctx.fillText("SCORE: "+_pointsTotal + " pts", 450, 5);
	
	//If a goblin was caught, display the points gained
	if (_blueGoblinCaught == true){
	_ctx.fillText(_pointsBlueGoblinTime + " pts", _blueGoblinCaughtXY[0], _blueGoblinCaughtXY[1]);
		setTimeout(function() {
			_blueGoblinCaught = false;
		}, _pointsDisplayTime * 1000);
		--_blueGoblinCaughtXY[1];
	}
	if (_greenGoblinCaught == true){_greenGoblinCaught = false;} //when the player catches a blue goblin this ensures that a new green goblin is not spawned.
	/*
	//test to see the hero coordinates:
	_ctx.fillText("Y: " + _hero.y, 50, 25);
	_ctx.fillText("X: " + _hero.x, 50, 55);
	*/
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

