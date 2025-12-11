const screenWidth                = 1910;
const screenHeight               = 909;
const rowStride                  = screenWidth * 4;
const messageWindowMarginWidth   = 10; // Message window margin width in pixels.
const messageWindowMarginHeight  = 10; // Message window margin height in pixels.
const STATE_GAME                 = 0;
const STATE_INPUTWINDOW          = 1;
const playerAnimDelay            = 8;
const npcAnimDelay               = 8;
var imgData, imgDataWithoutSprites, canTypeKey, textInputText, textInputX, textInputY;
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
var sprite004Buffer              = document.getElementById("sprite004Buffer");
var sprite004Ctx                 = sprite004Buffer.getContext("2d");
var sprite004Sdata               = sprite004Ctx.createImageData(85, 124);
var sprite004Sprite              = document.getElementById("sprite004");
var sprite005Buffer              = document.getElementById("sprite005Buffer");
var sprite005Ctx                 = sprite005Buffer.getContext("2d");
var sprite005Sdata               = sprite005Ctx.createImageData(85, 124);
var sprite005Sprite              = document.getElementById("sprite005");
var sprite006Buffer              = document.getElementById("sprite006Buffer");
var sprite006Ctx                 = sprite006Buffer.getContext("2d");
var sprite006Sdata               = sprite006Ctx.createImageData(85, 124);
var sprite006Sprite              = document.getElementById("sprite006");
var sprite007Buffer              = document.getElementById("sprite007Buffer");
var sprite007Ctx                 = sprite007Buffer.getContext("2d");
var sprite007Sdata               = sprite007Ctx.createImageData(85, 124);
var sprite007Sprite              = document.getElementById("sprite007");
var sprite008Buffer              = document.getElementById("sprite008Buffer");
var sprite008Ctx                 = sprite008Buffer.getContext("2d");
var sprite008Sdata               = sprite008Ctx.createImageData(85, 124);
var sprite008Sprite              = document.getElementById("sprite008");
var sprite009Buffer              = document.getElementById("sprite009Buffer");
var sprite009Ctx                 = sprite009Buffer.getContext("2d");
var sprite009Sdata               = sprite009Ctx.createImageData(85, 124);
var sprite009Sprite              = document.getElementById("sprite009");
var sprite010Buffer              = document.getElementById("sprite010Buffer");
var sprite010Ctx                 = sprite010Buffer.getContext("2d");
var sprite010Sdata               = sprite010Ctx.createImageData(85, 124);
var sprite010Sprite              = document.getElementById("sprite010");
var sprite011Buffer              = document.getElementById("sprite011Buffer");
var sprite011Ctx                 = sprite011Buffer.getContext("2d");
var sprite011Sdata               = sprite011Ctx.createImageData(85, 124);
var sprite011Sprite              = document.getElementById("sprite011");
var sprite012Buffer              = document.getElementById("sprite012Buffer");
var sprite012Ctx                 = sprite012Buffer.getContext("2d");
var sprite012Sdata               = sprite012Ctx.createImageData(85, 124);
var sprite012Sprite              = document.getElementById("sprite012");
var sprite013Buffer              = document.getElementById("sprite013Buffer");
var sprite013Ctx                 = sprite013Buffer.getContext("2d");
var sprite013Sdata               = sprite013Ctx.createImageData(85, 124);
var sprite013Sprite              = document.getElementById("sprite013");
var sprite014Buffer              = document.getElementById("sprite014Buffer");
var sprite014Ctx                 = sprite014Buffer.getContext("2d");
var sprite014Sdata               = sprite014Ctx.createImageData(85, 124);
var sprite014Sprite              = document.getElementById("sprite014");
var sprite015Buffer              = document.getElementById("sprite015Buffer");
var sprite015Ctx                 = sprite015Buffer.getContext("2d");
var sprite015Sdata               = sprite015Ctx.createImageData(85, 124);
var sprite015Sprite              = document.getElementById("sprite015");
var sprite016Buffer              = document.getElementById("sprite016Buffer");
var sprite016Ctx                 = sprite016Buffer.getContext("2d");
var sprite016Sdata               = sprite016Ctx.createImageData(85, 124);
var sprite016Sprite              = document.getElementById("sprite016");
var sprite017Buffer              = document.getElementById("sprite017Buffer");
var sprite017Ctx                 = sprite017Buffer.getContext("2d");
var sprite017Sdata               = sprite017Ctx.createImageData(85, 124);
var sprite017Sprite              = document.getElementById("sprite017");
var sprite018Buffer              = document.getElementById("sprite018Buffer");
var sprite018Ctx                 = sprite018Buffer.getContext("2d");
var sprite018Sdata               = sprite018Ctx.createImageData(85, 124);
var sprite018Sprite              = document.getElementById("sprite018");
var sprite019Buffer              = document.getElementById("sprite019Buffer");
var sprite019Ctx                 = sprite019Buffer.getContext("2d");
var sprite019Sdata               = sprite019Ctx.createImageData(85, 124);
var sprite019Sprite              = document.getElementById("sprite019");
var sprite020Buffer              = document.getElementById("sprite020Buffer");
var sprite020Ctx                 = sprite020Buffer.getContext("2d");
var sprite020Sdata               = sprite020Ctx.createImageData(85, 124);
var sprite020Sprite              = document.getElementById("sprite020");
var sprite021Buffer              = document.getElementById("sprite021Buffer");
var sprite021Ctx                 = sprite021Buffer.getContext("2d");
var sprite021Sdata               = sprite021Ctx.createImageData(85, 124);
var sprite021Sprite              = document.getElementById("sprite021");
var spriteBuffer                 = document.getElementById("spriteBuffer");
var spriteCtx                    = spriteBuffer.getContext("2d");
var spriteSdata                  = spriteCtx.createImageData(400, 400);
var mainFontBuffer               = document.getElementById("mainFontBuffer");
var mainFontCtx                  = mainFontBuffer.getContext("2d");
var mainFontSdata                = mainFontCtx.createImageData(672, 168);
var mainFontSprite               = document.getElementById("mainFont");
var narrowFontBuffer             = document.getElementById("narrowFontBuffer");
var narrowFontCtx                = narrowFontBuffer.getContext("2d");
var narrowFontSdata              = narrowFontCtx.createImageData(416, 168);
var narrowFontSprite             = document.getElementById("narrowFont");

// The coordinates of the sprites are in these arrays.
var spriteXCoords                = [60, 130, 200, 270, 340, 410, 480, 550];
// The Y coordinates of where the sprites should be displayed on the screen.
var spriteYCoords                = [60, 130, 200, 270, 340, 410, 480, 550];
// These sprite Y coordinates determine the "mask location" of each sprite, which can differ from the sprite display Y.
var spriteMaskYCoords                = [60, 130, 200, 270, 340, 410, 480, 550];
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
var npcAnimPos                   = 0;
var npcAnimFrame                 = 0;
var mainFontStartXIndex          = [];
var mainFontStartYIndex          = [];
var mainFontWidthIndex           = [];
var mainFontHeightIndex          = [];
var narrowFontStartXIndex        = [];
var narrowFontStartYIndex        = [];
var narrowFontWidthIndex         = [];
var narrowFontHeightIndex        = [];
var waitingForEnterPress         = false;
var startedGame                  = true;
var typedKeyCode                 = 0;
var typedKey                     = "";
var keyDown                      = false;
var gameState                    = STATE_GAME;
var ignoredWords                 = [
	"a", "an", "the", "to", "in", "on", "at", "of", "over", "from", "up", "into", "through", "thru", "climbing"
];
var synonyms                     = [
	"inventory", "inv", 0,
	"get", "take", "pick", "grab", 0,
	"look", "see", "watch", 0,
	"talk", "speak", 0,
	"climb", 0,
	"people", "guys", "crowd", "men", "women", "person", "guy", "man", "woman", 0,
	"bush", 0,
	"fence", "obstacle", "wall", 0
];
var gameEngineFlags              = [];
var gameEngineVariables          = [];
var npcDirections                = [0, true, true, true, true, true, true, true];
var saidShowInventory            = false;

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

// Get the bit value (for the bitwise operation) and byte offset.
function getBitValueAndByteOffset(offset) {
	var pos = Math.floor(offset / 8);
	var bitOffset = offset - (pos * 8);
	var bit = 128 >> bitOffset;
	return [pos, bit];
}

// Get the state of the given game engine flag.
function getFlag(flagNumber) {
	var bitValues = [];
	bitValues = getBitValueAndByteOffset(flagNumber);
	if((gameEngineFlags[bitValues[0]] & bitValues[1]) == 0) {
		return false;
	}
	return true;
}

// Set the given game engine flag.
function setFlag(flagNumber) {
	var bitValues = [];
	bitValues = getBitValueAndByteOffset(flagNumber);
	gameEngineFlags[bitValues[0]] = gameEngineFlags[bitValues[0]] | bitValues[1];
}

// Clear the given game engine flag.
function clearFlag(flagNumber) {
	var bitValues = [];
	bitValues = getBitValueAndByteOffset(flagNumber);
	var bit = bitValues[1] ^ 255;
	gameEngineFlags[bitValues[0]] = gameEngineFlags[bitValues[0]] & bit;
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
		case 4:
			sData = sprite004Sdata;
			break;
		case 5:
			sData = sprite005Sdata;
			break;
		case 6:
			sData = sprite006Sdata;
			break;
		case 7:
			sData = sprite007Sdata;
			break;
		case 8:
			sData = sprite008Sdata;
			break;
		case 9:
			sData = sprite009Sdata;
			break;
		case 10:
			sData = sprite010Sdata;
			break;
		case 11:
			sData = sprite011Sdata;
			break;
		case 12:
			sData = sprite012Sdata;
			break;
		case 13:
			sData = sprite013Sdata;
			break;
		case 14:
			sData = sprite014Sdata;
			break;
		case 15:
			sData = sprite015Sdata;
			break;
		case 16:
			sData = sprite016Sdata;
			break;
		case 17:
			sData = sprite017Sdata;
			break;
		case 18:
			sData = sprite018Sdata;
			break;
		case 19:
			sData = sprite019Sdata;
			break;
		case 20:
			sData = sprite020Sdata;
			break;
		case 21:
			sData = sprite021Sdata;
			break;
	}
	spriteCtx.putImageData(sData, 0, 0);
	spriteSdata = spriteCtx.getImageData(0, 0, spriteWidths[spriteNumber], spriteHeights[spriteNumber]);
	var spriterowstride = spriteWidths[spriteNumber] * 4;
	// Mask out those pixels that are behind an object.
	var depth;
	var feetY = spriteMaskYCoords[spriteNumber] + spriteHeights[spriteNumber] - 1;
	for(var y = 0; y < spriteHeights[spriteNumber]; y++) {
		for(var x = 0; x < spriteWidths[spriteNumber]; x++) {
			depth = (depthBufferSdata.data[((y + spriteMaskYCoords[spriteNumber]) * rowStride) + ((x + spriteXCoords[spriteNumber]) * 4) + 1] * 256) + depthBufferSdata.data[((y + spriteMaskYCoords[spriteNumber]) * rowStride) + ((x + spriteXCoords[spriteNumber]) * 4) + 2];
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
			if(spriteMaskYCoords[spriteDrawOrder[checkPos]] < spriteMaskYCoords[spriteDrawOrder[placePos]]) {
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

function setIndicesAndTransparenciesForFont(whichFont) {
	var indexPos, x, y, restoreX, restoreY, referencedFontWidth, width, height, highestHeight, fontRowStride, boundaryColorR, boundaryColorG, boundaryColorB, keyColorR, keyColorG, keyColorB, searching;
	switch(whichFont) {
		case 0:
			referencedFontWidth = mainFontBuffer.width;
			break;
		case 1:
			referencedFontWidth = narrowFontBuffer.width;
			break;
	}
	fontRowStride = referencedFontWidth * 4;
	indexPos = 0;
	x = 1;
	y = 1;
	highestHeight = 0;
	while(indexPos < 256) {
		switch(whichFont) {
			case 0:
				boundaryColorR = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 0];
				boundaryColorG = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 1];
				boundaryColorB = mainFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 2];
				keyColorR = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 0];
				keyColorG = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 1];
				keyColorB = mainFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 2];
				break;
			case 1:
				boundaryColorR = narrowFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 0];
				boundaryColorG = narrowFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 1];
				boundaryColorB = narrowFontSdata.data[((y - 1) * fontRowStride) + ((x - 1) * 4) + 2];
				keyColorR = narrowFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 0];
				keyColorG = narrowFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 1];
				keyColorB = narrowFontSdata.data[((y - 1) * fontRowStride) + (x * 4) + 2];
				break;
		}
		searching = true;
		width = 0;
		height = 0;
		restoreX = x;
		restoreY = y;
		// Get the width and the height for the currently inspected character.
		while(searching) {
			switch(whichFont) {
				case 0:
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
					break;
				case 1:
					if(
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == boundaryColorR &&
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == boundaryColorG &&
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == boundaryColorB
					) {
						searching = false;
					}
					else {
						x++;
						width++;
					}
					break;
			}
		}
		searching = true;
		x = restoreX;
		y = restoreY;
		while(searching) {
			switch(whichFont) {
				case 0:
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
					break;
				case 1:
					if(
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == boundaryColorR &&
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == boundaryColorG &&
						narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == boundaryColorB
					) {
						searching = false;
					}
					else {
						y++;
						height++;
					}
					break;
			}
		}
		if(height > highestHeight) highestHeight = height;
		switch(whichFont) {
			case 0:
				mainFontStartXIndex[indexPos] = restoreX;
				mainFontStartYIndex[indexPos] = restoreY;
				mainFontWidthIndex[indexPos] = width;
				mainFontHeightIndex[indexPos] = height;
				break;
			case 1:
				narrowFontStartXIndex[indexPos] = restoreX;
				narrowFontStartYIndex[indexPos] = restoreY;
				narrowFontWidthIndex[indexPos] = width;
				narrowFontHeightIndex[indexPos] = height;
				break;
		}

		y = restoreY;
		// Make those pixels of the font transparent that correspond to the given key RGB color.
		while(y < (restoreY + height)) {
			x = restoreX;
			while(x < (restoreX + width)) {
				switch(whichFont) {
					case 0:
						if(
							mainFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == keyColorR &&
							mainFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == keyColorG &&
							mainFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == keyColorB
						) {
							mainFontSdata.data[(y * fontRowStride) + (x * 4) + 3] = 0;
						}
						x++;
						break;
					case 1:
						if(
							narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 0] == keyColorR &&
							narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 1] == keyColorG &&
							narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 2] == keyColorB
						) {
							narrowFontSdata.data[(y * fontRowStride) + (x * 4) + 3] = 0;
						}
						x++;
						break;
				}
			}
			y++;
		}

		indexPos++;
		y = restoreY;
		x = restoreX + width + 2;
		if(x >= referencedFontWidth) {
			x = 1;
			y += highestHeight + 2;
			highestHeight = 0;
		}
	}
	switch(whichFont) {
		case 0:
			mainFontCtx.putImageData(mainFontSdata, 0, 0);
			break;
		case 1:
			narrowFontCtx.putImageData(narrowFontSdata, 0, 0);
			break;
	}
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

function putTextOnScreen(x, y, message, whichFont) {
	var referencedFontBuffer, referencedFontStartXIndex, referencedFontStartYIndex, referencedFontWidthIndex, referencedFontHeightIndex;
	switch(whichFont) {
		case 0:
			referencedFontBuffer = mainFontBuffer;
			referencedFontStartXIndex = mainFontStartXIndex;
			referencedFontStartYIndex = mainFontStartYIndex;
			referencedFontWidthIndex = mainFontWidthIndex;
			referencedFontHeightIndex = mainFontHeightIndex;
			break;
		case 1:
			referencedFontBuffer = narrowFontBuffer;
			referencedFontStartXIndex = narrowFontStartXIndex;
			referencedFontStartYIndex = narrowFontStartYIndex;
			referencedFontWidthIndex = narrowFontWidthIndex;
			referencedFontHeightIndex = narrowFontHeightIndex;
			break;
	}
	ctx.putImageData(imgData, 0, 0);
	var highestCharacter = 0;
	var restoreX = x;
	for(var pos = 0; pos < message.length; pos++) {
		if(message.charCodeAt(pos) == 10) {
			if(highestCharacter == 0) highestCharacter = referencedFontHeightIndex[32];
			x = restoreX;
			y += highestCharacter;
			highestCharacter = 0;
		}
		else {
			ctx.drawImage(
				referencedFontBuffer, 
				referencedFontStartXIndex[message.charCodeAt(pos)], 
				referencedFontStartYIndex[message.charCodeAt(pos)], 
				referencedFontWidthIndex[message.charCodeAt(pos)], 
				referencedFontHeightIndex[message.charCodeAt(pos)], 
				x, 
				y, 
				referencedFontWidthIndex[message.charCodeAt(pos)], 
				referencedFontHeightIndex[message.charCodeAt(pos)]
			);
			x += referencedFontWidthIndex[message.charCodeAt(pos)];
			if(referencedFontHeightIndex[message.charCodeAt(pos)] > highestCharacter) highestCharacter = referencedFontHeightIndex[message.charCodeAt(pos)];
		}
	}
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	ctx.putImageData(imgData, 0, 0);
}

function messageWindow(message, isCentered, x, y) {
	var widestWidth, highestHeightForCurrentRow, highestHeight, width, height, messageWindowWidth, messageWindowHeight;
	secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
	drawAllSprites();
	waitingForEnterPress = true;
	widestWidth = 0;
	highestHeight = 0;
	highestHeightForCurrentRow = 0;
	width = 0;
	height = 0;
	for(var pos = 0; pos < message.length; pos++) {
		if(message.charCodeAt(pos) == 10) {
			if(highestHeightForCurrentRow == 0) highestHeightForCurrentRow = mainFontHeightIndex[32];
			if(width > widestWidth) widestWidth = width;
			highestHeight += highestHeightForCurrentRow;
			width = 0;
			height = 0;
			highestHeightForCurrentRow = 0;
		}
		else {
			width += mainFontWidthIndex[message.charCodeAt(pos)];
			height = mainFontHeightIndex[message.charCodeAt(pos)];
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
	putTextOnScreen(x, y, message, 0);
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
		x += mainFontWidthIndex[text.charCodeAt(pos)];
	}
	drawColorAtCursorXY(x, y, 0, 0, 0);
}

// Erase the text cursor at the given X,Y coordinates on the screen.
function eraseCursor(x, y, text) {
	for(var pos = 0; pos < text.length; pos++) {
		x += mainFontWidthIndex[text.charCodeAt(pos)];
	}
	drawColorAtCursorXY(x, y, 255, 255, 255);
}

function checkBlockNS(objectX, objectY, objectWidth) {
	var targetX = objectX + objectWidth;
	while(objectX < targetX) {
		if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)] != 0) {
			return priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)];
		}
		objectX++;
	}
	return 0;
}

function checkBlockEW(objectX, objectY) {
	if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)] == 0) {
		return priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4)];
	}
	return 0;
}

// If the given input string matches the words we compare it to, then we return true in this function, otherwise false.
function doesInputMatchThis(givenInput, arrayOfWordsToCheck) {
	if(givenInput.length != arrayOfWordsToCheck.length) {
		return false;
	}
	for(var pos = 0; pos < arrayOfWordsToCheck.length; pos++) {
		if(givenInput[pos] != arrayOfWordsToCheck[pos]) {
			return false;
		}
	}
	return true;
}

// Parse the user input.
function parse(userInput) {
	var enteredWords = [];
	var enteredWordsPos = 0;
	var pos = 0;
	var currentWord = "";
	var inAWord = false;
	var checking = true;
	var knownWord;
	while(checking) {
		if(pos >= userInput.length || userInput.charCodeAt(pos) == 32) {
			if(inAWord) {
				// Check whether the given word matches any of the small words which have no effect on the way the given sentence is parsed.
				var knownArticle = false;
				var currentWordLowercase = currentWord.toLowerCase();
				knownWord = false;
				for(var checkPos = 0; checkPos < ignoredWords.length; checkPos++) {
					if(currentWordLowercase == ignoredWords[checkPos]) {
						knownArticle = true;
						checkPos = ignoredWords.length;
						inAWord = false;
						currentWord = "";
					}
				}

				if(!knownArticle) {
					// Check whether the given word matches any of the synonyms.
					var thisWord = 0;
					for(var checkPos = 0; checkPos < synonyms.length; checkPos++) {
						if(synonyms[checkPos] == 0) {
							thisWord = checkPos + 1;
						}
						else if(currentWordLowercase == synonyms[checkPos]) {
							knownWord = true;
							currentWord = synonyms[thisWord];
							checkPos = synonyms.length;
						}
					}

					if(!knownWord) {
						checking = false;
					}
					else {
						// If the word matches any of the known words, we add it to our entered words array.
						enteredWords[enteredWordsPos] = currentWord;
						enteredWordsPos++;
						inAWord = false;
						currentWord = "";
					}
				}
			}
		}
		else {
			inAWord = true;
			currentWord += userInput.charAt(pos);
		}
		pos++;
		if(pos >= userInput.length && !inAWord) {
			checking = false;
		}
	}
	if(knownWord) {
		if(doesInputMatchThis(enteredWords, ["inventory"])) {
			saidShowInventory = true;
		}
		else if(doesInputMatchThis(enteredWords, ["look"])) {
			messageWindowCentered("You are in an area where the only elements you can see are\nseven clones of yourself who march back and forth, a\nclimbing wall and a bush.");
		}
		else if(doesInputMatchThis(enteredWords, ["look", "people"])) {
			messageWindowCentered("You see seven clones of yourself.\nThey really seem to enjoy walking back and forth.\nYou wonder who has created these guys.");
		}
		else if(doesInputMatchThis(enteredWords, ["look", "bush"])) {
			messageWindowCentered("It's an ordinary looking bush. It seems the soil\naround here is fertile enough for vegetation to grow.");
		}
		else if(doesInputMatchThis(enteredWords, ["look", "fence"])) {
			messageWindowCentered("The climbing wall makes you wonder whether this place\nwas once planned to be somekind of an obstacle course.");
		}
		else if(doesInputMatchThis(enteredWords, ["talk", "people"])) {
			messageWindowCentered("You talk to the Joonas clones.\n\"Hey Joonas clones!\", you say. \"What exactly is my goal in this game?\"\nTo which they reply:\n\"The purpose of this game is to tell all the essential things about Joonas.\nYou probably already know a lot about him, but if there's something you\ndidn't yet know about Joonas, you will learn it upon playing this game.\nIf you get stuck on any of the puzzles of this game, please let me know\nand I can give you a hint file.\"");
		}
		else if(doesInputMatchThis(enteredWords, ["get", "people"])) {
			messageWindowCentered("You are not a bodybuilder. Therefore, you don't have the required\nstrength to lift a grown-up person up.");
		}
		else if(doesInputMatchThis(enteredWords, ["get", "bush"])) {
			messageWindowCentered("You see no need to carry any vegetation around, so you decide to\nleave the bush alone.");
		}
		else if(doesInputMatchThis(enteredWords, ["climb", "fence"])) {
			if(spriteXCoords[0] >= 546 && spriteXCoords[0] <= 1117 && 
				(spriteYCoords[0] >= 430 && spriteYCoords[0] <= 432) ||
				(spriteYCoords[0] >= 422 && spriteYCoords[0] <= 424)
			) {
				// Disable player control while the protagonist is climbing the fence.
				if(spriteYCoords[0] >= 430 && spriteYCoords[0] <= 432) {
					setFlag(0);   // Disable player control
					setFlag(1);   // Player is climbing the fence
					clearFlag(2); // Player is not on the opposite side of the fence
					clearFlag(3); // Player is climbing the fence from S
				}
				else {
					setFlag(0);   // Disable player control
					setFlag(1);   // Player is climbing the fence
					clearFlag(2); // Player is not on the opposite side of the fence
					setFlag(3);   // Player is climbing the fence from N
				}
				playerAnimPos = 0;
				gameEngineVariables[0] = 0;
			}
			else {
				messageWindowCentered("You need to get closer to the climbing wall to climb it.");
			}
		}
		else {
			messageWindowCentered("I understand your words, but not what you're trying to say.");
		}
	}
	else if(currentWord != "") {
		// This text is shown whenever the parser doesn't recognize one or several words of the given input.
		messageWindowCentered("I don't know the word \"" + currentWord + "\".");
	}
}

window.onload = function() {
	// Initialize all the 32,768 (8 bits * 4096 = 32,768 flags) game engine flags to "clear".
	for(var pos = 0; pos < 4096; pos++) {
		gameEngineFlags[pos] = 0;
		gameEngineVariables[pos] = 0;
	}
	priorityBufferCtx.drawImage(screen000priSprite, 0, 0);
	priorityBufferSdata = priorityBufferCtx.getImageData(0, 0, priorityBuffer.width, priorityBuffer.height);
	mainFontCtx.drawImage(mainFontSprite, 0, 0);
	mainFontSdata = mainFontCtx.getImageData(0, 0, mainFontBuffer.width, mainFontBuffer.height);
	narrowFontCtx.drawImage(narrowFontSprite, 0, 0);
	narrowFontSdata = narrowFontCtx.getImageData(0, 0, narrowFontBuffer.width, narrowFontBuffer.height);
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

	sprite004Ctx.drawImage(sprite004Sprite, 0, 0);
	sprite004Sdata = sprite004Ctx.getImageData(0, 0, sprite004Buffer.width, sprite004Buffer.height);

	sprite005Ctx.drawImage(sprite005Sprite, 0, 0);
	sprite005Sdata = sprite005Ctx.getImageData(0, 0, sprite005Buffer.width, sprite005Buffer.height);

	sprite006Ctx.drawImage(sprite006Sprite, 0, 0);
	sprite006Sdata = sprite006Ctx.getImageData(0, 0, sprite006Buffer.width, sprite006Buffer.height);

	sprite007Ctx.drawImage(sprite007Sprite, 0, 0);
	sprite007Sdata = sprite007Ctx.getImageData(0, 0, sprite007Buffer.width, sprite007Buffer.height);

	sprite008Ctx.drawImage(sprite008Sprite, 0, 0);
	sprite008Sdata = sprite008Ctx.getImageData(0, 0, sprite008Buffer.width, sprite008Buffer.height);

	sprite009Ctx.drawImage(sprite009Sprite, 0, 0);
	sprite009Sdata = sprite009Ctx.getImageData(0, 0, sprite009Buffer.width, sprite009Buffer.height);

	sprite010Ctx.drawImage(sprite010Sprite, 0, 0);
	sprite010Sdata = sprite010Ctx.getImageData(0, 0, sprite010Buffer.width, sprite010Buffer.height);

	sprite011Ctx.drawImage(sprite011Sprite, 0, 0);
	sprite011Sdata = sprite011Ctx.getImageData(0, 0, sprite011Buffer.width, sprite011Buffer.height);

	sprite012Ctx.drawImage(sprite012Sprite, 0, 0);
	sprite012Sdata = sprite012Ctx.getImageData(0, 0, sprite012Buffer.width, sprite012Buffer.height);

	sprite013Ctx.drawImage(sprite013Sprite, 0, 0);
	sprite013Sdata = sprite013Ctx.getImageData(0, 0, sprite013Buffer.width, sprite013Buffer.height);

	sprite014Ctx.drawImage(sprite014Sprite, 0, 0);
	sprite014Sdata = sprite014Ctx.getImageData(0, 0, sprite014Buffer.width, sprite014Buffer.height);

	sprite015Ctx.drawImage(sprite015Sprite, 0, 0);
	sprite015Sdata = sprite015Ctx.getImageData(0, 0, sprite015Buffer.width, sprite015Buffer.height);

	sprite016Ctx.drawImage(sprite016Sprite, 0, 0);
	sprite016Sdata = sprite016Ctx.getImageData(0, 0, sprite016Buffer.width, sprite016Buffer.height);

	sprite017Ctx.drawImage(sprite017Sprite, 0, 0);
	sprite017Sdata = sprite017Ctx.getImageData(0, 0, sprite017Buffer.width, sprite017Buffer.height);

	sprite018Ctx.drawImage(sprite018Sprite, 0, 0);
	sprite018Sdata = sprite018Ctx.getImageData(0, 0, sprite018Buffer.width, sprite018Buffer.height);

	sprite019Ctx.drawImage(sprite019Sprite, 0, 0);
	sprite019Sdata = sprite019Ctx.getImageData(0, 0, sprite019Buffer.width, sprite019Buffer.height);

	sprite020Ctx.drawImage(sprite020Sprite, 0, 0);
	sprite020Sdata = sprite020Ctx.getImageData(0, 0, sprite020Buffer.width, sprite020Buffer.height);

	sprite021Ctx.drawImage(sprite021Sprite, 0, 0);
	sprite021Sdata = sprite021Ctx.getImageData(0, 0, sprite021Buffer.width, sprite021Buffer.height);

	doSpriteTransparency(sprite000Ctx, sprite000Buffer, sprite000Sdata, 52, 90, 72);
	doSpriteTransparency(sprite001Ctx, sprite001Buffer, sprite001Sdata, 52, 90, 72);
	doSpriteTransparency(sprite002Ctx, sprite002Buffer, sprite002Sdata, 52, 90, 72);
	doSpriteTransparency(sprite003Ctx, sprite003Buffer, sprite003Sdata, 52, 90, 72);
	doSpriteTransparency(sprite004Ctx, sprite004Buffer, sprite004Sdata, 52, 90, 72);
	doSpriteTransparency(sprite005Ctx, sprite005Buffer, sprite005Sdata, 52, 90, 72);
	doSpriteTransparency(sprite006Ctx, sprite006Buffer, sprite006Sdata, 52, 90, 72);
	doSpriteTransparency(sprite007Ctx, sprite007Buffer, sprite007Sdata, 52, 90, 72);
	doSpriteTransparency(sprite008Ctx, sprite008Buffer, sprite008Sdata, 52, 90, 72);
	doSpriteTransparency(sprite009Ctx, sprite009Buffer, sprite009Sdata, 52, 90, 72);
	doSpriteTransparency(sprite010Ctx, sprite010Buffer, sprite010Sdata, 52, 90, 72);
	doSpriteTransparency(sprite011Ctx, sprite011Buffer, sprite011Sdata, 52, 90, 72);
	doSpriteTransparency(sprite012Ctx, sprite012Buffer, sprite012Sdata, 52, 90, 72);
	doSpriteTransparency(sprite013Ctx, sprite013Buffer, sprite013Sdata, 52, 90, 72);
	doSpriteTransparency(sprite014Ctx, sprite014Buffer, sprite014Sdata, 52, 90, 72);
	doSpriteTransparency(sprite015Ctx, sprite015Buffer, sprite015Sdata, 52, 90, 72);
	doSpriteTransparency(sprite016Ctx, sprite016Buffer, sprite016Sdata, 52, 90, 72);
	doSpriteTransparency(sprite017Ctx, sprite017Buffer, sprite017Sdata, 52, 90, 72);
	doSpriteTransparency(sprite018Ctx, sprite018Buffer, sprite018Sdata, 52, 90, 72);
	doSpriteTransparency(sprite019Ctx, sprite019Buffer, sprite019Sdata, 52, 90, 72);
	doSpriteTransparency(sprite020Ctx, sprite020Buffer, sprite020Sdata, 52, 90, 72);
	doSpriteTransparency(sprite021Ctx, sprite021Buffer, sprite021Sdata, 52, 90, 72);
	setIndicesAndTransparenciesForFont(0); // 0 = set indices and transparencies for main (default) font
	setIndicesAndTransparenciesForFont(1); // 1 = set indices and transparencies for narrow font
	// Put the status bar at the top of the screen.
	for(var y = 0; y < 19; y++) {
		for(var x = 0; x < screenWidth; x++) {
			imgData.data[(y * rowStride) + (x * 4) + 0] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 1] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 2] = 255;
		}
	}
	ctx.putImageData(imgData, 0, 0);
	putTextOnScreen(30, 0, "Score: 0 of 500", 0);
	putTextOnScreen(765, 0, "Joonas' JS Adventure", 0);
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
	if(gameState != STATE_INPUTWINDOW) imgDataWithoutSprites = imgData;

	if(startedGame) {
		startedGame = false;
		messageWindowCentered("Joonas' JS Adventure is a Work In Progress.\nI hope you'll enjoy this game.\n2025 Joonas Lindberg.\n\nThis project is free and open source.\nFor the latest version of the project, please use the GitHub repository:\ngithub.com/JoonasTMS86/joonas-jsadventure");
	}
	else if(!waitingForEnterPress) {
		drawAllSprites();

		// Reading game engine flag 0 this way instead of with getFlag() results in a slightly better performance.
		if(gameEngineFlags[0] <= 127) {
			if(goingleft) {
				playerAnimPos++;
				if(playerAnimPos >= playerAnimDelay) {
					playerAnimPos = 0;
					playerAnimFrame++;
					if(playerAnimFrame >= 4) {
						playerAnimFrame = 0;
					}
					spriteImages[0] = 4 + playerAnimFrame;
				}
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
				var blockType;
				if(canMove) {
					blockType = checkBlockEW(playerFeetX, playerFeetY);
				}
				if(blockType == 0) {
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
				var blockType;
				if(canMove) {
					blockType = checkBlockEW(playerFeetX, playerFeetY);
				}
				if(blockType == 0) {
					spriteXCoords[0] = spriteXCoords[0] + 1;
				}
			}
			if(goingup) {
				if(!goingleft && !goingright) {
					playerAnimPos++;
					if(playerAnimPos >= playerAnimDelay) {
						playerAnimPos = 0;
						playerAnimFrame++;
						if(playerAnimFrame >= 4) {
							playerAnimFrame = 0;
						}
						spriteImages[0] = 8 + playerAnimFrame;
					}
				}
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
				var blockType;
				if(canMove) {
					blockType = checkBlockNS(playerFeetX, playerFeetY, spriteWidthsNS[0]);
				}
				if(blockType == 0) {
					spriteYCoords[0] = spriteYCoords[0] - 1;
					spriteMaskYCoords[0] = spriteMaskYCoords[0] - 1;
				}
			}
			if(goingdown) {
				if(!goingleft && !goingright) {
					playerAnimPos++;
					if(playerAnimPos >= playerAnimDelay) {
						playerAnimPos = 0;
						playerAnimFrame++;
						if(playerAnimFrame >= 4) {
							playerAnimFrame = 0;
						}
						spriteImages[0] = 12 + playerAnimFrame;
					}
				}
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
				var blockType;
				if(canMove) {
					blockType = checkBlockNS(playerFeetX, playerFeetY, spriteWidthsNS[0]);
				}
				if(blockType == 0) {
					spriteYCoords[0] = spriteYCoords[0] + 1;
					spriteMaskYCoords[0] = spriteMaskYCoords[0] + 1;
				}
			}

			// Key codes:
			// F1              = 112
			// Backspace       = 8
			// Tab             = 9
			// Shift           = 16
			// Control         = 17
			// Alt             = 18
			// AltGr           = 225
			// Up Arrow Key    = 38
			// Down Arrow Key  = 40
			// Left Arrow Key  = 37
			// Right Arrow Key = 39

			if(!keyDown && typedKeyCode == 112) {
				messageWindowCentered("debug info\nplayerX: " + spriteXCoords[0] + "\nplayerY: " + spriteYCoords[0]);
			}

			if(canTypeKey && keyDown && typedKey.length == 1) {
				waitingForEnterPress = true;
				secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
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
				putTextOnScreen(x, y, "Enter command:", 0);
				drawBorder(textInputX - 5, textInputY - 5, textInputX + winWidth - 25, textInputY + 25);
				putTextOnScreen(textInputX, textInputY, textInputText, 0);
				drawCursor(textInputX, textInputY, textInputText);
			}

			// Display the inventory window. You display the inventory by entering "inventory" at the input window or by pressing the Tab key.
			if((canTypeKey && keyDown && typedKeyCode == 9) || saidShowInventory) {
				console.log("open inventory window");
				waitingForEnterPress = true;
				saidShowInventory = false;
				var x, y, winWidth, winHeight, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
				x = 605;
				y = 150;
				winWidth = 700;
				winHeight = 500;
				targetX = x + winWidth;
				targetY = y + winHeight;
				borderTargetX = x + Math.floor(messageWindowMarginWidth / 2) + winWidth - (Math.floor(messageWindowMarginWidth / 2) * 2) - 1;
				borderTargetY = y + Math.floor(messageWindowMarginHeight / 2) + winHeight - (Math.floor(messageWindowMarginHeight / 2) * 2) - 1;
				borderStartX = x + Math.floor(messageWindowMarginWidth / 2);
				borderStartY = y + Math.floor(messageWindowMarginHeight / 2);
				drawWindowOnScreen(x, y, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY);
				/*
				Inventory items could use a different font, so that we can fit even very long inventory item names
				on one line, two different items on the same line separated by columns.
				The font could have the same height as the default font but narrower width.
				The inventory item text font could be 11 x 19 px.
				*/
				putTextOnScreen(797, 175, "You are carrying:", 0);
				// Uncomment the following 2 lines in order to see the narrow font in use.
				//putTextOnScreen(616, 194, "Very Long Inventory Item Name", 1);
				//putTextOnScreen(966, 194, "Very Long Inventory Item Name", 1);
				putTextOnScreen(822, 391, "Nothing at all", 0);
			}
			canTypeKey = false;
			keyDown = false;
			if(!keyDown) {
				canTypeKey = true;
			}
			enterTyped = false;
		}
		if(getFlag(1)) {
			if(!getFlag(3)) {
				if(!getFlag(2)) {
					if(spriteYCoords[0] > 225) {
						playerAnimPos++;
						if(playerAnimPos >= playerAnimDelay) {
							playerAnimPos = 0;
							gameEngineVariables[0] = gameEngineVariables[0] + 1;
							if(gameEngineVariables[0] >= 3) {
								gameEngineVariables[0] = 0;
							}
							spriteImages[0] = 16 + gameEngineVariables[0];
						}
						spriteYCoords[0] = spriteYCoords[0] - 1;
					}
					else {
						spriteMaskYCoords[0] = spriteYCoords[0];
						setFlag(2);
						playerAnimPos = 0;
					}
				}
				else {
					if(spriteYCoords[0] < 424) {
						playerAnimPos++;
						if(playerAnimPos >= playerAnimDelay) {
							playerAnimPos = 0;
							gameEngineVariables[0] = gameEngineVariables[0] + 1;
							if(gameEngineVariables[0] >= 3) {
								gameEngineVariables[0] = 0;
							}
							spriteImages[0] = 19 + gameEngineVariables[0];
						}
						spriteYCoords[0] = spriteYCoords[0] + 1;
						spriteMaskYCoords[0] = spriteMaskYCoords[0] + 1;
					}
					else {
						clearFlag(0);
						clearFlag(1);
						spriteImages[0] = 12;
					}
				}
			}
			else {
				if(!getFlag(2)) {
					if(spriteYCoords[0] > 225) {
						playerAnimPos++;
						if(playerAnimPos >= playerAnimDelay) {
							playerAnimPos = 0;
							gameEngineVariables[0] = gameEngineVariables[0] + 1;
							if(gameEngineVariables[0] >= 3) {
								gameEngineVariables[0] = 0;
							}
							spriteImages[0] = 19 + gameEngineVariables[0];
						}
						spriteYCoords[0] = spriteYCoords[0] - 1;
						spriteMaskYCoords[0] = spriteMaskYCoords[0] - 1;
					}
					else {
						spriteMaskYCoords[0] = 430;
						setFlag(2);
						playerAnimPos = 0;
					}
				}
				else {
					if(spriteYCoords[0] < 430) {
						playerAnimPos++;
						if(playerAnimPos >= playerAnimDelay) {
							playerAnimPos = 0;
							gameEngineVariables[0] = gameEngineVariables[0] + 1;
							if(gameEngineVariables[0] >= 3) {
								gameEngineVariables[0] = 0;
							}
							spriteImages[0] = 16 + gameEngineVariables[0];
						}
						spriteYCoords[0] = spriteYCoords[0] + 1;
					}
					else {
						clearFlag(0);
						clearFlag(1);
						spriteImages[0] = 8;
					}
				}
			}
		}

		npcAnimPos++;
		if(npcAnimPos >= npcAnimDelay) {
			npcAnimPos = 0;
			npcAnimFrame++;
			if(npcAnimFrame >= 4) {
				npcAnimFrame = 0;
			}
			if(npcDirections[1]) {
				spriteImages[1] = npcAnimFrame;
			}
			else {
				spriteImages[1] = 4 + npcAnimFrame;
			}
			if(npcDirections[2]) {
				spriteImages[2] = npcAnimFrame;
			}
			else {
				spriteImages[2] = 4 + npcAnimFrame;
			}
			if(npcDirections[3]) {
				spriteImages[3] = npcAnimFrame;
			}
			else {
				spriteImages[3] = 4 + npcAnimFrame;
			}
			if(npcDirections[4]) {
				spriteImages[4] = npcAnimFrame;
			}
			else {
				spriteImages[4] = 4 + npcAnimFrame;
			}
			if(npcDirections[5]) {
				spriteImages[5] = npcAnimFrame;
			}
			else {
				spriteImages[5] = 4 + npcAnimFrame;
			}
			if(npcDirections[6]) {
				spriteImages[6] = npcAnimFrame;
			}
			else {
				spriteImages[6] = 4 + npcAnimFrame;
			}
			if(npcDirections[7]) {
				spriteImages[7] = npcAnimFrame;
			}
			else {
				spriteImages[7] = 4 + npcAnimFrame;
			}
		}

		for(var index = 1; index < 8; index++) {
			if(npcDirections[index]) {
				var canMove = true;
				var npcFeetX = spriteXCoords[index] + spriteCheckBlockOffsetsE[index];
				var npcFeetY = spriteYCoords[index] + spriteHeights[index] - 1;
				for(var pos = 0; pos < 8; pos++) {
					if(pos == index) pos++;
					if(
						npcFeetX == (spriteXCoords[pos] + spriteCheckBlockOffsetsW[pos]) && 
						npcFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
					) {
						canMove = false;
					}
				}
				var blockType;
				if(canMove) {
					blockType = checkBlockEW(npcFeetX, npcFeetY);
				}
				if(blockType == 0) {
					spriteXCoords[index] = spriteXCoords[index] + 1;
				}
				if(spriteXCoords[index] >= 1829) {
					npcDirections[index] = false;
				}
			}
			else {
				var canMove = true;
				var npcFeetX = spriteXCoords[index] + spriteCheckBlockOffsetsW[index];
				var npcFeetY = spriteYCoords[index] + spriteHeights[index] - 1;
				for(var pos = 0; pos < 8; pos++) {
					if(pos == index) pos++;
					if(
						npcFeetX == (spriteXCoords[pos] + spriteCheckBlockOffsetsE[pos]) && 
						npcFeetY == (spriteYCoords[pos] + spriteHeights[pos] - 1)
					) {
						canMove = false;
					}
				}
				var blockType;
				if(canMove) {
					blockType = checkBlockEW(npcFeetX, npcFeetY);
				}
				if(blockType == 0) {
					spriteXCoords[index] = spriteXCoords[index] - 1;
				}
				if(spriteXCoords[index] <= 0) {
					npcDirections[index] = true;
				}
			}
		}
	}
	else {
		if(gameState == STATE_INPUTWINDOW && canTypeKey && keyDown && typedKeyCode != 13) {
			eraseCursor(textInputX, textInputY, textInputText);
			if(typedKeyCode == 8) {
				imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				var x = textInputX;
				var y = textInputY;
				for(var pos = 0; pos < (textInputText.length - 1); pos++) {
					x += mainFontWidthIndex[textInputText.charCodeAt(pos)];
				}
				var restoreX = x;
				var endX = x + mainFontWidthIndex[textInputText.charCodeAt(textInputText.length - 1)];
				var endY = y + mainFontHeightIndex[textInputText.charCodeAt(textInputText.length - 1)];
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
			if(typedKey.length == 1) {
				textInputText += typedKey;
			}
			putTextOnScreen(textInputX, textInputY, textInputText, 0);
			drawCursor(textInputX, textInputY, textInputText);
		}
		canTypeKey = false;
		keyDown = false;
		if(!keyDown) {
			canTypeKey = true;
		}

		if(enterTyped) {
			waitingForEnterPress = false;
			enterTyped = false;
			imgData = secondScreenCtx.getImageData(0, 0, secondScreenBuffer.width, secondScreenBuffer.height);
			ctx.putImageData(imgData, 0, 0);
			if(gameState == STATE_INPUTWINDOW) {
				gameState = STATE_GAME;
				parse(textInputText);
			}
		}
	}
}
