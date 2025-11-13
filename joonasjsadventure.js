var imgData;
const screenWidth                = 1910;
const screenHeight               = 909;
const rowStride                  = screenWidth * 4;
var canvas                       = document.getElementById("myCanvas");
var ctx                          = canvas.getContext("2d");

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

window.onload = function() {
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

function play(delta)
{
    if(imgData != null) ctx.putImageData(imgData, 0, 0);
}
