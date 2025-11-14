var imgData;
const screenWidth                = 1910;
const screenHeight               = 909;
const rowStride                  = screenWidth * 4;
var goingup                      = false;
var goingdown                    = false;
var goingleft                    = false;
var goingright                   = false;
var spacePressed                 = false;
var canvas                       = document.getElementById("myCanvas");
var ctx                          = canvas.getContext("2d");
var screen000picSprite           = document.getElementById("screen000pic");
var depthBuffer                  = document.getElementById("depthBuffer");
var depthBufferCtx               = depthBuffer.getContext("2d");
var depthBufferSdata             = depthBufferCtx.createImageData(1910, 909);
var screen000depSprite           = document.getElementById("screen000dep");
var playereBuffer                = document.getElementById("playereBuffer");
var playereCtx                   = playereBuffer.getContext("2d");
var playereSdata                 = playereCtx.createImageData(66, 157);
var playereSprite                = document.getElementById("playere");
var sprite0Buffer                = document.getElementById("sprite0Buffer");
var sprite0Ctx                   = sprite0Buffer.getContext("2d");
var sprite0Sdata                 = sprite0Ctx.createImageData(66, 157);
var playerX                      = 60;
var playerY                      = 60;

let Application = PIXI.Application,
	Container = PIXI.Container,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	TextureCache = PIXI.utils.TextureCache,
	Sprite = PIXI.Sprite;
let app = new Application(
{
	width: screenWidth, 
	height: screenHeight,
	antialiasing: false, 
	transparent: false, 
	resolution: 1,
	forceCanvas: true
}
);
loader
	.load(setup);

// The 'keyboard' helper function.
function keyboard(keyCode)
{
	var key = {};
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	// The 'downHandler'.
	key.downHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.press)
			{
				key.press();
				key.isDown = true;
				key.isUp = false;
			}
		}
		event.preventDefault();
	};
	// The 'upHandler'.
	key.upHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.isDown && key.release)
			{
				key.release();
				key.isDown = false;
				key.isUp = true;
			}
		}
		event.preventDefault();
	};
	// Attach event listeners.
	window.addEventListener("keydown", key.downHandler.bind(key), false);
	window.addEventListener("keyup", key.upHandler.bind(key), false);
	return key;
}

function setup() 
{
	// Capture the keyboard arrow keys.
	let left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40),
	spacebar = keyboard(32);
	// Space
	spacebar.press = () =>
	{
		spacePressed = true;
	};
	spacebar.release = () =>
	{
		spacePressed = false;
	};
	// Up
	up.press = () =>
	{
		goingup = true;
	};
	up.release = () =>
	{
		goingup = false;
	};
	// Down
	down.press = () =>
	{
		goingdown = true;
	};
	down.release = () =>
	{
		goingdown = false;
	};
	// Left
	left.press = () =>
	{
		goingleft = true;
	};
	left.release = () =>
	{
		goingleft = false;
	};
	// Right
	right.press = () =>
	{
		goingright = true;
	};
	right.release = () =>
	{
		goingright = false;
	};
	state = play;
	app.ticker.add(delta => gameLoop(delta));
}

function updateStatus()
{
	requestAnimationFrame(updateStatus);
}

function gameLoop(delta)
{
	state(delta);
}

function doSpriteTransparency(givenbufferctx, givenbuffer, givenpic, keyR, keyG, keyB)
{
	var sizeofit = 4 * givenbuffer.width * givenbuffer.height;
	for(var tpPos = 0; tpPos < sizeofit; tpPos += 4)
	{
		if(givenpic.data[tpPos + 0] == keyR && givenpic.data[tpPos + 1] == keyG && givenpic.data[tpPos + 2] == keyB) {
			givenpic.data[tpPos + 3] = 0;
		}
	}
	givenbufferctx.putImageData(givenpic, 0, 0);
}

window.onload = function() {
	depthBufferCtx.drawImage(screen000depSprite, 0, 0);
	depthBufferSdata = depthBufferCtx.getImageData(0, 0, depthBuffer.width, depthBuffer.height);
	ctx.drawImage(screen000picSprite, 0, 0);
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	playereCtx.drawImage(playereSprite, 0, 0);
	playereSdata = playereCtx.getImageData(0, 0, playereBuffer.width, playereBuffer.height);
	doSpriteTransparency(playereCtx, playereBuffer, playereSdata, 52, 90, 72);
};

function play(delta)
{
    if(imgData != null) ctx.putImageData(imgData, 0, 0);
	sprite0Ctx.putImageData(playereSdata, 0, 0);
	sprite0Sdata = sprite0Ctx.getImageData(0, 0, sprite0Buffer.width, sprite0Buffer.height);
	var spriterowstride = sprite0Buffer.width * 4;
	// Mask out those pixels that are behind an object.
	var depth;
	var feetY = playerY + sprite0Buffer.height - 1;
	for(var y = 0; y < sprite0Buffer.height; y++) {
		for(var x = 0; x < sprite0Buffer.width; x++) {
			depth = (depthBufferSdata.data[((y + playerY) * rowStride) + ((x + playerX) * 4) + 1] * 256) + depthBufferSdata.data[((y + playerY) * rowStride) + ((x + playerX) * 4) + 2];
			if(feetY < depth) {
				sprite0Sdata.data[(y * spriterowstride) + (x * 4) + 3] = 0;
			}
		}
	}
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	sprite0Ctx.putImageData(sprite0Sdata, 0, 0);
	ctx.drawImage(sprite0Buffer, playerX, playerY);

	if(goingleft) {
		playerX--;
	}
	if(goingright) {
		playerX++;
	}
	if(goingup) {
		playerY--;
	}
	if(goingdown) {
		playerY++;
	}

}
