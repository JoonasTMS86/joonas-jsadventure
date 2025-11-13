var imgData;
const screenWidth                = 1910;
const screenHeight               = 909;
const rowStride                  = screenWidth * 4;
var canvas                       = document.getElementById("myCanvas");
var ctx                          = canvas.getContext("2d");
var playereBuffer                = document.getElementById("playereBuffer");
var playereCtx                   = playereBuffer.getContext("2d");
var playereSdata                 = playereCtx.createImageData(66, 157);
var playereSprite                = document.getElementById("playere");

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

function setup() 
{
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
		if(givenpic.data[tpPos] == keyR && givenpic.data[tpPos+1] == keyG && givenpic.data[tpPos+2] == keyB) givenpic.data[tpPos+3] = 0;
	}
	givenbufferctx.putImageData(givenpic, 0, 0);
}

window.onload = function() {
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	playereCtx.drawImage(playereSprite, 0, 0);
	playereSdata = playereCtx.getImageData(0, 0, playereBuffer.width, playereBuffer.height);
	doSpriteTransparency(playereCtx, playereBuffer, playereSdata, 52, 90, 72);
};

function play(delta)
{
    if(imgData != null) ctx.putImageData(imgData, 0, 0);
	ctx.putImageData(playereSdata, 60, 60);
}
