const screenWidth                = 1910;
const screenHeight               = 909;
const rowStride                  = screenWidth * 4;
const messageWindowMarginWidth   = 10; // Message window margin width in pixels.
const messageWindowMarginHeight  = 10; // Message window margin height in pixels.
const STATE_GAME                 = 0;
const STATE_INPUTWINDOW          = 1;
const playerAnimDelay            = 8;
var imgData, canTypeKey, textInputText, textInputX, textInputY;
var goingup                      = false;
var goingdown                    = false;
var goingleft                    = false;
var goingright                   = false;
var spacePressed                 = false;
var enterPressed                 = false;
var enterTyped                   = false;
var canvas                       = document.getElementById("myCanvas");
var ctx                          = canvas.getContext("2d");
var secondScreenBuffer           = document.getElementById("secondBuffer");
var secondScreenCtx              = secondScreenBuffer.getContext("2d");
var screen000picSprite           = document.getElementById("screen000pic");
var priorityBuffer               = document.getElementById("priorityBuffer");
var priorityBufferCtx            = priorityBuffer.getContext("2d");
var priorityBufferSdata          = priorityBufferCtx.createImageData(1910, 909);
var screen000priSprite           = document.getElementById("screen000pri");
var depthBuffer                  = document.getElementById("depthBuffer");
var depthBufferCtx               = depthBuffer.getContext("2d");
var depthBufferSdata             = depthBufferCtx.createImageData(1910, 909);
var screen000depSprite           = document.getElementById("screen000dep");
var sprite000Buffer              = document.getElementById("sprite000Buffer");
var sprite000Ctx                 = sprite000Buffer.getContext("2d");
var sprite000Sdata               = sprite000Ctx.createImageData(85, 124);
var sprite000Sprite              = document.getElementById("sprite000");
var sprite001Buffer              = document.getElementById("sprite001Buffer");
var sprite001Ctx                 = sprite001Buffer.getContext("2d");
var sprite001Sdata               = sprite001Ctx.createImageData(85, 124);
var sprite001Sprite              = document.getElementById("sprite001");
var sprite002Buffer              = document.getElementById("sprite002Buffer");
var sprite002Ctx                 = sprite002Buffer.getContext("2d");
var sprite002Sdata               = sprite002Ctx.createImageData(85, 124);
var sprite002Sprite              = document.getElementById("sprite002");
var sprite003Buffer              = document.getElementById("sprite003Buffer");
var sprite003Ctx                 = sprite003Buffer.getContext("2d");
var sprite003Sdata               = sprite003Ctx.createImageData(85, 124);
var sprite003Sprite              = document.getElementById("sprite003");
var spriteBuffer                 = document.getElementById("spriteBuffer");
var spriteCtx                    = spriteBuffer.getContext("2d");
var spriteSdata                  = spriteCtx.createImageData(400, 400);
var mainFontBuffer               = document.getElementById("mainFontBuffer");
var mainFontCtx                  = mainFontBuffer.getContext("2d");
var mainFontSdata                = mainFontCtx.createImageData(672, 168);
var mainFontSprite               = document.getElementById("mainFont");
// The coordinates of the sprites are in these arrays.
var spriteXCoords                = [60, 130, 200, 270, 340, 410, 480, 550];
var spriteYCoords                = [60, 130, 200, 270, 340, 410, 480, 550];
// Width and heights of the sprite images.
var spriteWidths                 = [85, 85, 85, 85, 85, 85, 85, 85];
var spriteHeights                = [124, 124, 124, 124, 124, 124, 124, 124];
// Width of sprite when facing N or S.
var spriteWidthsNS               = [26, 26, 26, 26, 26, 26, 26, 26];
// When we check for collisions, we only wish to check those pixels of the sprite that are not transparent.
// The first solid pixels might not be at the leftmost side of the image but rather a few pixels away from it.
var spriteCheckBlockOffsetsNS    = [29, 29, 29, 29, 29, 29, 29, 29];
var spriteCheckBlockOffsetsE     = [55, 55, 55, 55, 55, 55, 55, 55];
var spriteCheckBlockOffsetsW     = [28, 28, 28, 28, 28, 28, 28, 28];
var spriteImages                 = [0, 0, 0, 0, 0, 0, 0, 0];
var playerAnimPos                = 0;
var playerAnimFrame              = 0;
var fontStartXIndex              = [];
var fontStartYIndex              = [];
var fontWidthIndex               = [];
var fontHeightIndex              = [];
var waitingForEnterPress         = false;
var startedGame                  = true;
var typedKeyCode                 = 0;
var typedKey                     = "";
var keyDown                      = false;
var gameState                    = STATE_GAME;

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
	enter = keyboard(13),
	spacebar = keyboard(32);
	// Enter
	enter.press = () =>
	{
		enterPressed = true;
	};
	enter.release = () =>
	{
		enterTyped = true;
		enterPressed = false;
	};
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

// Draw the given sprite on the screen.
function drawSpriteOnScreen(spriteNumber) {
	var sData;
	switch(spriteImages[spriteNumber]) {
		case 0:
			sData = sprite000Sdata;
			break;
		case 1:
			sData = sprite001Sdata;
			break;
		case 2:
			sData = sprite002Sdata;
			break;
		case 3:
			sData = sprite003Sdata;
			break;
	}
	spriteCtx.putImageData(sData, 0, 0);
	spriteSdata = spriteCtx.getImageData(0, 0, spriteWidths[spriteNumber], spriteHeights[spriteNumber]);
	var spriterowstride = spriteWidths[spriteNumber] * 4;
	// Mask out those pixels that are behind an object.
	var depth;
	var feetY = spriteYCoords[spriteNumber] + spriteHeights[spriteNumber] - 1;
	for(var y = 0; y < spriteHeights[spriteNumber]; y++) {
		for(var x = 0; x < spriteWidths[spriteNumber]; x++) {
			depth = (depthBufferSdata.data[((y + spriteYCoords[spriteNumber]) * rowStride) + ((x + spriteXCoords[spriteNumber]) * 4) + 1] * 256) + depthBufferSdata.data[((y + spriteYCoords[spriteNumber]) * rowStride) + ((x + spriteXCoords[spriteNumber]) * 4) + 2];
			if(feetY < depth) {
				spriteSdata.data[(y * spriterowstride) + (x * 4) + 3] = 0;
			}
		}
	}
	spriteCtx.putImageData(spriteSdata, 0, 0);
	ctx.drawImage(spriteBuffer, 0, 0, spriteWidths[spriteNumber], spriteHeights[spriteNumber], spriteXCoords[spriteNumber], spriteYCoords[spriteNumber], spriteWidths[spriteNumber], spriteHeights[spriteNumber]);
}

function drawAllSprites() {
	var spriteDrawOrder = [0, 1, 2, 3, 4, 5, 6, 7];
	// Draw the sprite with the lowest Y value first and the one with the highest Y value last.
	for(var placePos = 0; placePos < 8; placePos++) {
		for(var checkPos = placePos + 1; checkPos < 8; checkPos++) {
			if(spriteYCoords[spriteDrawOrder[checkPos]] < spriteYCoords[spriteDrawOrder[placePos]]) {
				var temp = spriteDrawOrder[placePos];
				spriteDrawOrder[placePos] = spriteDrawOrder[checkPos];
				spriteDrawOrder[checkPos] = temp;
			}
		}
	}
	drawSpriteOnScreen(spriteDrawOrder[0]);
	drawSpriteOnScreen(spriteDrawOrder[1]);
	drawSpriteOnScreen(spriteDrawOrder[2]);
	drawSpriteOnScreen(spriteDrawOrder[3]);
	drawSpriteOnScreen(spriteDrawOrder[4]);
	drawSpriteOnScreen(spriteDrawOrder[5]);
	drawSpriteOnScreen(spriteDrawOrder[6]);
	drawSpriteOnScreen(spriteDrawOrder[7]);
}

function setIndicesAndTransparenciesForFont() {
	var indexPos, x, y, restoreX, restoreY, width, height, highestHeight, fontRowStride, boundaryColorR, boundaryColorG, boundaryColorB, keyColorR, keyColorG, keyColorB, searching;
	fontRowStride = mainFontBuffer.width * 4;
	indexPos = 0;
	x = 1;
	y = 1;
	highestHeight = 0;
	while(indexPos < 256) {
		boundaryColorR = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 0];
		boundaryColorG = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 1];
		boundaryColorB = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 2];
		keyColorR = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 0];
		keyColorG = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 1];
		keyColorB = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 2];
		searching = true;
		width = 0;
		height = 0;
		restoreX = x;
		restoreY = y;
		// Get the width and the height for the currently inspected character.
		while(searching) {
			if(
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == boundaryColorR &&
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == boundaryColorG &&
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == boundaryColorB
			) {
				searching = false;
			}
			else {
				x++;
				width++;
			}
		}
		searching = true;
		x = restoreX;
		y = restoreY;
		while(searching) {
			if(
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == boundaryColorR &&
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == boundaryColorG &&
				mainFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == boundaryColorB
			) {
				searching = false;
			}
			else {
				y++;
				height++;
			}
		}
		if(height > highestHeight) highestHeight = height;
		fontStartXIndex[indexPos] = restoreX;
		fontStartYIndex[indexPos] = restoreY;
		fontWidthIndex[indexPos] = width;
		fontHeightIndex[indexPos] = height;

		y = restoreY;
		// Make those pixels of the font transparent that correspond to the given key RGB color.
		while(y < (restoreY + height)) {
			x = restoreX;
			while(x < (restoreX + width)) {
				if(
					mainFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == keyColorR &&
					mainFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == keyColorG &&
					mainFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == keyColorB
				) {
					mainFontSdata.data[(y * fontRowStride) + (x * 4) + 3] = 0;
				}
				x++;
			}
			y++;
		}

		indexPos++;
		y = restoreY;
		x = restoreX + width + 2;
		if(x >= mainFontBuffer.width) {
			x = 1;
			y += highestHeight + 2;
			highestHeight = 0;
		}
	}
	mainFontCtx.putImageData(mainFontSdata, 0, 0);
}

// Draw a border at the given X,Y coordinates on the screen.
// Use this to draw the message window border, text input field border etc.
function drawBorder(x, y, endX, endY) {
	var origX, origY;
	var origX = x;
	var origY = y;
	while(x < endX) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 1] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 2] = 0;
		x++;
	}
	while(y < endY) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 1] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 2] = 0;
		y++;
	}
	while(x > origX) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 1] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 2] = 0;
		x--;
	}
	while(y > origY) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 1] = 0;
		imgData.data[(y * rowStride) + (x * 4) + 2] = 0;
		y--;
	}
}

function drawWindowOnScreen(x, y, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY) {
	var restoreX = x;
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	while(y < targetY) {
		x = restoreX;
		while(x < targetX) {
			imgData.data[(y * rowStride) + (x * 4) + 0] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 1] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 2] = 255;
			x++;
		}
		y++;
	}
	// Put a little border into the message window.
	drawBorder(borderStartX, borderStartY, borderTargetX, borderTargetY);
}

function putTextOnScreen(x, y, message) {
	ctx.putImageData(imgData, 0, 0);
	var highestCharacter = 0;
	var restoreX = x;
	for(var pos = 0; pos < message.length; pos++) {
		if(message.charCodeAt(pos) == 10) {
			if(highestCharacter == 0) highestCharacter = fontHeightIndex[32];
			x = restoreX;
			y += highestCharacter;
			highestCharacter = 0;
		}
		else {
			ctx.drawImage(
				mainFontBuffer, 
				fontStartXIndex[message.charCodeAt(pos)], 
				fontStartYIndex[message.charCodeAt(pos)], 
				fontWidthIndex[message.charCodeAt(pos)], 
				fontHeightIndex[message.charCodeAt(pos)], 
				x, 
				y, 
				fontWidthIndex[message.charCodeAt(pos)], 
				fontHeightIndex[message.charCodeAt(pos)]
			);
			x += fontWidthIndex[message.charCodeAt(pos)];
			if(fontHeightIndex[message.charCodeAt(pos)] > highestCharacter) highestCharacter = fontHeightIndex[message.charCodeAt(pos)];
		}
	}
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	ctx.putImageData(imgData, 0, 0);
}

function messageWindow(message, isCentered, x, y) {
	var widestWidth, highestHeightForCurrentRow, highestHeight, width, height, messageWindowWidth, messageWindowHeight;
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	secondScreenCtx.putImageData(imgData, 0, 0);
	drawAllSprites();
	waitingForEnterPress = true;
	widestWidth = 0;
	highestHeight = 0;
	highestHeightForCurrentRow = 0;
	width = 0;
	height = 0;
	for(var pos = 0; pos < message.length; pos++) {
		if(message.charCodeAt(pos) == 10) {
			if(highestHeightForCurrentRow == 0) highestHeightForCurrentRow = fontHeightIndex[32];
			if(width > widestWidth) widestWidth = width;
			highestHeight += highestHeightForCurrentRow;
			width = 0;
			height = 0;
			highestHeightForCurrentRow = 0;
		}
		else {
			width += fontWidthIndex[message.charCodeAt(pos)];
			height = fontHeightIndex[message.charCodeAt(pos)];
		}
		if(height > highestHeightForCurrentRow) highestHeightForCurrentRow = height;
	}
	highestHeight += highestHeightForCurrentRow;
	if(width > widestWidth) widestWidth = width;

	// Add a bit of margin to the message window.
	messageWindowWidth = widestWidth + (messageWindowMarginWidth * 2);
	messageWindowHeight = highestHeight + (messageWindowMarginHeight * 2);

	if(isCentered) {
		// Center the message window.
		x = Math.floor((screenWidth / 2)) - Math.floor((messageWindowWidth / 2));
		y = Math.floor((screenHeight / 2)) - Math.floor((messageWindowHeight / 2));
	}
	var restoreX, restoreY, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
	targetX = x + messageWindowWidth;
	targetY = y + messageWindowHeight;
	borderTargetX = x + Math.floor(messageWindowMarginWidth / 2) + messageWindowWidth - (Math.floor(messageWindowMarginWidth / 2) * 2) - 1;
	borderTargetY = y + Math.floor(messageWindowMarginHeight / 2) + messageWindowHeight - (Math.floor(messageWindowMarginHeight / 2) * 2) - 1;
	borderStartX = x + Math.floor(messageWindowMarginWidth / 2);
	borderStartY = y + Math.floor(messageWindowMarginHeight / 2);
	restoreX = x;
	restoreY = y;
	drawWindowOnScreen(x, y, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY);

	// Put the text to the message window.
	x = restoreX + messageWindowMarginWidth;
	y = restoreY + messageWindowMarginHeight;
	putTextOnScreen(x, y, message);
}

// Display a centered message window on the screen, meaning that the X,Y coordinates that are passed to messageWindow() are irrelevant
// (ie. can be any arbitrary values).
function messageWindowCentered(message) {
	messageWindow(message, true, 0, 0);
}

// Draw the given RGB color at the given cursor X,Y coordinates.
function drawColorAtCursorXY(x, y, r, g, b) {
	var endY = y + 19;
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	while(y < endY) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = r;
		imgData.data[(y * rowStride) + (x * 4) + 1] = g;
		imgData.data[(y * rowStride) + (x * 4) + 2] = b;
		y++;
	}
	ctx.putImageData(imgData, 0, 0);
}

// Draw the text cursor at the given X,Y coordinates on the screen.
function drawCursor(x, y, text) {
	for(var pos = 0; pos < text.length; pos++) {
		x += fontWidthIndex[text.charCodeAt(pos)];
	}
	drawColorAtCursorXY(x, y, 0, 0, 0);
}

// Erase the text cursor at the given X,Y coordinates on the screen.
function eraseCursor(x, y, text) {
	for(var pos = 0; pos < text.length; pos++) {
		x += fontWidthIndex[text.charCodeAt(pos)];
	}
	drawColorAtCursorXY(x, y, 255, 255, 255);
}

function checkBlockNS(objectX, objectY, objectWidth) {
	var targetX = objectX + objectWidth;
	while(objectX < targetX) {
		if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)] == 0) {
			return false;
		}
		objectX++;
	}
	return true;
}

function checkBlockEW(objectX, objectY) {
	if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)] == 0) {
		return false;
	}
	return true;
}

window.onload = function() {
	priorityBufferCtx.drawImage(screen000priSprite, 0, 0);
	priorityBufferSdata = priorityBufferCtx.getImageData(0, 0, priorityBuffer.width, priorityBuffer.height);
	mainFontCtx.drawImage(mainFontSprite, 0, 0);
	mainFontSdata = mainFontCtx.getImageData(0, 0, mainFontBuffer.width, mainFontBuffer.height);
	depthBufferCtx.drawImage(screen000depSprite, 0, 0);
	depthBufferSdata = depthBufferCtx.getImageData(0, 0, depthBuffer.width, depthBuffer.height);
	ctx.drawImage(screen000picSprite, 0, 0);
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	
	sprite000Ctx.drawImage(sprite000Sprite, 0, 0);
	sprite000Sdata = sprite000Ctx.getImageData(0, 0, sprite000Buffer.width, sprite000Buffer.height);

	sprite001Ctx.drawImage(sprite001Sprite, 0, 0);
	sprite001Sdata = sprite001Ctx.getImageData(0, 0, sprite001Buffer.width, sprite001Buffer.height);

	sprite002Ctx.drawImage(sprite002Sprite, 0, 0);
	sprite002Sdata = sprite002Ctx.getImageData(0, 0, sprite002Buffer.width, sprite002Buffer.height);

	sprite003Ctx.drawImage(sprite003Sprite, 0, 0);
	sprite003Sdata = sprite003Ctx.getImageData(0, 0, sprite003Buffer.width, sprite003Buffer.height);

	doSpriteTransparency(sprite000Ctx, sprite000Buffer, sprite000Sdata, 52, 90, 72);
	doSpriteTransparency(sprite001Ctx, sprite001Buffer, sprite001Sdata, 52, 90, 72);
	doSpriteTransparency(sprite002Ctx, sprite002Buffer, sprite002Sdata, 52, 90, 72);
	doSpriteTransparency(sprite003Ctx, sprite003Buffer, sprite003Sdata, 52, 90, 72);
	setIndicesAndTransparenciesForFont();
	// Put the status bar at the top of the screen.
	for(var y = 0; y < 19; y++) {
		for(var x = 0; x < screenWidth; x++) {
			imgData.data[(y * rowStride) + (x * 4) + 0] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 1] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 2] = 255;
		}
	}
	ctx.putImageData(imgData, 0, 0);
	putTextOnScreen(30, 0, "Score: 0 of 500");
	putTextOnScreen(765, 0, "Joonas' JS Adventure");
	document.addEventListener('keydown', indicateHeldDownKey);
	function indicateHeldDownKey(e) {
		keyDown = true;
		typedKeyCode = e.keyCode;
		typedKey = e.key;
	}
};

function play(delta)
{
    if(imgData != null) ctx.putImageData(imgData, 0, 0);

	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

	if(startedGame) {
		startedGame = false;
		messageWindowCentered("Joonas' JS Adventure is a Work In Progress.\nI hope you'll enjoy this game.\n2025 Joonas Lindberg.\n\nThis project is free and open source.\nFor the latest version of the project, please use the GitHub repository:\ngithub.com/JoonasTMS86/joonas-jsadventure");
	}
	else if(!waitingForEnterPress) {
		drawAllSprites();

		if(goingleft) {
			var canMove = true;
			var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsW[0];
			var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 1;
			for(var pos = 1; pos < 8; pos++) {
				if(
					playerFeetX == (spriteXCoords[pos] + spriteCheckBlockOffsetsE[pos]) && 
					playerFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
				) {
					canMove = false;
				}
			}
			if(canMove) {
				canMove = checkBlockEW(playerFeetX, playerFeetY);
			}
			if(canMove) {
				spriteXCoords[0] = spriteXCoords[0] - 1;
			}
		}
		if(goingright) {
			playerAnimPos++;
			if(playerAnimPos >= playerAnimDelay) {
				playerAnimPos = 0;
				playerAnimFrame++;
				if(playerAnimFrame >= 4) {
					playerAnimFrame = 0;
				}
				spriteImages[0] = playerAnimFrame;
			}
			var canMove = true;
			var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsE[0];
			var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 1;
			for(var pos = 1; pos < 8; pos++) {
				if(
					playerFeetX == (spriteXCoords[pos] + spriteCheckBlockOffsetsW[pos]) && 
					playerFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
				) {
					canMove = false;
				}
			}
			if(canMove) {
				canMove = checkBlockEW(playerFeetX, playerFeetY);
			}
			if(canMove) {
				spriteXCoords[0] = spriteXCoords[0] + 1;
			}
		}
		if(goingup) {
			var canMove = true;
			var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsNS[0];
			var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 2;
			for(var pos = 1; pos < 8; pos++) {
				if(
					(playerFeetX + spriteWidthsNS[0] - 1) >= (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos]) && 
					playerFeetX < (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos] + spriteWidthsNS[pos] - 1) &&
					playerFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
				) {
					canMove = false;
				}
			}
			if(canMove) {
				canMove = checkBlockNS(playerFeetX, playerFeetY, spriteWidthsNS[0]);
			}
			if(canMove) {
				spriteYCoords[0] = spriteYCoords[0] - 1;
			}
		}
		if(goingdown) {
			var canMove = true;
			var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsNS[0];
			var playerFeetY = spriteYCoords[0] + spriteHeights[0];
			for(var pos = 1; pos < 8; pos++) {
				if(
					(playerFeetX + spriteWidthsNS[0] - 1) >= (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos]) && 
					playerFeetX < (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos] + spriteWidthsNS[pos] - 1) &&
					playerFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
				) {
					canMove = false;
				}
			}
			if(canMove) {
				canMove = checkBlockNS(playerFeetX, playerFeetY, spriteWidthsNS[0]);
			}
			if(canMove) {
				spriteYCoords[0] = spriteYCoords[0] + 1;
			}
		}

		// Key codes:
		// F1              = 112
		// Backspace       = 8
		// Shift           = 16
		// Control         = 17
		// Alt             = 18
		// AltGr           = 225
		// Up Arrow Key    = 38
		// Down Arrow Key  = 40
		// Left Arrow Key  = 37
		// Right Arrow Key = 39

		if(!keyDown && typedKeyCode == 112) {
			messageWindowCentered("Use this key for debugging purposes, for example.");
		}

		if(canTypeKey && keyDown && typedKeyCode != 0 && typedKeyCode != 112 && typedKeyCode != 13 && typedKeyCode != 16 && typedKeyCode != 17 && typedKeyCode != 18 && typedKeyCode != 225 && typedKeyCode != 37 && typedKeyCode != 38 && typedKeyCode != 39 && typedKeyCode != 40) {
			waitingForEnterPress = true;
			secondScreenCtx.putImageData(imgData, 0, 0);
			gameState = STATE_INPUTWINDOW;
			var x, y, winWidth, winHeight, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
			x = 15;
			y = 822;
			winWidth = screenWidth - (x * 2);
			winHeight = 75;
			targetX = x + winWidth;
			targetY = y + winHeight;
			borderTargetX = x + Math.floor(messageWindowMarginWidth / 2) + winWidth - (Math.floor(messageWindowMarginWidth / 2) * 2) - 1;
			borderTargetY = y + Math.floor(messageWindowMarginHeight / 2) + winHeight - (Math.floor(messageWindowMarginHeight / 2) * 2) - 1;
			borderStartX = x + Math.floor(messageWindowMarginWidth / 2);
			borderStartY = y + Math.floor(messageWindowMarginHeight / 2);
			drawWindowOnScreen(x, y, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY);
			x += messageWindowMarginWidth;
			y += messageWindowMarginHeight;
			textInputText = typedKey;
			textInputX = x + 5;
			textInputY = y + 27;
			putTextOnScreen(x, y, "Enter command:");
			drawBorder(textInputX - 5, textInputY - 5, textInputX + winWidth - 25, textInputY + 25);
			putTextOnScreen(textInputX, textInputY, textInputText);
			drawCursor(textInputX, textInputY, textInputText);
		}
		canTypeKey = false;
		keyDown = false;
		if(!keyDown) {
			canTypeKey = true;
		}
		enterTyped = false;
	}
	else {
		if(canTypeKey && keyDown && typedKeyCode != 0 && typedKeyCode != 13 && typedKeyCode != 16 && typedKeyCode != 17 && typedKeyCode != 18 && typedKeyCode != 225 && typedKeyCode != 37 && typedKeyCode != 38 && typedKeyCode != 39 && typedKeyCode != 40) {
			eraseCursor(textInputX, textInputY, textInputText);
			if(typedKeyCode == 8) {
				imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				var x = textInputX;
				var y = textInputY;
				for(var pos = 0; pos < (textInputText.length - 1); pos++) {
					x += fontWidthIndex[textInputText.charCodeAt(pos)];
				}
				var restoreX = x;
				var endX = x + fontWidthIndex[textInputText.charCodeAt(textInputText.length - 1)];
				var endY = y + fontHeightIndex[textInputText.charCodeAt(textInputText.length - 1)];
				while(y < endY) {
					x = restoreX;
					while(x < endX) {
						imgData.data[(y * rowStride) + (x * 4) + 0] = 255;
						imgData.data[(y * rowStride) + (x * 4) + 1] = 255;
						imgData.data[(y * rowStride) + (x * 4) + 2] = 255;
						x++;
					}
					y++;
				}
				ctx.putImageData(imgData, 0, 0);
				textInputText = textInputText.slice(0, -1);
			}
			else {
				textInputText += typedKey;
			}
			putTextOnScreen(textInputX, textInputY, textInputText);
			drawCursor(textInputX, textInputY, textInputText);
		}
		canTypeKey = false;
		keyDown = false;
		if(!keyDown) {
			canTypeKey = true;
		}

		if(enterTyped) {
			console.log("enter pressed");
			waitingForEnterPress = false;
			enterTyped = false;
			imgData = secondScreenCtx.getImageData(0, 0, secondScreenBuffer.width, secondScreenBuffer.height);
			ctx.putImageData(imgData, 0, 0);
			if(gameState == STATE_INPUTWINDOW) {
				gameState = STATE_GAME;
				messageWindowCentered("TO DO: The code that actually parses\nthe user's input.");
			}
		}
	}
}
