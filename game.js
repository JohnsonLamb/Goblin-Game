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

//red Goblin Image
var _redGoblinReady = false;
var _redGoblinImage = new Image();
_redGoblinImage.onload = function () {
	_redGoblinReady = true;
};
_redGoblinImage.src = "images/redGoblin.png";

//Bloodlust EMPTY
var _bloodLustEmptyReady = false;
var _bloodLustEmptyImage = new Image();
_bloodLustEmptyImage.onload = function () {
	_bloodLustEmptyReady = true;
};
_bloodLustEmptyImage.src = "images/BloodlustEMPTY.png";

//Bloodlust EMPTY 1
var _bloodLustEmpty1Ready = false;
var _bloodLustEmpty1Image = new Image();
_bloodLustEmpty1Image.onload = function () {
	_bloodLustEmpty1Ready = true;
};
_bloodLustEmpty1Image.src = "images/BloodlustEMPTY1.png";

//Bloodlust EMPTY 2
var _bloodLustEmpty2Ready = false;
var _bloodLustEmpty2Image = new Image();
_bloodLustEmpty2Image.onload = function () {
	_bloodLustEmpty2Ready = true;
};
_bloodLustEmpty2Image.src = "images/BloodlustEMPTY2.png";

//Bloodlust EMPTY 3
var _bloodLustEmpty3Ready = false;
var _bloodLustEmpty3Image = new Image();
_bloodLustEmpty3Image.onload = function () {
	_bloodLustEmpty3Ready = true;
};
_bloodLustEmpty3Image.src = "images/BloodlustEMPTY3.png";

//Bloodlust EMPTY 4
var _bloodLustEmpty4Ready = false;
var _bloodLustEmpty4Image = new Image();
_bloodLustEmpty4Image.onload = function () {
	_bloodLustEmpty4Ready = true;
};
_bloodLustEmpty4Image.src = "images/BloodlustEMPTY4.png";

//Bloodlust FULL
var _bloodLustFullReady = false;
var _bloodLustFullImage = new Image();
_bloodLustFullImage.onload = function () {
	_bloodLustFullReady = true;
};
_bloodLustFullImage.src = "images/BloodlustFULL.png";

//lives 3
var _lives3Ready = false;
var _lives3Image = new Image();
_lives3Image.onload = function () {
	_lives3Ready = true;
};
_lives3Image.src = "images/lives3.png";

//lives 2
var _lives2Ready = false;
var _lives2Image = new Image();
_lives2Image.onload = function () {
	_lives2Ready = true;
};
_lives2Image.src = "images/lives2.png";

//lives 1
var _lives1Ready = false;
var _lives1Image = new Image();
_lives1Image.onload = function () {
	_lives1Ready = true;
};
_lives1Image.src = "images/lives1.png";

//lives 0
var _lives0Ready = false;
var _lives0Image = new Image();
_lives0Image.onload = function () {
	_lives0Ready = true;
};
_lives0Image.src = "images/lives0.png";

//Game Over
var _gameOverReady = false;
var _gameOverImage = new Image();
_gameOverImage.onload = function () {
	_gameOverReady = true;
};
_gameOverImage.src = "images/gameover.png";
//Score
var _scoreReady = false;
var _scoreImage = new Image();
_scoreImage.onload = function () {
	_scoreReady = true;
};
_scoreImage.src = "images/Score.png";

// Game objects
var _hero = {
	speed: 256, // movement in pixels per second
	speedBuff: 30,
	lives: 3,
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

var _redGoblin = {
	speed: 180,
	x: 0,
	y: 0
}

//Map quadrants

var Q11 ={
	x: 50,
	y: 50,
	h: 95,
	w: 145
}
var Q12 ={
	x: 195,
	y: 50,
	h: 95,
	w: 145
}
var Q13 ={
	x: 50,
	y: 145,
	h: 95,
	w: 145
}
var Q14 ={
	x: 195,
	y: 145,
	h: 95,
	w: 145
}
var Q21 ={
	x: 340,
	y: 50,
	h: 95,
	w: 145
}
var Q22 ={
	x: 485,
	y: 50,
	h: 95,
	w: 145
}
var Q23 ={
	x: 340,
	y: 145,
	h: 95,
	w: 145
}
var Q24 ={
	x: 485,
	y: 50,
	h: 95,
	w: 145
}
var Q31 ={
	x: 50,
	y: 240,
	h: 95,
	w: 145
}
var Q32 ={
	x: 195,
	y: 240,
	h: 95,
	w: 145
}
var Q33 ={
	x: 50,
	y: 335,
	h: 95,
	w: 145
}
var Q41 ={
	x: 340,
	y: 240,
	h: 95,
	w: 145
}
var Q42 ={
	x: 485,
	y: 240,
	h: 95,
	w: 145
}
var Q43 ={
	x: 340,
	y: 335,
	h: 95,
	w: 145
}
var Q44 ={
	x: 485,
	y: 335,
	h: 95,
	w: 145
}
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
var _blueGoblinStartTime; //Variable to store the time when the blue goblin Spawns
var _blueGoblinEndTime;	// Variable to store when the Blue Goblin is caught
var _blueGoblinCatchPoints = 0; //NOT IN USE
var _blueGoblinGoodSpawn = false;

var _bloodLust = false; //variable to control the speed boost funtion
var _bloodLustPoints = 0; //varibale to control when bloodlust comes into play

var _redGoblinTouched = false; //varuiable to control if the blue red Goblin is touched
var _redGoblinAppeared = false; // variable to control the appearance of the red goblin
var _redGoblinAppChance = 0.20; //variable to control the probablity of appearance of the red Goblin
var _redGoblinTimeout = 1.5; //variable to control the amount of time the RedGoblin stays alive
var _redGoblinTimerControl; //varibale used to control the SetTimeOut on the red goblin
var _redGoblinCaughtXY = []; //variable to store the coordinates where the red goblin was caught
var _redGoblinGoodSpawn = false //variable to control if the red goblin has a good place to spawn
// Handle keyboard controls
// In order for the game's logic to live solely in once place and to retain tight control over when and if things happen,
// we just want to store the user input for later instead of acting on it immediately.
// To accomplish this we simply have a variable _keysDown which stores any event's keyCode.
// If a key code is in the object, the user is currently pressing that key.

var _keysDown = {};

addEventListener("keydown", function (e) {
	_keysDown[e.keyCode] = true;
	if (e.keyCode != 116){
	e.preventDefault();}
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
	if (_greenGoblinCaught == true && _blueGoblinAppeared == false){
		_blueGoblin.x = 32 + (Math.random() * ((_canvas.width-50) - 64));
		_blueGoblin.y = 32 + (Math.random() * ((_canvas.height-50) - 64));
		_blueGoblinGoodSpawn = true;
	}
	if (_greenGoblinCaught == true && _redGoblinAppeared == false){	
		//throw the redGoblin somewhere in the screen randomly
		_redGoblin.x = 32 + (Math.random() * ((_canvas.width-50) - 64));
		_redGoblin.y = 32 + (Math.random() * ((_canvas.height-50) - 64));
		_redGoblinGoodSpawn = true;
		//console.log(checkQuandrant(_hero.x,_hero.y));
		
	}
		//tried using a while loop but it would occasionaly cause the game to freeze. 
		//need a different method to spawn the red goblin away from the player
		/*while (_redGoblinGoodSpawn == false){
			var auxX = 32 + (Math.random() * ((_canvas.width-50) - 64));
			var auxY = 32 + (Math.random() * ((_canvas.height-50) - 64));
			if (((auxX > _hero.x+300)||(auxX < _hero.x-300))&&((auxY > _hero.y+300)||(auxX < _hero.y-300))){
				_redGoblin.x = auxX;
				_redGoblin.y = auxY;
				_redGoblinGoodSpawn = true;
			}
		}*/
	
};
function checkQuandrant(x,y){
	if (x <= Q12.x && y <=Q13.y){return Q11}
	if (x > Q12.x && x <= Q21.x && y <= Q13.y){return Q12}
	if (x > Q21.x && x <= Q22.x && y <= Q13.y){return Q21}
	if (x > Q22.x && y<= Q13.y){return Q22}
}
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
	// red Goblin Movement towards the player
	
	if (_redGoblin.x < _hero.x){
		_redGoblin.x += _redGoblin.speed * modifier
		}
	if (_redGoblin.x > _hero.x){
		_redGoblin.x -= _redGoblin.speed * modifier
		}
	if (_redGoblin.y <_hero.y){
		_redGoblin.y += _redGoblin.speed * modifier
		}
	if (_redGoblin.y >_hero.y){
		_redGoblin.y -= _redGoblin.speed * modifier
	}
	/*
	Tryoing to give the Goblin a delay but it does not appear smooth
	if (_redGoblin.x < _hero.x){
		setTimeout(function() {
			_redGoblin.x += _redGoblin.speed * modifier;},50)
		}
	if (_redGoblin.x > _hero.x){
		setTimeout(function() {
			_redGoblin.x -= _redGoblin.speed * modifier;},50)
		}
	if (_redGoblin.y <_hero.y){
		setTimeout(function() {
		 _redGoblin.y += _redGoblin.speed * modifier;},50)
		}
	if (_redGoblin.y >_hero.y){
		setTimeout(function() {
		_redGoblin.y -= _redGoblin.speed * modifier},50)
		}
	*/
	//Speed boost when pressing Space BLOODLUST
	//when the player presses the SPACE key, the Hero gets a speed boost for 1 sec
	if (32 in _keysDown && _bloodLust == true){
		_hero.speed = _hero.speed + _hero.speedBuff;
		
		setTimeout(function() {
			_bloodLust = false;
			_hero.speed = 256;
		}, 1 * 1000); //perhaps change the 1 to a variable to adjust the time of the boost
	}
	// Is the hero Touching the Green Goblin?
	if (
		_hero.x <= (_greenGoblin.x + 32)
		&& _greenGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_greenGoblin.y + 32)
		&& _greenGoblin.y <= (_hero.y + 32)
	) {
		++_goblinsCaught;
		//if the player has used the bloodlust speed boost, increase the bloodLustpoints
		if (_bloodLust == false){++_bloodLustPoints}
		//if the player has used the bloodlust speed boost and has accumulated the necessary bloodlust points, gain bloodlust again
		if (_bloodLust == false && _bloodLustPoints == 5){_bloodLust = true;_bloodLustPoints = 0} 
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
		//when a green goblin is caught, randomly make the Red One Appear
		if (Math.random()<_redGoblinAppChance && _redGoblinAppeared == false){
		_redGoblinAppeared = true;
		_redGoblinTimerControl = setTimeout(function() {
			_redGoblinAppeared = false;
			
		}, _redGoblinTimeout * 1000);
		}
		reset();
	}
	//is the hero touching the Blue Goblin?
	if ( _blueGoblinAppeared == true &&
		_blueGoblinGoodSpawn == true &&
		_hero.x <= (_blueGoblin.x + 32)
		&& _blueGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_blueGoblin.y + 32)
		&& _blueGoblin.y <= (_hero.y + 32)
	) {
		++_goblinsCaught;
		_blueGoblinEndTime = new Date();
		var _timeDiff = _blueGoblinEndTime - _blueGoblinStartTime;
		if (_timeDiff < 500){_timeDiff = 500;}
		_pointsBlueGoblinTime = Math.round(_pointsBlueGoblin / (_timeDiff / 1000));
		_pointsTotal += _pointsBlueGoblinTime;
		_blueGoblinCaught = true;
		_blueGoblinCaughtXY = [_blueGoblin.x,_blueGoblin.y]; //registers where the blue goblin was caught to show the points
		_blueGoblinAppeared = false;
		clearTimeout(_blueGoblinTimerControl);
		reset();
	} 
	//is the hero touching the red goblin
	if ( _redGoblinAppeared == true &&
		_redGoblinGoodSpawn == true &&
		_hero.x <= (_redGoblin.x + 32)
		&& _redGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_redGoblin.y + 32)
		&& _redGoblin.y <= (_hero.y + 32)
	) {
		--_hero.lives;
		_redGoblinTouched = true;
		_redGoblinCaughtXY = [_redGoblin.x,_redGoblin.y]; //registers where the red goblin was touched
		_redGoblinAppeared = false;
		clearTimeout(_redGoblinTimerControl);
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
	
	if (_blueGoblinReady && _blueGoblinGoodSpawn) {
			if (_blueGoblinAppeared == true){
			_ctx.drawImage(_blueGoblinImage, _blueGoblin.x, _blueGoblin.y);}
		
	}
	
	if (_redGoblinReady && _redGoblinGoodSpawn) {
			if (_redGoblinAppeared == true){
			_ctx.drawImage(_redGoblinImage, _redGoblin.x, _redGoblin.y);}
		
	}
	
	if (_bloodLust){
		if (_bloodLustFullReady) {
		_ctx.drawImage(_bloodLustFullImage, 50, 0);
		}
	}
	if (_hero.lives == 0){
		if (_gameOverReady) {
			_ctx.drawImage(_gameOverImage, 185, 200);
		}
	}
	switch(_hero.lives){
		case 3:
			if (_lives3Ready) {
					_ctx.drawImage(_lives3Image, 50, 430);
			}
			break;
		case 2:
			if (_lives2Ready) {
					_ctx.drawImage(_lives2Image, 50, 430);
			}
			break;
		case 1:
			if (_lives1Ready) {
					_ctx.drawImage(_lives1Image, 50, 430);
			}
			break;
		case 0:
			if (_lives0Ready) {
					_ctx.drawImage(_lives0Image, 50, 430);
			}
			break;
	}
	
	if (_bloodLust == false){
		switch (_bloodLustPoints){
			case 0:
				if (_bloodLustEmptyReady) {
					_ctx.drawImage(_bloodLustEmptyImage, 50, 0);
				}
				break;
			case 1:
				if (_bloodLustEmpty1Ready) {
					_ctx.drawImage(_bloodLustEmpty1Image, 50, 0);
				}
				break;
			case 2:
				if (_bloodLustEmpty2Ready) {
					_ctx.drawImage(_bloodLustEmpty2Image, 50, 0);
				}
				break;
			case 3:
				if (_bloodLustEmpty3Ready) {
					_ctx.drawImage(_bloodLustEmpty3Image, 50, 0);
				}
				break;
			case 4:
				if (_bloodLustEmpty4Ready) {
					_ctx.drawImage(_bloodLustEmpty4Image, 50, 0);
				}
				break;
		}
		
		
	}	
	if (_scoreReady) {
		_ctx.drawImage(_scoreImage, 400, 0);
	}
	
	// Score
	_ctx.fillStyle = "rgb(255, 216, 0)";
	_ctx.font = "38px Harrington";
	_ctx.textAlign = "left";
	_ctx.textBaseline = "top";
	_ctx.shadowColor = "black";
	_ctx.shadowOffsetX = 3;
    _ctx.shadowOffsetY = 3;
	_ctx.shadowBlur = 10;
	//_ctx.fillText("Goblins caught: " + _greenGoblinsCaught, 50, 5); OLD display of monsters caught
	_ctx.fillText(_pointsTotal + " pts", 510, -5);
	
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
	if (_hero.lives != 0){
	requestAnimationFrame(main);}else{ _render()}
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();

