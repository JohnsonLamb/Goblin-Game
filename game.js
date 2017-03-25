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

// Hero image Berserk
var _heroBerserkReady = false;
var _heroBerserkImage = new Image();
_heroBerserkImage.onload = function () {
	_heroBerserkReady = true;
};
_heroBerserkImage.src = "images/heroBerserk.png";

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

//Restart
var _restartReady = false;
var _restartImage = new Image();
_restartImage.onload = function () {
	_restartReady = true;
};
_restartImage.src = "images/restart.png";

//Restart Selected
var _restartSelectedReady = false;
var _restartSelectedImage = new Image();
_restartSelectedImage.onload = function () {
	_restartSelectedReady = true;
};
_restartSelectedImage.src = "images/restartSelected.png";

//High Score
var _highScoreReady = false;
var _highScoreImage = new Image();
_highScoreImage.onload = function () {
	_highScoreReady = true;
};
_highScoreImage.src = "images/highscore.png";

//BloodRage 0 Charges
var _bloodRage0Ready = false;
var _bloodRage0Image = new Image();
_bloodRage0Image.onload = function () {
	_bloodRage0Ready = true;
};
_bloodRage0Image.src = "images/bloodRage0.png";

//BloodRage 0.1 Charges
var _bloodRage01Ready = false;
var _bloodRage01Image = new Image();
_bloodRage01Image.onload = function () {
	_bloodRage01Ready = true;
};
_bloodRage01Image.src = "images/bloodRage01.png";

//BloodRage 0.2 Charges
var _bloodRage02Ready = false;
var _bloodRage02Image = new Image();
_bloodRage02Image.onload = function () {
	_bloodRage02Ready = true;
};
_bloodRage02Image.src = "images/bloodRage02.png";

//BloodRage 0.3 Charges
var _bloodRage03Ready = false;
var _bloodRage03Image = new Image();
_bloodRage03Image.onload = function () {
	_bloodRage03Ready = true;
};
_bloodRage03Image.src = "images/bloodRage03.png";

//BloodRage 0.4 Charges
var _bloodRage04Ready = false;
var _bloodRage04Image = new Image();
_bloodRage04Image.onload = function () {
	_bloodRage04Ready = true;
};
_bloodRage04Image.src = "images/bloodRage04.png";

//BloodRage 0.5 Charges
var _bloodRage05Ready = false;
var _bloodRage05Image = new Image();
_bloodRage05Image.onload = function () {
	_bloodRage05Ready = true;
};
_bloodRage05Image.src = "images/bloodRage05.png";

//BloodRage 1 Charges
var _bloodRage1Ready = false;
var _bloodRage1Image = new Image();
_bloodRage1Image.onload = function () {
	_bloodRage1Ready = true;
};
_bloodRage1Image.src = "images/bloodRage1.png";

//BloodRage 1.1 Charges
var _bloodRage11Ready = false;
var _bloodRage11Image = new Image();
_bloodRage11Image.onload = function () {
	_bloodRage11Ready = true;
};
_bloodRage11Image.src = "images/bloodRage11.png";

//BloodRage 1.2 Charges
var _bloodRage12Ready = false;
var _bloodRage12Image = new Image();
_bloodRage12Image.onload = function () {
	_bloodRage12Ready = true;
};
_bloodRage12Image.src = "images/bloodRage12.png";

//BloodRage 1.3 Charges
var _bloodRage13Ready = false;
var _bloodRage13Image = new Image();
_bloodRage13Image.onload = function () {
	_bloodRage13Ready = true;
};
_bloodRage13Image.src = "images/bloodRage13.png";

//BloodRage 1.4 Charges
var _bloodRage14Ready = false;
var _bloodRage14Image = new Image();
_bloodRage14Image.onload = function () {
	_bloodRage14Ready = true;
};
_bloodRage14Image.src = "images/bloodRage14.png";

//BloodRage 1.5 Charges
var _bloodRage15Ready = false;
var _bloodRage15Image = new Image();
_bloodRage15Image.onload = function () {
	_bloodRage15Ready = true;
};
_bloodRage15Image.src = "images/bloodRage15.png";

//BloodRage 2 Charges
var _bloodRage2Ready = false;
var _bloodRage2Image = new Image();
_bloodRage2Image.onload = function () {
	_bloodRage2Ready = true;
};
_bloodRage2Image.src = "images/bloodRage2.png";

//BloodRage 2.1 Charges
var _bloodRage21Ready = false;
var _bloodRage21Image = new Image();
_bloodRage21Image.onload = function () {
	_bloodRage21Ready = true;
};
_bloodRage21Image.src = "images/bloodRage21.png";

//BloodRage 2.2 Charges
var _bloodRage22Ready = false;
var _bloodRage22Image = new Image();
_bloodRage22Image.onload = function () {
	_bloodRage22Ready = true;
};
_bloodRage22Image.src = "images/bloodRage22.png";

//BloodRage 2.3 Charges
var _bloodRage23Ready = false;
var _bloodRage23Image = new Image();
_bloodRage23Image.onload = function () {
	_bloodRage23Ready = true;
};
_bloodRage23Image.src = "images/bloodRage23.png";

//BloodRage 2.4 Charges
var _bloodRage24Ready = false;
var _bloodRage24Image = new Image();
_bloodRage24Image.onload = function () {
	_bloodRage24Ready = true;
};
_bloodRage24Image.src = "images/bloodRage24.png";

//BloodRage 2.5 Charges
var _bloodRage25Ready = false;
var _bloodRage25Image = new Image();
_bloodRage25Image.onload = function () {
	_bloodRage25Ready = true;
};
_bloodRage25Image.src = "images/bloodRage25.png";

//BloodRage 3 Charges
var _bloodRage3Ready = false;
var _bloodRage3Image = new Image();
_bloodRage3Image.onload = function () {
	_bloodRage3Ready = true;
};
_bloodRage3Image.src = "images/bloodRage3.png";

//Mushroom
var _mushroomReady = false;
var _mushroomImage = new Image();
_mushroomImage.onload = function () {
	_mushroomReady = true;
};
_mushroomImage.src = "images/mushroom.png";

//Berserk 0
var _berserk0Ready = false;
var _berserk0Image = new Image();
_berserk0Image.onload = function () {
	_berserk0Ready = true;
};
_berserk0Image.src = "images/berserk0.png";

//Berserk 1
var _berserk1Ready = false;
var _berserk1Image = new Image();
_berserk1Image.onload = function () {
	_berserk1Ready = true;
};
_berserk1Image.src = "images/berserk1.png";

//Berserk 2
var _berserk2Ready = false;
var _berserk2Image = new Image();
_berserk2Image.onload = function () {
	_berserk2Ready = true;
};
_berserk2Image.src = "images/berserk2.png";

//Berserk 3
var _berserk3Ready = false;
var _berserk3Image = new Image();
_berserk3Image.onload = function () {
	_berserk3Ready = true;
};
_berserk3Image.src = "images/berserk3.png";

//High Score Top Left
var _highscoreTopReady = false;
var _highscoreTopImage = new Image();
_highscoreTopImage.onload = function () {
	_highscoreTopReady = true;
};
_highscoreTopImage.src = "images/highscoreTop.png";

// Game objects
var _hero = {
	speed: 256, // movement in pixels per second
	speedBuff: 30,
	lives: 3,
	x: 0,
	y: 0,
};
var _greenGoblin = {
	x: 0,
	y: 0
};
var _blueGoblin = {
	x:120,
	y:120,
	shroomRate: 0.2 //chance to drop mushroom
};

var _redGoblin = {
	speed: 180,
	x: 0,
	y: 0,
	points: 50,
	pointsEnable: false, //variable to control if the red Goblin has been caught with berserk active. Used to display the floating points text
	pointsDuration: 0.5,
}

var _mushroom = {
	x:0,
	y:0,
	dropped: false, //control if the mushroom has been droped or not
	show: false, //to be used in the timer that delays slightly the appearance of the mushroom in order for the player not to pick it up without realizing
	delay: 0.6, //delay time for showing the mushroom in seconds
	points: 50, //number of points the player gets if he has full mushroom charges
	duration: 3, //number of seconds the mushrooms stays available for pick up
	timeCtrl:"", //variable to be used to stop the timer when the mushroom is picked up
	pointsEnable: false, //variable to control if the mushroom has been caught after berserk charges are full. Used to display the floating points text when the Berserk charges are full
	pointsDuration: 0.5,
}

//Map quadrants

var Q11 ={
	q: "Q11",
	x: 50,
	y: 50,
	h: 95,
	w: 145
}
var Q12 ={
	q: "Q12",
	x: 195,
	y: 50,
	h: 95,
	w: 145
}
var Q13 ={
	q: "Q13",
	x: 50,
	y: 145,
	h: 95,
	w: 145
}
var Q14 ={
	q: "Q14",
	x: 195,
	y: 145,
	h: 95,
	w: 145
}
var Q21 ={
	q: "Q21",
	x: 340,
	y: 50,
	h: 95,
	w: 145
}
var Q22 ={
	q: "Q22",
	x: 485,
	y: 50,
	h: 95,
	w: 145
}
var Q23 ={
	q: "Q23",
	x: 340,
	y: 145,
	h: 95,
	w: 145
}
var Q24 ={
	q: "Q24",
	x: 485,
	y: 50,
	h: 95,
	w: 145
}
var Q31 ={
	q: "Q31",
	x: 50,
	y: 240,
	h: 95,
	w: 145
}
var Q32 ={
	q: "Q32",
	x: 195,
	y: 240,
	h: 95,
	w: 145
}
var Q33 ={
	q: "Q33",
	x: 50,
	y: 335,
	h: 95,
	w: 145
}
var Q34 ={
	q: "Q34",
	x: 195,
	y: 335,
	h: 95,
	w: 145
}
var Q41 ={
	q: "Q41",
	x: 340,
	y: 240,
	h: 95,
	w: 145
}
var Q42 ={
	q: "Q42",
	x: 485,
	y: 240,
	h: 95,
	w: 145
}
var Q43 ={
	q: "Q43",
	x: 340,
	y: 335,
	h: 95,
	w: 145
}
var Q44 ={
	q: "Q44",
	x: 485,
	y: 335,
	h: 95,
	w: 145
}
// Game Score
var _goblinsCaught = 0; // total goblins caught
var _greenGoblinsCaught = 0; 
var _blueGoblinsCaught = 0;
var _redGoblinsCaught = 0;
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
var _blueGoblinTimeout = 2; //variable to control the amount of time the BlueGoblin stays alive
var _blueGoblinTimerControl; //varibale used to control the SetTimeOut on the blue goblin
var _blueGoblinStartTime; //Variable to store the time when the blue goblin Spawns
var _blueGoblinEndTime;	// Variable to store when the Blue Goblin is caught
var _blueGoblinCatchPoints = 0; //NOT IN USE
var _blueGoblinGoodSpawn = false;

var _highScore = 0; //variable to store the Highscore obtained in the play session. It will be displayed on the Game over Screen

var _bloodLust = false; //variable to control the speed boost funtion
var _bloodLustPoints = 0; //varibale to control when bloodlust comes into play

var _bloodRage ={
	speed: 300,
	duration: 1,	//bloodRage time in seconds
	active: false, //bloodrage is active or not
	maxCharges: 3, //number of maximum charges
	chargeRefill: 5, //number of green goblins that need to be killed to fill up one chargeRefill
	charges: 0, //current number of charges
	refill: 0, //current number on the refill meter
}

var _berserk ={
	active: false, //berserk is active or not
	duration: 1.5, //duration of the effect in seconds
	maxCharges: 3, //maxumim number of charges
	charges: 0 //current number of charges
}

var _redGoblinTouched = false; //varuiable to control if the blue red Goblin is touched
var _redGoblinAppeared = false; // variable to control the appearance of the red goblin
var _redGoblinAppChance = 0.20; //variable to control the probablity of appearance of the red Goblin
var _redGoblinTimeout = 2; //variable to control the amount of time the RedGoblin stays alive
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
	//prevent the default function of the arrow keys, space and shift
	if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32 || e.keyCode == 16 ){
	e.preventDefault();}
}, false);

addEventListener("keyup", function (e) {
	delete _keysDown[e.keyCode];
}, false);

//New Game
// Reset the game when the player catches a monster
var reset = function () {
	var Quad = checkQuandrant(_hero.x,_hero.y).q; //local variable to hold the Quandrant where the hero is located
	var RedQuadSpawn = Q11; //local varibale to store the quadrant where the red goblin will spawn 
	var Rand = Math.random(); // Local variable to store the random number calculation (this calculation is done only once)
	
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
		if (Math.random()<_blueGoblinAppChance && _blueGoblinAppeared == false){
		_blueGoblinAppeared = true;
		_blueGoblinTimerControl = setTimeout(function() {
			_blueGoblinAppeared = false;
			
		}, _blueGoblinTimeout * 1000);
		_blueGoblinStartTime = new Date();
		_blueGoblin.x = 32 + (Math.random() * ((_canvas.width-50) - 64));
		_blueGoblin.y = 32 + (Math.random() * ((_canvas.height-50) - 64));
		_blueGoblinGoodSpawn = true;
		}
		
	}
	
	//Make the mushroom appear
	if (_blueGoblinCaught == true){
	if (_mushroom.dropped == false && Math.random() < _blueGoblin.shroomRate){
			_mushroom.dropped = true
			_mushroom.x = _blueGoblinCaughtXY[0];
			_mushroom.y = _blueGoblinCaughtXY[1];
			//give a little bit of time before the mushroom appears in order for the player to not pick it up without realizing
			setTimeout(function() {
				_mushroom.show = true;
				_mushroom.timeCtrl = setTimeout(function() {
					_mushroom.show = false;
					_mushroom.dropped = false;
				}, _mushroom.duration * 1000);
			}, _mushroom.delay * 1000);
		}
	}
	//spawn the Red Goblin somewhere
	if (_greenGoblinCaught == true && _redGoblinAppeared == false){	
		//throw the redGoblin somewhere in the screen randomly
		if (Math.random()<_redGoblinAppChance && _redGoblinAppeared == false){
		_redGoblinAppeared = true;
		_redGoblinTimerControl = setTimeout(function() {
			_redGoblinAppeared = false;
			
		}, _redGoblinTimeout * 1000);
		
		if (Quad == "Q11"){
			//the goblin can spawn in the following quandrants: Q22, Q24, Q42, Q44, Q43, Q34, Q33
			//There are a total of 7 quandrants that the red Goblin can appear
			//the Math.random will be used to decide which quadrants by dividing the interval [0-1] into 7 equal parts 
			if (Rand <= 0.1429){RedQuadSpawn = Q22}
			if (Rand > 0.1429 && Rand <= 0.2848){RedQuadSpawn = Q24}
			if (Rand > 0.2848 && Rand <= 0.4287){RedQuadSpawn = Q42}
			if (Rand > 0.4287 && Rand <= 0.5716){RedQuadSpawn = Q44}
			if (Rand > 0.5716 && Rand <= 0.7145){RedQuadSpawn = Q43}
			if (Rand > 0.7145 && Rand <= 0.8574){RedQuadSpawn = Q34}
			if (Rand > 0.8574 ){RedQuadSpawn = Q33}
		}
		if (Quad == "Q22"){
			//the goblin can spawn in the following quandrants: Q33, Q34, Q43, Q44, Q31, Q13, Q11
			//There are a total of 7 quandrants that the red Goblin can appear
			if (Rand <= 0.1429){RedQuadSpawn = Q33}
			if (Rand > 0.1429 && Rand <= 0.2848){RedQuadSpawn = Q34}
			if (Rand > 0.2848 && Rand <= 0.4287){RedQuadSpawn = Q43}
			if (Rand > 0.4287 && Rand <= 0.5716){RedQuadSpawn = Q44}
			if (Rand > 0.5716 && Rand <= 0.7145){RedQuadSpawn = Q31}
			if (Rand > 0.7145 && Rand <= 0.8574){RedQuadSpawn = Q13}
			if (Rand > 0.8574 ){RedQuadSpawn = Q11}
		}
		if (Quad == "Q33"){
			//the goblin can spawn in the following quandrants: Q11, Q12, Q21 Q22, Q24, Q42, Q44
			//There are a total of 7 quandrants that the red Goblin can appear
			if (Rand <= 0.1429){RedQuadSpawn = Q11}
			if (Rand > 0.1429 && Rand <= 0.2848){RedQuadSpawn = Q12}
			if (Rand > 0.2848 && Rand <= 0.4287){RedQuadSpawn = Q21}
			if (Rand > 0.4287 && Rand <= 0.5716){RedQuadSpawn = Q22}
			if (Rand > 0.5716 && Rand <= 0.7145){RedQuadSpawn = Q24}
			if (Rand > 0.7145 && Rand <= 0.8574){RedQuadSpawn = Q42}
			if (Rand > 0.8574){RedQuadSpawn = Q44}
		}
		if (Quad == "Q44"){
			//the goblin can spawn in the following quandrants: Q33, Q31, Q13, Q11, Q12, Q21, Q22
			//There are a total of 7 quandrants that the red Goblin can appear
			if (Rand <= 0.1429){RedQuadSpawn = Q33}
			if (Rand > 0.1429 && Rand <= 0.2848){RedQuadSpawn = Q31}
			if (Rand > 0.2848 && Rand <= 0.4287){RedQuadSpawn = Q13}
			if (Rand > 0.4287 && Rand <= 0.5716){RedQuadSpawn = Q11}
			if (Rand > 0.5716 && Rand <= 0.7145){RedQuadSpawn = Q12}
			if (Rand > 0.7145 && Rand <= 0.8574){RedQuadSpawn = Q21}
			if (Rand > 0.8574){RedQuadSpawn = Q22}
		}
		if (Quad == "Q12"  || Quad == "Q21"){
			//the goblin can spawn in the following quandrants: Q33, Q34, Q43, Q44
			//There are a total of 4 quandrants that the red Goblin can appear
			if (Rand <= 0.25){RedQuadSpawn = Q33}
			if (Rand > 0.25 && Rand <= 0.50){RedQuadSpawn = Q34}
			if (Rand > 0.50 && Rand <= 0.75){RedQuadSpawn = Q43}
			if (Rand > 0.75){RedQuadSpawn = Q44}
		}
		if (Quad == "Q13" || Quad == "Q31" || Quad == "Q14" || Quad == "Q32"){
			//the goblin can spawn in the following quandrants: Q22, Q24, Q42, Q44
			//There are a total of 4 quandrants that the red Goblin can appear
			if (Rand <= 0.25){RedQuadSpawn = Q22}
			if (Rand > 0.25 && Rand <= 0.50){RedQuadSpawn = Q24}
			if (Rand > 0.50 && Rand <= 0.75){RedQuadSpawn = Q42}
			if (Rand > 0.75){RedQuadSpawn = Q44}
		}
		if (Quad == "Q23" || Quad == "Q24" || Quad == "Q42" || Quad == "Q41"){
			//the goblin can spawn in the following quandrants: Q11, Q13, Q31, Q33
			//There are a total of 4 quandrants that the red Goblin can appear
			if (Rand <= 0.25){RedQuadSpawn = Q11}
			if (Rand > 0.25 && Rand <= 0.50){RedQuadSpawn = Q13}
			if (Rand > 0.50 && Rand <= 0.75){RedQuadSpawn = Q31}
			if (Rand > 0.75){RedQuadSpawn = Q33}
		}
		if (Quad == "Q34" || Quad == "Q43"){
			//the goblin can spawn in the following quandrants: Q11, Q12, Q21, Q22
			//There are a total of 4 quandrants that the red Goblin can appear
			if (Rand <= 0.25){RedQuadSpawn = Q11}
			if (Rand > 0.25 && Rand <= 0.50){RedQuadSpawn = Q12}
			if (Rand > 0.50 && Rand <= 0.75){RedQuadSpawn = Q21}
			if (Rand > 0.75){RedQuadSpawn = Q22}
		}
		_redGoblin.x = RedQuadSpawn.x + (Math.random() * RedQuadSpawn.w);
		_redGoblin.y = RedQuadSpawn.y + (Math.random() * RedQuadSpawn.h);
		_redGoblinGoodSpawn = true;
		}
	}	
};
function checkQuandrant(x,y){
	if (x <= Q12.x && y <=Q13.y){return Q11}
	if (x > Q12.x && x <= Q21.x && y <= Q13.y){return Q12}
	if (x > Q21.x && x <= Q22.x && y <= Q13.y){return Q21}
	if (x > Q22.x && y<= Q13.y){return Q22}
	if (x <= Q14.x && y <= Q31.y && y >= Q13.y){return Q13}
	if (x > Q14.x && x <= Q23.x && y <= Q31.y && y >= Q13.y){return Q14}
	if (x > Q23.x && x <= Q24.x && y <= Q31.y && y >= Q13.y){return Q23}
	if (x > Q24.x && y <= Q31.y && y >= Q13.y){return Q24}
	if (x <= Q32.x && y <= Q33.y && y >= Q31.y){return Q31}
	if (x > Q32.x && x <= Q41.x && y <= Q33.y && y >= Q31.y){return Q32}
	if (x > Q41.x && x <= Q42.x && y <= Q33.y && y >= Q31.y){return Q41}
	if (x > Q42.x && y <= Q33.y && y >= Q31.y){return Q42}
	if (x > Q33.x && x <= Q34.x && y >= Q33.y){return Q33}
	if (x > Q34.x && x <= Q43.x && y >= Q33.y){return Q34}
	if (x > Q43.x && x <= Q44.x && y >= Q33.y){return Q43}
	if (x > Q44.x && y >= Q33.y){return Q44}
};

function scaleDifficulty(keyword){
	
	// the difficulty will scale by increasing 3 variables of the Red Goblin: chance to appear, speed and time before vanishing.
	// The chance to appear will increase as the player catches green goblins
	// The time before vanishing will increase as the player catches blue goblins
	// The speed will increase when the player picks up mushrooms after having 3 on the inventory and after killing a red goblin with berserk
	//original: 180
	if (keyword == "speed"){
		if (_redGoblin.speed <= 250){
			_redGoblin.speed += 10;
			//console.log("speed up");
		}
	}
	//original: 0.20
	if (keyword == "chance"){
		if (_redGoblinAppChance <=0.90){
		_redGoblinAppChance += 0.05;}
		//console.log("chance up");
	}
	//original: 2
	if (keyword == "time"){
		if (_redGoblinTimeout <= 10){
		_redGoblinTimeout += 0.5
		//console.log("time up");
		}
	}
};

// Update game objects
//the modifier variable is used to control the speed in which the Hero moves indepently of the speed the script is executed
var _update = function (modifier) {
	//on top of checking where the player is intending to move the character, this function also checks to see if the Hero 
	//is within the intended bounds. The hero is supposed to just move a bit into the bushes and not pass them
	if (38 in _keysDown && _hero.y >50) { // Player holding up 
		_hero.y -= _hero.speed * modifier;
	}
	if (40 in _keysDown && _hero.y<395) { // Player holding down
		_hero.y += _hero.speed * modifier;
	}
	if (37 in _keysDown && _hero.x >55) { // Player holding left
		_hero.x -= _hero.speed * modifier;
	}
	if (39 in _keysDown && _hero.x<585) { // Player holding right
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

	//Speed boost when pressing Space BLOODLUST
	//when the player presses the SPACE key, the Hero gets a speed boost for 1 sec
	/*if (32 in _keysDown && _bloodLust == true){
		_hero.speed = _hero.speed + _hero.speedBuff;
		console.log("speed: "+_hero.speed);
		setTimeout(function() {
			_bloodLust = false;
			_hero.speed = 256;
		}, 1 * 1000); //perhaps change the 1 to a variable to adjust the time of the boost
	}*/
	
	if (32 in _keysDown && _bloodRage.active == false && _bloodRage.charges >= 1){
		_hero.speed = _hero.speed + _bloodRage.speed;
		//console.log("speed: "+_hero.speed);
		_bloodRage.active = true;
		--_bloodRage.charges;
		setTimeout(function() {
			_bloodRage.active = false;
			_hero.speed = 256;
		}, _bloodRage.duration * 1000); 
	}
	
	if (16 in _keysDown && _berserk.active == false && _berserk.charges>=1){
		_berserk.active = true;
		--_berserk.charges;
		setTimeout(function() {
			_berserk.active = false;
		}, _berserk.duration * 1000);
	}
	
	// Is the hero Touching the Green Goblin?
	if (
		_hero.x <= (_greenGoblin.x + 32)
		&& _greenGoblin.x <= (_hero.x + 32)
		&& _hero.y <= (_greenGoblin.y + 32)
		&& _greenGoblin.y <= (_hero.y + 32)
	) {
		++_goblinsCaught;
		++_greenGoblinsCaught
		if (_greenGoblinsCaught % 6 == 0){
			scaleDifficulty("chance");
		}
		/*
		//if the player has used the bloodlust speed boost, increase the bloodLustpoints
		if (_bloodLust == false){++_bloodLustPoints}
		//if the player has used the bloodlust speed boost and has accumulated the necessary bloodlust points, gain bloodlust again
		if (_bloodLust == false && _bloodLustPoints == 5){_bloodLust = true;_bloodLustPoints = 0} 
		*/
		//++BLOODRAGE
		if (_bloodRage.active == false && _bloodRage.charges < _bloodRage.maxCharges){
			if (_bloodRage.refill == 5){
				++_bloodRage.charges; 
				_bloodRage.refill = 0;
			}else{++_bloodRage.refill;} //bloodRage is not active, the number of charges is less than the maximum and the refill counter is less than maximum
		}
		//--BLOODRAGE
		
		_pointsTotal += _pointsGreenGoblin;
		//update the High Score
		if (_pointsTotal > _highScore){
			_highScore = _pointsTotal
		} 
		_greenGoblinCaught = true;
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
		++_blueGoblinsCaught;
		if (_blueGoblinsCaught % 3 == 0){
			scaleDifficulty("time");
		}
		_blueGoblinEndTime = new Date();
		var _timeDiff = _blueGoblinEndTime - _blueGoblinStartTime;
		if (_timeDiff < 500){_timeDiff = 500;}
		_pointsBlueGoblinTime = Math.round(_pointsBlueGoblin / (_timeDiff / 1000));
		_pointsTotal += _pointsBlueGoblinTime;
		//update de High Score
		if (_pointsTotal > _highScore){
			_highScore = _pointsTotal
		} 
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
		if(_berserk.active == false){
			--_hero.lives;
		}else{
				++_redGoblinsCaught;
				scaleDifficulty("speed");
				_berserk.active = false;
				_pointsTotal += _redGoblin.points;
				_redGoblin.pointsEnable = true; //allow for the floating text to be displayed
				//update de High Score
				if (_pointsTotal > _highScore){
				_highScore = _pointsTotal
				} 
			}
		_redGoblinTouched = true;
		_redGoblinCaughtXY = [_redGoblin.x,_redGoblin.y]; //registers where the red goblin was touched
		_redGoblinAppeared = false;
		clearTimeout(_redGoblinTimerControl);
		reset();
	} 
	//is the hero touching the mushroom
	if ( _mushroom.show == true &&
		_hero.x <= (_mushroom.x + 32)
		&& _mushroom.x <= (_hero.x + 32)
		&& _hero.y <= (_mushroom.y + 32)
		&& _mushroom.y <= (_hero.y + 32)
	) {
		if (_berserk.charges < 3){
			++_berserk.charges;
		}else{
			scaleDifficulty("speed");
			_pointsTotal += _mushroom.points;
			_mushroom.pointsEnable = true;
			//update de High Score
			if (_pointsTotal > _highScore){
				_highScore = _pointsTotal
			}
			
		}
		
		_mushroom.dropped = false;
		_mushroom.show = false;
		clearTimeout(_mushroom.timeCtrl);
		reset();
	} 
};

// Draw everything
var _render = function () {
	if (_bgReady) {
		_ctx.drawImage(_bgImage, 0, 0);
	}
	if (_berserk.active == false){
		if (_heroReady) {
			_ctx.drawImage(_heroImage, _hero.x, _hero.y);
		}
	}else{
		if (_heroBerserkReady) {
			_ctx.drawImage(_heroBerserkImage, _hero.x, _hero.y);
		}
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
	
	if (_mushroom.dropped && _mushroom.show){
		if (_mushroomReady){
			_ctx.drawImage(_mushroomImage, _mushroom.x, _mushroom.y);}
	}
	
	/*
	if (_bloodLust){
		if (_bloodLustFullReady) {
		_ctx.drawImage(_bloodLustFullImage, 50, 0);
		}
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
	*/
	if (_hero.lives == 0){
		if (_gameOverReady) {
			_ctx.drawImage(_gameOverImage, 185, 200);
		}
		if (_restartReady){
			_ctx.drawImage(_restartImage, 290,270);
		}
		if (_highScoreReady){
			_ctx.drawImage(_highScoreImage,185+45, 75);
		}
		_ctx.fillStyle = "rgb(255, 216, 0)";
		_ctx.font = "38px Harrington";
		_ctx.textAlign = "left";
		_ctx.textBaseline = "top";
		_ctx.shadowColor = "black";
		_ctx.shadowOffsetX = 3;
		_ctx.shadowOffsetY = 3;
		_ctx.shadowBlur = 10;
		_ctx.fillText(_highScore+" pts", 280+20, 130);
	}
	switch(_hero.lives){
		case 3:
			if (_lives3Ready) {
					_ctx.drawImage(_lives3Image, 290, 430);
			}
			break;
		case 2:
			if (_lives2Ready) {
					_ctx.drawImage(_lives2Image, 290, 430);
			}
			break;
		case 1:
			if (_lives1Ready) {
					_ctx.drawImage(_lives1Image, 290, 430);
			}
			break;
		case 0:
			if (_lives0Ready) {
					_ctx.drawImage(_lives0Image, 290, 430);
			}
			break;
	}
	
	switch (_berserk.charges){
		case 3:
			if (_berserk3Ready) {
					_ctx.drawImage(_berserk3Image, 50, 430);
			}
			break;
		case 2:
			if (_berserk2Ready) {
					_ctx.drawImage(_berserk2Image, 50, 430);
			}
			break;
		case 1:
		if (_berserk1Ready) {
					_ctx.drawImage(_berserk1Image, 50, 430);
			}
			break;
		case 0:
		if (_berserk0Ready) {
					_ctx.drawImage(_berserk0Image, 50, 430);
			}
			break;
	}
	
	switch(_bloodRage.charges){
		case 3:
			if (_bloodRage3Ready) {
					_ctx.drawImage(_bloodRage3Image, 530, 430);
			}
			break;
		case 2:
			if (_bloodRage.refill == 0){
				if (_bloodRage2Ready) {
					_ctx.drawImage(_bloodRage2Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 1){
				if (_bloodRage21Ready) {
					_ctx.drawImage(_bloodRage21Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 2){
				if (_bloodRage22Ready) {
					_ctx.drawImage(_bloodRage22Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 3){
				if (_bloodRage23Ready) {
					_ctx.drawImage(_bloodRage23Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 4){
				if (_bloodRage24Ready) {
					_ctx.drawImage(_bloodRage24Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 5){
				if (_bloodRage25Ready) {
					_ctx.drawImage(_bloodRage25Image, 530, 430);
				}
			}
			break;
		case 1:
			if (_bloodRage.refill == 0){
				if (_bloodRage1Ready) {
					_ctx.drawImage(_bloodRage1Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 1){
				if (_bloodRage11Ready) {
					_ctx.drawImage(_bloodRage11Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 2){
				if (_bloodRage12Ready) {
					_ctx.drawImage(_bloodRage12Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 3){
				if (_bloodRage13Ready) {
					_ctx.drawImage(_bloodRage13Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 4){
				if (_bloodRage14Ready) {
					_ctx.drawImage(_bloodRage14Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 5){
				if (_bloodRage15Ready) {
					_ctx.drawImage(_bloodRage15Image, 530, 430);
				}
			}
			break;
		case 0:
			if (_bloodRage.refill == 0){
				if (_bloodRage0Ready) {
					_ctx.drawImage(_bloodRage0Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 1){
				if (_bloodRage01Ready) {
					_ctx.drawImage(_bloodRage01Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 2){
				if (_bloodRage02Ready) {
					_ctx.drawImage(_bloodRage02Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 3){
				if (_bloodRage03Ready) {
					_ctx.drawImage(_bloodRage03Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 4){
				if (_bloodRage04Ready) {
					_ctx.drawImage(_bloodRage04Image, 530, 430);
				}
			}
			if (_bloodRage.refill == 5){
				if (_bloodRage05Ready) {
					_ctx.drawImage(_bloodRage05Image, 530, 430);
				}
			}
			break;
	}
		
	if (_scoreReady) {
		_ctx.drawImage(_scoreImage, 400, 0);
	}
	
	if(_highscoreTopReady){
		_ctx.drawImage(_highscoreTopImage,45,2);
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
	_ctx.fillText(_pointsTotal + " pts", 510, -5);
	_ctx.fillText(_highScore + "pts", 220, -5);
	
	//if a mushroom is caught and the Berserk charges are full, disply floating text with the points)
	if (_mushroom.pointsEnable == true){
		_ctx.fillText(_mushroom.points + " pts", _mushroom.x, _mushroom.y);
		setTimeout(function() {
			_mushroom.pointsEnable = false;
		}, _mushroom.pointsDuration * 1000);
		--_mushroom.y;
	}
	
	//if a red goblin is touched when berserk is active, display floating text with the points
	if (_redGoblin.pointsEnable == true){
		_ctx.fillText(_redGoblin.points + " pts", _redGoblinCaughtXY[0], _redGoblinCaughtXY[1]);
		setTimeout(function() {
			_redGoblin.pointsEnable = false;
		}, _redGoblin.pointsDuration * 1000);
		--_redGoblinCaughtXY[1];
	}
	
	//If a goblin was caught, display the points gained
	if (_blueGoblinCaught == true){
	_ctx.fillText(_pointsBlueGoblinTime + " pts", _blueGoblinCaughtXY[0], _blueGoblinCaughtXY[1]);
		setTimeout(function() {
			_blueGoblinCaught = false;
		}, _pointsDisplayTime * 1000);
		--_blueGoblinCaughtXY[1];
	}
	if (_greenGoblinCaught == true){_greenGoblinCaught = false;} //when the player catches a blue goblin this ensures that a new green goblin is not spawned.
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


// RESET BUTTON Functions
var _restartSelected = false; //variable to be control what color of the Reset text to display based on weather the mouse is over the text or not
//function to reset all the variables before starting new game
function clearAll(){
	_restartSelected = false;
	_hero.lives = 3;
	_goblinsCaught = 0; // total goblins caught
    _greenGoblinsCaught = 0; 
	_blueGoblinsCaught = 0;
	_redGoblinsCaught = 0;
	_pointsBlueGoblinTime = 0; //variable to hold the time dependent points the player gets for catching the Blue Goblin
	_pointsTotal = 0;
	_greenGoblinCaught = false; //varibale to control if the green goblin is caught
	_blueGoblinCaught = false; //varuiable to control if the blue goblin is caught
	_blueGoblinCaughtXY = []; //variable to store the coordinates where the blue goblin was caught
	_blueGoblinAppeared = false; // variable to control the appearance of the blue goblin
	_blueGoblinGoodSpawn = false;
	/*
	_bloodLust = false; //variable to control the speed boost funtion
	_bloodLustPoints = 0; //varibale to control when bloodlust comes into play
	*/
	_bloodRage.active = false;
	_bloodRage.charges = 0;
	_bloodRage.refill = 0;
	

	_berserk.active = false;
	_berserk.charges = 0;
	
	_redGoblinTouched = false; //varuiable to control if the blue red Goblin is touched
	_redGoblinAppeared = false; // variable to control the appearance of the red goblin
	_redGoblinCaughtXY = []; //variable to store the coordinates where the red goblin was caught
	_redGoblinGoodSpawn = false //variable to control if the red goblin has a good place to spawn
	_redGoblin.pointsEnable = false
	
	_mushroom.dropped = false;
	_mushroom.show = false;
	_mushroom.pointsEnable = false;
	
	
	_restartImage.src = "images/restart.png";
	reset();
	main();
}
//gets the current mouse position
function getMousePos(_canvas, evt) {
        var rect = _canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
//event that monitors for the mouse click on the area where the Reset Text is located
_canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
		if (_hero.lives == 0){
		if(mousePos.x >290 && mousePos.x < (290+112) && mousePos.y > 270 && mousePos.y<(270+35)){ //image coordinates x = 290 y = 270. Image width = 112 image height = 63 Using 63 as the image height does not work.
			clearAll();
}}
      }, false);
	  
//event that monitors the mouse movements to detect hovering over the Reset Text and change the color of the text.
_canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(_canvas, evt);
		if(mousePos.x >290 && mousePos.x < (290+112) && mousePos.y > 270 && mousePos.y<(270+35)){ //image coordinates x = 290 y = 270. Image width = 112 image height = 63. Using 63 as the image height does not work.
        if (_hero.lives == 0){
			if (_restartSelected == false){
				if (_restartSelectedReady){
					_restartImage.src = "images/restartSelected.png";
					_render();
					_restartSelected = true;
					
				}
				//console.log("over");
			}
		}
    }else{
		if (_hero.lives == 0){
			if (_restartSelected == true){
				if (_restartReady){
					_restartImage.src = "images/restart.png";
					_render();
					_restartSelected = false;
					
				}
				//console.log("over");
			}
		}
	}
      }, false);
