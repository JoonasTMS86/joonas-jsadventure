const screenWidth                      = 1910;
const screenHeight                     = 909;
const rowStride                        = screenWidth * 4;
const messageWindowMarginWidth         = 10; // Message window margin width in pixels.
const messageWindowMarginHeight        = 10; // Message window margin height in pixels.
const STATE_TITLE                      = 0;
const STATE_GAME                       = 1;
const STATE_INPUTWINDOW                = 2;
const STATE_INVENTORY                  = 3;
const STATE_ITEMDESCRIPTION            = 4;
const INPUTSTATE_COMMAND               = 0;
const INPUTSTATE_GETITEM               = 1;
const INPUTSTATE_CHECKFLAG             = 2;
const INPUTSTATE_SETFLAG               = 3;
const INPUTSTATE_CLEARFLAG             = 4;
const FLAG_PLAYERCONTROLDISABLED       = 0;  // Disable player control
const FLAG_PLAYERCLIMBINGFENCE         = 1;  // Player is climbing the fence
const FLAG_PLAYERONOPPOSITESIDEOFFENCE = 2;  // Player is not on the opposite side of the fence
const FLAG_PLAYERCLIMBINGFROMN         = 3;  // Player is climbing the fence from S
const FLAG_BEANIEONROCK                = 4;  // Beanie on rock
const FLAG_SUNGLASSESONROCK            = 5;  // Sunglasses on rock
const FLAG_HEADPHONESONROCK            = 6;  // Headphones on rock
const FLAG_WINDOWSMASHED               = 7;  // Window smashed?
const FLAG_GOTWATERINGCAN              = 8;  // Picked up watering can?
const FLAG_GOTBEANIE                   = 9;  // Picked up beanie?
const FLAG_GOTHEADPHONES               = 10; // Picked up headphones?
const FLAG_GOTSUNGLASSES               = 11; // Picked up sunglasses?
const playerAnimDelay                  = 8;
const npcAnimDelay                     = 8;
var imgData, imgDataWithoutSprites, canTypeKey, textInputText, textInputX, 
textInputY, inventorySelectedIndex, inputWinX, inputWinY, inputWinWidth, 
inputWinHeight, inputWinText, inputBoxX, inputBoxY, inputBoxWidth, inputBoxHeight,
inputBoxOnlyNumericCharacters, inputBoxTextMaxLength, inputState, roomToChangeTo;
var goingup                            = false;
var goingdown                          = false;
var goingleft                          = false;
var goingright                         = false;
var spacePressed                       = false;
var enterPressed                       = false;
var enterTyped                         = false;
var canvas                             = document.getElementById("myCanvas");
var ctx                                = canvas.getContext("2d");
var secondScreenBuffer                 = document.getElementById("secondBuffer");
var secondScreenCtx                    = secondScreenBuffer.getContext("2d");
var thirdScreenBuffer                  = document.getElementById("thirdBuffer");
var thirdScreenCtx                     = thirdScreenBuffer.getContext("2d");
var screen000picSprite                 = document.getElementById("screen000pic");
var screen001picSprite                 = document.getElementById("screen001pic");
var screen002picSprite                 = document.getElementById("screen002pic");
var screen003picSprite                 = document.getElementById("screen003pic");
var priorityBuffer                     = document.getElementById("priorityBuffer");
var priorityBufferCtx                  = priorityBuffer.getContext("2d");
var priorityBufferSdata                = priorityBufferCtx.createImageData(1910, 909);
var screen001priSprite                 = document.getElementById("screen001pri");
var screen002priSprite                 = document.getElementById("screen002pri");
var screen003priSprite                 = document.getElementById("screen003pri");
var depthBuffer                        = document.getElementById("depthBuffer");
var depthBufferCtx                     = depthBuffer.getContext("2d");
var depthBufferSdata                   = depthBufferCtx.createImageData(1910, 909);
var screen001depSprite                 = document.getElementById("screen001dep");
var screen002depSprite                 = document.getElementById("screen002dep");
var sprite000Buffer                    = document.getElementById("sprite000Buffer");
var sprite000Ctx                       = sprite000Buffer.getContext("2d");
var sprite000Sdata                     = sprite000Ctx.createImageData(85, 124);
var sprite000Sprite                    = document.getElementById("sprite000");
var sprite001Buffer                    = document.getElementById("sprite001Buffer");
var sprite001Ctx                       = sprite001Buffer.getContext("2d");
var sprite001Sdata                     = sprite001Ctx.createImageData(85, 124);
var sprite001Sprite                    = document.getElementById("sprite001");
var sprite002Buffer                    = document.getElementById("sprite002Buffer");
var sprite002Ctx                       = sprite002Buffer.getContext("2d");
var sprite002Sdata                     = sprite002Ctx.createImageData(85, 124);
var sprite002Sprite                    = document.getElementById("sprite002");
var sprite003Buffer                    = document.getElementById("sprite003Buffer");
var sprite003Ctx                       = sprite003Buffer.getContext("2d");
var sprite003Sdata                     = sprite003Ctx.createImageData(85, 124);
var sprite003Sprite                    = document.getElementById("sprite003");
var sprite004Buffer                    = document.getElementById("sprite004Buffer");
var sprite004Ctx                       = sprite004Buffer.getContext("2d");
var sprite004Sdata                     = sprite004Ctx.createImageData(85, 124);
var sprite004Sprite                    = document.getElementById("sprite004");
var sprite005Buffer                    = document.getElementById("sprite005Buffer");
var sprite005Ctx                       = sprite005Buffer.getContext("2d");
var sprite005Sdata                     = sprite005Ctx.createImageData(85, 124);
var sprite005Sprite                    = document.getElementById("sprite005");
var sprite006Buffer                    = document.getElementById("sprite006Buffer");
var sprite006Ctx                       = sprite006Buffer.getContext("2d");
var sprite006Sdata                     = sprite006Ctx.createImageData(85, 124);
var sprite006Sprite                    = document.getElementById("sprite006");
var sprite007Buffer                    = document.getElementById("sprite007Buffer");
var sprite007Ctx                       = sprite007Buffer.getContext("2d");
var sprite007Sdata                     = sprite007Ctx.createImageData(85, 124);
var sprite007Sprite                    = document.getElementById("sprite007");
var sprite008Buffer                    = document.getElementById("sprite008Buffer");
var sprite008Ctx                       = sprite008Buffer.getContext("2d");
var sprite008Sdata                     = sprite008Ctx.createImageData(85, 124);
var sprite008Sprite                    = document.getElementById("sprite008");
var sprite009Buffer                    = document.getElementById("sprite009Buffer");
var sprite009Ctx                       = sprite009Buffer.getContext("2d");
var sprite009Sdata                     = sprite009Ctx.createImageData(85, 124);
var sprite009Sprite                    = document.getElementById("sprite009");
var sprite010Buffer                    = document.getElementById("sprite010Buffer");
var sprite010Ctx                       = sprite010Buffer.getContext("2d");
var sprite010Sdata                     = sprite010Ctx.createImageData(85, 124);
var sprite010Sprite                    = document.getElementById("sprite010");
var sprite011Buffer                    = document.getElementById("sprite011Buffer");
var sprite011Ctx                       = sprite011Buffer.getContext("2d");
var sprite011Sdata                     = sprite011Ctx.createImageData(85, 124);
var sprite011Sprite                    = document.getElementById("sprite011");
var sprite012Buffer                    = document.getElementById("sprite012Buffer");
var sprite012Ctx                       = sprite012Buffer.getContext("2d");
var sprite012Sdata                     = sprite012Ctx.createImageData(85, 124);
var sprite012Sprite                    = document.getElementById("sprite012");
var sprite013Buffer                    = document.getElementById("sprite013Buffer");
var sprite013Ctx                       = sprite013Buffer.getContext("2d");
var sprite013Sdata                     = sprite013Ctx.createImageData(85, 124);
var sprite013Sprite                    = document.getElementById("sprite013");
var sprite014Buffer                    = document.getElementById("sprite014Buffer");
var sprite014Ctx                       = sprite014Buffer.getContext("2d");
var sprite014Sdata                     = sprite014Ctx.createImageData(85, 124);
var sprite014Sprite                    = document.getElementById("sprite014");
var sprite015Buffer                    = document.getElementById("sprite015Buffer");
var sprite015Ctx                       = sprite015Buffer.getContext("2d");
var sprite015Sdata                     = sprite015Ctx.createImageData(85, 124);
var sprite015Sprite                    = document.getElementById("sprite015");
var sprite016Buffer                    = document.getElementById("sprite016Buffer");
var sprite016Ctx                       = sprite016Buffer.getContext("2d");
var sprite016Sdata                     = sprite016Ctx.createImageData(85, 124);
var sprite016Sprite                    = document.getElementById("sprite016");
var sprite017Buffer                    = document.getElementById("sprite017Buffer");
var sprite017Ctx                       = sprite017Buffer.getContext("2d");
var sprite017Sdata                     = sprite017Ctx.createImageData(85, 124);
var sprite017Sprite                    = document.getElementById("sprite017");
var sprite018Buffer                    = document.getElementById("sprite018Buffer");
var sprite018Ctx                       = sprite018Buffer.getContext("2d");
var sprite018Sdata                     = sprite018Ctx.createImageData(85, 124);
var sprite018Sprite                    = document.getElementById("sprite018");
var sprite019Buffer                    = document.getElementById("sprite019Buffer");
var sprite019Ctx                       = sprite019Buffer.getContext("2d");
var sprite019Sdata                     = sprite019Ctx.createImageData(85, 124);
var sprite019Sprite                    = document.getElementById("sprite019");
var sprite020Buffer                    = document.getElementById("sprite020Buffer");
var sprite020Ctx                       = sprite020Buffer.getContext("2d");
var sprite020Sdata                     = sprite020Ctx.createImageData(85, 124);
var sprite020Sprite                    = document.getElementById("sprite020");
var sprite021Buffer                    = document.getElementById("sprite021Buffer");
var sprite021Ctx                       = sprite021Buffer.getContext("2d");
var sprite021Sdata                     = sprite021Ctx.createImageData(85, 124);
var sprite021Sprite                    = document.getElementById("sprite021");
var sprite022Buffer                    = document.getElementById("sprite022Buffer");
var sprite022Ctx                       = sprite022Buffer.getContext("2d");
var sprite022Sdata                     = sprite022Ctx.createImageData(85, 124);
var sprite022Sprite                    = document.getElementById("sprite022");
var sprite023Buffer                    = document.getElementById("sprite023Buffer");
var sprite023Ctx                       = sprite023Buffer.getContext("2d");
var sprite023Sdata                     = sprite023Ctx.createImageData(85, 124);
var sprite023Sprite                    = document.getElementById("sprite023");
var sprite024Buffer                    = document.getElementById("sprite024Buffer");
var sprite024Ctx                       = sprite024Buffer.getContext("2d");
var sprite024Sdata                     = sprite024Ctx.createImageData(85, 124);
var sprite024Sprite                    = document.getElementById("sprite024");
var sprite025Buffer                    = document.getElementById("sprite025Buffer");
var sprite025Ctx                       = sprite025Buffer.getContext("2d");
var sprite025Sdata                     = sprite025Ctx.createImageData(85, 124);
var sprite025Sprite                    = document.getElementById("sprite025");
var sprite026Buffer                    = document.getElementById("sprite026Buffer");
var sprite026Ctx                       = sprite026Buffer.getContext("2d");
var sprite026Sdata                     = sprite026Ctx.createImageData(85, 124);
var sprite026Sprite                    = document.getElementById("sprite026");
var sprite027Buffer                    = document.getElementById("sprite027Buffer");
var sprite027Ctx                       = sprite027Buffer.getContext("2d");
var sprite027Sdata                     = sprite027Ctx.createImageData(85, 124);
var sprite027Sprite                    = document.getElementById("sprite027");
var sprite028Buffer                    = document.getElementById("sprite028Buffer");
var sprite028Ctx                       = sprite028Buffer.getContext("2d");
var sprite028Sdata                     = sprite028Ctx.createImageData(85, 124);
var sprite028Sprite                    = document.getElementById("sprite028");
var sprite029Buffer                    = document.getElementById("sprite029Buffer");
var sprite029Ctx                       = sprite029Buffer.getContext("2d");
var sprite029Sdata                     = sprite029Ctx.createImageData(85, 124);
var sprite029Sprite                    = document.getElementById("sprite029");
var sprite030Buffer                    = document.getElementById("sprite030Buffer");
var sprite030Ctx                       = sprite030Buffer.getContext("2d");
var sprite030Sdata                     = sprite030Ctx.createImageData(85, 124);
var sprite030Sprite                    = document.getElementById("sprite030");
var sprite031Buffer                    = document.getElementById("sprite031Buffer");
var sprite031Ctx                       = sprite031Buffer.getContext("2d");
var sprite031Sdata                     = sprite031Ctx.createImageData(85, 124);
var sprite031Sprite                    = document.getElementById("sprite031");
var sprite032Buffer                    = document.getElementById("sprite032Buffer");
var sprite032Ctx                       = sprite032Buffer.getContext("2d");
var sprite032Sdata                     = sprite032Ctx.createImageData(85, 124);
var sprite032Sprite                    = document.getElementById("sprite032");
var sprite033Buffer                    = document.getElementById("sprite033Buffer");
var sprite033Ctx                       = sprite033Buffer.getContext("2d");
var sprite033Sdata                     = sprite033Ctx.createImageData(85, 124);
var sprite033Sprite                    = document.getElementById("sprite033");
var sprite034Buffer                    = document.getElementById("sprite034Buffer");
var sprite034Ctx                       = sprite034Buffer.getContext("2d");
var sprite034Sdata                     = sprite034Ctx.createImageData(85, 124);
var sprite034Sprite                    = document.getElementById("sprite034");
var sprite035Buffer                    = document.getElementById("sprite035Buffer");
var sprite035Ctx                       = sprite035Buffer.getContext("2d");
var sprite035Sdata                     = sprite035Ctx.createImageData(85, 124);
var sprite035Sprite                    = document.getElementById("sprite035");
var sprite036Buffer                    = document.getElementById("sprite036Buffer");
var sprite036Ctx                       = sprite036Buffer.getContext("2d");
var sprite036Sdata                     = sprite036Ctx.createImageData(85, 124);
var sprite036Sprite                    = document.getElementById("sprite036");
var sprite037Buffer                    = document.getElementById("sprite037Buffer");
var sprite037Ctx                       = sprite037Buffer.getContext("2d");
var sprite037Sdata                     = sprite037Ctx.createImageData(85, 124);
var sprite037Sprite                    = document.getElementById("sprite037");
var sprite038Buffer                    = document.getElementById("sprite038Buffer");
var sprite038Ctx                       = sprite038Buffer.getContext("2d");
var sprite038Sdata                     = sprite038Ctx.createImageData(104, 63);
var sprite038Sprite                    = document.getElementById("sprite038");
var sprite039Buffer                    = document.getElementById("sprite039Buffer");
var sprite039Ctx                       = sprite039Buffer.getContext("2d");
var sprite039Sdata                     = sprite039Ctx.createImageData(41, 28);
var sprite039Sprite                    = document.getElementById("sprite039");
var sprite040Buffer                    = document.getElementById("sprite040Buffer");
var sprite040Ctx                       = sprite040Buffer.getContext("2d");
var sprite040Sdata                     = sprite040Ctx.createImageData(15, 11);
var sprite040Sprite                    = document.getElementById("sprite040");
var sprite041Buffer                    = document.getElementById("sprite041Buffer");
var sprite041Ctx                       = sprite041Buffer.getContext("2d");
var sprite041Sdata                     = sprite041Ctx.createImageData(26, 21);
var sprite041Sprite                    = document.getElementById("sprite041");
var sprite042Buffer                    = document.getElementById("sprite042Buffer");
var sprite042Ctx                       = sprite042Buffer.getContext("2d");
var sprite042Sdata                     = sprite042Ctx.createImageData(20, 8);
var sprite042Sprite                    = document.getElementById("sprite042");
var spriteBuffer                       = document.getElementById("spriteBuffer");
var spriteCtx                          = spriteBuffer.getContext("2d");
var spriteSdata                        = spriteCtx.createImageData(400, 400);
var mainFontBuffer                     = document.getElementById("mainFontBuffer");
var mainFontCtx                        = mainFontBuffer.getContext("2d");
var mainFontSdata                      = mainFontCtx.createImageData(672, 168);
var mainFontSprite                     = document.getElementById("mainFont");
var narrowFontBuffer                   = document.getElementById("narrowFontBuffer");
var narrowFontCtx                      = narrowFontBuffer.getContext("2d");
var narrowFontSdata                    = narrowFontCtx.createImageData(416, 168);
var narrowFontSprite                   = document.getElementById("narrowFont");
var item01Buffer                       = document.getElementById("item01Buffer");
var item01Ctx                          = item01Buffer.getContext("2d");
var item01Sdata                        = item01Ctx.createImageData(333, 333);
var item01Sprite                       = document.getElementById("item01");
var item02Buffer                       = document.getElementById("item02Buffer");
var item02Ctx                          = item02Buffer.getContext("2d");
var item02Sdata                        = item02Ctx.createImageData(333, 333);
var item02Sprite                       = document.getElementById("item02");
var item03Buffer                       = document.getElementById("item03Buffer");
var item03Ctx                          = item03Buffer.getContext("2d");
var item03Sdata                        = item03Ctx.createImageData(333, 333);
var item03Sprite                       = document.getElementById("item03");
var item04Buffer                       = document.getElementById("item04Buffer");
var item04Ctx                          = item04Buffer.getContext("2d");
var item04Sdata                        = item04Ctx.createImageData(333, 333);
var item04Sprite                       = document.getElementById("item04");
var item05Buffer                       = document.getElementById("item05Buffer");
var item05Ctx                          = item05Buffer.getContext("2d");
var item05Sdata                        = item05Ctx.createImageData(333, 333);
var item05Sprite                       = document.getElementById("item05");
var item06Buffer                       = document.getElementById("item06Buffer");
var item06Ctx                          = item06Buffer.getContext("2d");
var item06Sdata                        = item06Ctx.createImageData(333, 333);
var item06Sprite                       = document.getElementById("item06");
var item07Buffer                       = document.getElementById("item07Buffer");
var item07Ctx                          = item07Buffer.getContext("2d");
var item07Sdata                        = item07Ctx.createImageData(333, 333);
var item07Sprite                       = document.getElementById("item07");
var layer1Buffer                       = document.getElementById("layer1Buffer");
var layer1Ctx                          = layer1Buffer.getContext("2d");
var layer1Sdata                        = layer1Ctx.createImageData(248, 166);
var layer1Sprite                       = document.getElementById("layer1");
var layer2Buffer                       = document.getElementById("layer2Buffer");
var layer2Ctx                          = layer2Buffer.getContext("2d");
var layer2Sdata                        = layer2Ctx.createImageData(318, 254);
var layer2Sprite                       = document.getElementById("layer2");
var layer3Buffer                       = document.getElementById("layer3Buffer");
var layer3Ctx                          = layer3Buffer.getContext("2d");
var layer3Sdata                        = layer3Ctx.createImageData(301, 120);
var layer3Sprite                       = document.getElementById("layer3");
var object01Buffer                     = document.getElementById("object01Buffer");
var object01Ctx                        = object01Buffer.getContext("2d");
var object01Sdata                      = object01Ctx.createImageData(19, 12);
var object01Sprite                     = document.getElementById("object01");

// How many sprites have been set to be active on the current screen
var spriteEnabled                      = [true, false, false, false, false, false, false, false, false];
// The coordinates of the sprites are in these arrays.
var spriteXCoords                      = [1800, 130, 200, 270, 340, 410, 480, 550, 1322];
// The Y coordinates of where the sprites should be displayed on the screen.
var spriteYCoords                      = [60, 130, 200, 270, 340, 410, 480, 550, 233];
// These sprite Y coordinates determine the "mask location" of each sprite, which can differ from the sprite display Y.
var spriteMaskYCoords                  = [60, 130, 200, 270, 340, 410, 480, 550, 233];
// Width and heights of the sprite images.
var spriteWidths                       = [85, 85, 85, 85, 85, 85, 85, 85, 19];
var spriteHeights                      = [124, 124, 124, 124, 124, 124, 124, 124, 12];
// Width of sprite when facing N or S.
var spriteWidthsNS                     = [26, 26, 26, 26, 26, 26, 26, 26];
// When we check for collisions, we only wish to check those pixels of the sprite that are not transparent.
// The first solid pixels might not be at the leftmost side of the image but rather a few pixels away from it.
var spriteCheckBlockOffsetsNS          = [29, 29, 29, 29, 29, 29, 29, 29];
var spriteCheckBlockOffsetsE           = [55, 55, 55, 55, 55, 55, 55, 55];
var spriteCheckBlockOffsetsW           = [28, 28, 28, 28, 28, 28, 28, 28];
var spriteImages                       = [0, 0, 0, 0, 0, 0, 0, 0, 100];
var playerAnimPos                      = 0;
var playerAnimFrame                    = 0;
var npcAnimPos                         = 0;
var npcAnimFrame                       = 0;
var mainFontStartXIndex                = [];
var mainFontStartYIndex                = [];
var mainFontWidthIndex                 = [];
var mainFontHeightIndex                = [];
var narrowFontStartXIndex              = [];
var narrowFontStartYIndex              = [];
var narrowFontWidthIndex               = [];
var narrowFontHeightIndex              = [];
var waitingForEnterPress               = false;
var startedGame                        = false;
var typedKeyCode                       = 0;
var typedKey                           = "";
var keyDown                            = false;
var gameState                          = STATE_TITLE;
var ignoredWords                       = [
	"a", "an", "the", "to", "in", "on", "at", "of", "over", "from", "with", "up", "into", "through", "thru", "climbing", "watering"
];
var synonyms                           = [
	"inventory", "inv", 0,
	"get", "take", "pick", "grab", 0,
	"look", "see", "watch", 0,
	"talk", "speak", 0,
	"climb", 0,
	"drink", "swallow", 0,
	"swim", 0,
	"put", "drop", "place", 0,
	"smash", "break", "hit", 0,
	"enter", "exit", "go", 0,
	"open", 0,
	"unlock", 0,
	"check", "chk", 0,
	"set", 0,
	"clear", 0,
	"debugdebug", 0,
	"item", 0,
	"getallitems", 0,
	"flag", 0,
	"all", "everything", 0,
	"ground", "floor", "soil", 0,
	"people", "guys", "crowd", "men", "women", "person", "guy", "man", "woman", 0,
	"bush", 0,
	"fence", "obstacle", "wall", 0,
	"rock", "stone", 0,
	"hammer", 0,
	"can", 0,
	"beanie", "hat", "headwear", 0,
	"headphones", 0,
	"sunglasses", 0,
	"water", "sea", 0,
	"window", "glass", 0,
	"door", 0
];
var gameEngineFlags                    = [];
var gameEngineVariables                = [];
var npcDirections                      = [0, true, true, true, true, true, true, true];
var saidShowInventory                  = false;
// Inventory items are stored as item index numbers to the inventory array.
// An inventory item name should consist of 29 characters at max, eg. "Very Long Inventory Item Name".
var inventory                          = [];
var inventoryItemNames                 = [0, "Hammer", "Rock", "Watering Can", "Watering Can", "Beanie", "Headphones", "Sunglasses"];
var score                              = 0;
// The debug mode of the game engine is enabled by entering the command "debugdebug".
var debugMode                          = false;
var msgCommandNotUnderstood            = "I understand your words, but not what you're trying to say.";
var msgAlreadyHaveIt                   = "You have it in your inventory.";
var msgDontHaveSuchItem                = "You have no such item.";
var msgWhatRock                        = "What rock? You don't have one.";
var msgNotCloseEnoughToWindow          = "You're not close enough to the window.";
var msgNotCloseEnoughToTable           = "You're not close enough to the table.";
var msgNoSuchObjectOnTable             = "There is no such object on the table.";
var msgInvalidFlagNumber               = "Invalid flag number.\nValid flags are: 0 to 32767.";
var showInputWindow                    = false;
var itemDescriptions                   = [
	0,
	"Your trusty hammer has served you well\nfor several years now.",
	"This is a smooth, round and slightly wet rock.",
	"The watering can is empty.",
	"You have filled the watering can with water from the sea.",
	"Beanies are something that always seem to be in fashion.",
	"You have a pair of yellow headphones.",
	"You found these sunglasses in the old, abandoned house."
];
var room                               = 0;
var changeRoomAfterMessageWindow       = false;

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
		case 22:
			sData = sprite022Sdata;
			break;
		case 23:
			sData = sprite023Sdata;
			break;
		case 24:
			sData = sprite024Sdata;
			break;
		case 25:
			sData = sprite025Sdata;
			break;
		case 26:
			sData = sprite026Sdata;
			break;
		case 27:
			sData = sprite027Sdata;
			break;
		case 28:
			sData = sprite028Sdata;
			break;
		case 29:
			sData = sprite029Sdata;
			break;
		case 30:
			sData = sprite030Sdata;
			break;
		case 31:
			sData = sprite031Sdata;
			break;
		case 32:
			sData = sprite032Sdata;
			break;
		case 33:
			sData = sprite033Sdata;
			break;
		case 34:
			sData = sprite034Sdata;
			break;
		case 35:
			sData = sprite035Sdata;
			break;
		case 36:
			sData = sprite036Sdata;
			break;
		case 37:
			sData = sprite037Sdata;
			break;
		case 38:
			sData = sprite038Sdata;
			break;
		case 39:
			sData = sprite039Sdata;
			break;
		case 40:
			sData = sprite040Sdata;
			break;
		case 41:
			sData = sprite041Sdata;
			break;
		case 42:
			sData = sprite042Sdata;
			break;
		case 100:
			sData = object01Sdata;
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
	var spriteDrawOrder = [];
	if(spriteEnabled[0]) spriteDrawOrder[spriteDrawOrder.length] = 0;
	if(spriteEnabled[1]) spriteDrawOrder[spriteDrawOrder.length] = 1;
	if(spriteEnabled[2]) spriteDrawOrder[spriteDrawOrder.length] = 2;
	if(spriteEnabled[3]) spriteDrawOrder[spriteDrawOrder.length] = 3;
	if(spriteEnabled[4]) spriteDrawOrder[spriteDrawOrder.length] = 4;
	if(spriteEnabled[5]) spriteDrawOrder[spriteDrawOrder.length] = 5;
	if(spriteEnabled[6]) spriteDrawOrder[spriteDrawOrder.length] = 6;
	if(spriteEnabled[7]) spriteDrawOrder[spriteDrawOrder.length] = 7;
	if(spriteEnabled[8]) spriteDrawOrder[spriteDrawOrder.length] = 8;
	// Draw the sprite with the lowest Y value first and the one with the highest Y value last.
	for(var placePos = 0; placePos < spriteDrawOrder.length; placePos++) {
		for(var checkPos = placePos + 1; checkPos < spriteDrawOrder.length; checkPos++) {
			if(
				(spriteMaskYCoords[spriteDrawOrder[checkPos]] + spriteHeights[spriteDrawOrder[checkPos]]) < 
				(spriteMaskYCoords[spriteDrawOrder[placePos]] + spriteHeights[spriteDrawOrder[placePos]])
			) {
				var temp = spriteDrawOrder[placePos];
				spriteDrawOrder[placePos] = spriteDrawOrder[checkPos];
				spriteDrawOrder[checkPos] = temp;
			}
		}
	}
	if(spriteDrawOrder.length > 0 && spriteEnabled[spriteDrawOrder[0]]) drawSpriteOnScreen(spriteDrawOrder[0]);
	if(spriteDrawOrder.length > 1 && spriteEnabled[spriteDrawOrder[1]]) drawSpriteOnScreen(spriteDrawOrder[1]);
	if(spriteDrawOrder.length > 2 && spriteEnabled[spriteDrawOrder[2]]) drawSpriteOnScreen(spriteDrawOrder[2]);
	if(spriteDrawOrder.length > 3 && spriteEnabled[spriteDrawOrder[3]]) drawSpriteOnScreen(spriteDrawOrder[3]);
	if(spriteDrawOrder.length > 4 && spriteEnabled[spriteDrawOrder[4]]) drawSpriteOnScreen(spriteDrawOrder[4]);
	if(spriteDrawOrder.length > 5 && spriteEnabled[spriteDrawOrder[5]]) drawSpriteOnScreen(spriteDrawOrder[5]);
	if(spriteDrawOrder.length > 6 && spriteEnabled[spriteDrawOrder[6]]) drawSpriteOnScreen(spriteDrawOrder[6]);
	if(spriteDrawOrder.length > 7 && spriteEnabled[spriteDrawOrder[7]]) drawSpriteOnScreen(spriteDrawOrder[7]);
	if(spriteDrawOrder.length > 8 && spriteEnabled[spriteDrawOrder[8]]) drawSpriteOnScreen(spriteDrawOrder[8]);
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
function drawBorder(x, y, endX, endY, r, g, b) {
	var origX, origY;
	var origX = x;
	var origY = y;
	while(x < endX) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = r;
		imgData.data[(y * rowStride) + (x * 4) + 1] = g;
		imgData.data[(y * rowStride) + (x * 4) + 2] = b;
		x++;
	}
	while(y < endY) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = r;
		imgData.data[(y * rowStride) + (x * 4) + 1] = g;
		imgData.data[(y * rowStride) + (x * 4) + 2] = b;
		y++;
	}
	while(x > origX) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = r;
		imgData.data[(y * rowStride) + (x * 4) + 1] = g;
		imgData.data[(y * rowStride) + (x * 4) + 2] = b;
		x--;
	}
	while(y > origY) {
		imgData.data[(y * rowStride) + (x * 4) + 0] = r;
		imgData.data[(y * rowStride) + (x * 4) + 1] = g;
		imgData.data[(y * rowStride) + (x * 4) + 2] = b;
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
	drawBorder(borderStartX, borderStartY, borderTargetX, borderTargetY, 0, 0, 0);
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

function messageWindow(message, isCenteredHorizontally, isCenteredVertically, x, y, layered) {
	var widestWidth, highestHeightForCurrentRow, highestHeight, width, height, messageWindowWidth, messageWindowHeight;
	if(!layered) {
		secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
		drawAllSprites();
	}
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

	// Center the message window horizontally.
	if(isCenteredHorizontally) {
		x = Math.floor((screenWidth / 2)) - Math.floor((messageWindowWidth / 2));
	}
	// Center the message window horizontally.
	if(isCenteredVertically) {
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
function messageWindowCentered(message, layered) {
	messageWindow(message, true, true, 0, 0, layered);
}

// Display a message window that is centered horizontally, while the Y position can be freely defined.
function messageWindowHorizontallyCentered(message, y, layered) {
	messageWindow(message, true, false, 0, y, layered);
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
		if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 2] != 0) {
			var b3 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 0] * 65536;
			var b2 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 1] * 256;
			var b1 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 2];
			return b3 + b2 + b1;
		}
		objectX++;
	}
	return 0;
}

function checkBlockEW(objectX, objectY) {
	if(priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 2] != 0) {
		var b3 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 0] * 65536;
		var b2 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 1] * 256;
		var b1 = priorityBufferSdata.data[(objectY * rowStride) + (objectX * 4) + 2];
		return b3 + b2 + b1;
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

// Check if the given item index number is present in the inventory array. Returns true if found.
function hasItem(itemNumber) {
	for(var pos = 0; pos < inventory.length; pos++) {
		if(inventory[pos] == itemNumber) {
			return true;
		}
	}
	return false;
}

function removeItem(itemNumber) {
	var itemPos = 0;
	for(var pos = 0; pos < inventory.length; pos++) {
		if(inventory[pos] == itemNumber) {
			itemPos = pos;
			pos = inventory.length;
		}
	}
	inventory.splice(itemPos, 1);
}

// *** ROOM LOGIC FUNCTIONS ***

// ### GLOBAL LOGIC ###
function globalLogic(enteredWords) {
	if(doesInputMatchThis(enteredWords, ["inventory"])) {
		saidShowInventory = true;
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["debugdebug"])) {
		debugMode = true;
		messageWindowCentered("Debug mode activated.", false);
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["get", "item"])) {
		if(debugMode) {
			inputState = INPUTSTATE_GETITEM;
			showInputWindow = true;
			// Input window is centered horizontally, so we don't need to define the X pos.
			inputWinY = 822;
			inputWinWidth = 380;
			inputWinHeight = 75;
			inputBoxX = 10;
			inputBoxY = 32;
			inputBoxWidth = 75;
			inputBoxHeight = 25;
			inputWinText = "Item number to get:";
		}
		else {
			messageWindowCentered(msgCommandNotUnderstood, false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["getallitems"])) {
		if(debugMode) {
			for(var pos = 1; pos < inventoryItemNames.length; pos++) {
				inventory[inventory.length] = pos;
			}
			messageWindowCentered("You now have all items in your inventory.", false);
		}
		else {
			messageWindowCentered(msgCommandNotUnderstood, false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["check", "flag"])) {
		if(debugMode) {
			inputState = INPUTSTATE_CHECKFLAG;
			showInputWindow = true;
			inputWinY = 822;
			inputWinWidth = 480;
			inputWinHeight = 75;
			inputBoxX = 10;
			inputBoxY = 32;
			inputBoxWidth = 75;
			inputBoxHeight = 25;
			inputWinText = "Number of flag to check:";
		}
		else {
			messageWindowCentered(msgCommandNotUnderstood, false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["set", "flag"])) {
		if(debugMode) {
			inputState = INPUTSTATE_SETFLAG;
			showInputWindow = true;
			inputWinY = 822;
			inputWinWidth = 440;
			inputWinHeight = 75;
			inputBoxX = 10;
			inputBoxY = 32;
			inputBoxWidth = 75;
			inputBoxHeight = 25;
			inputWinText = "Number of flag to set:";
		}
		else {
			messageWindowCentered(msgCommandNotUnderstood, false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["clear", "flag"])) {
		if(debugMode) {
			inputState = INPUTSTATE_CLEARFLAG;
			showInputWindow = true;
			inputWinY = 822;
			inputWinWidth = 480;
			inputWinHeight = 75;
			inputBoxX = 10;
			inputBoxY = 32;
			inputBoxWidth = 75;
			inputBoxHeight = 25;
			inputWinText = "Number of flag to clear:";
		}
		else {
			messageWindowCentered(msgCommandNotUnderstood, false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["put", "beanie", "rock"])) {
		if(!hasItem(2)) {
			messageWindowCentered(msgWhatRock, false);
		}
		else {
			if(getFlag(FLAG_BEANIEONROCK)) {
				messageWindowCentered("The rock is already wearing the beanie.", false);
			}
			else {
				if(!hasItem(5)) {
					messageWindowCentered(msgDontHaveSuchItem, false);
				}
				else {
					messageWindowCentered("You put the beanie on the rock.", false);
					setFlag(FLAG_BEANIEONROCK);
					removeItem(5);
					score += 5;
				}
			}
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["put", "headphones", "rock"])) {
		if(!hasItem(2)) {
			messageWindowCentered(msgWhatRock, false);
		}
		else {
			if(getFlag(FLAG_HEADPHONESONROCK)) {
				messageWindowCentered("The rock is already wearing headphones.", false);
			}
			else {
				if(!hasItem(6)) {
					messageWindowCentered(msgDontHaveSuchItem, false);
				}
				else {
					messageWindowCentered("You put the headphones on the rock.", false);
					setFlag(FLAG_HEADPHONESONROCK);
					removeItem(6);
					score += 5;
				}
			}
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["put", "sunglasses", "rock"])) {
		if(!hasItem(2)) {
			messageWindowCentered(msgWhatRock, false);
		}
		else {
			if(getFlag(FLAG_SUNGLASSESONROCK)) {
				messageWindowCentered("The rock is already wearing sunglasses.", false);
			}
			else {
				if(!hasItem(7)) {
					messageWindowCentered(msgDontHaveSuchItem, false);
				}
				else {
					messageWindowCentered("You put the sunglasses on the face... er, I mean, rock.", false);
					setFlag(FLAG_SUNGLASSESONROCK);
					removeItem(7);
					score += 5;
				}
			}
		}
		return true;
	}
	return false;
}

// ROOM 1
function logicRoom001(enteredWords) {
	if(doesInputMatchThis(enteredWords, ["look"])) {
		if(!hasItem(1)) {
			messageWindowCentered("You are at a beach where the only elements you can see are seven\nclones of yourself who march back and forth, a climbing wall and a\nbush.\nTo the east you can see an old, abandoned house.\nFor some reason, your trusty hammer is also here, lying on the ground.", false);
		}
		else {
			messageWindowCentered("You are at a beach where the only elements you can see are seven\nclones of yourself who march back and forth, a climbing wall and a\nbush.\nTo the east you can see an old, abandoned house.", false);
		}
		return true;
	}
	else if(doesInputMatchThis(enteredWords, ["look", "people"])) {
		messageWindowCentered("You see seven clones of yourself.\nThey really seem to enjoy walking back and forth.\nYou wonder who has created these guys.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["look", "bush"])) {
		messageWindowCentered("It's an ordinary looking bush. It seems the soil\naround here is fertile enough for vegetation to grow.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["look", "fence"])) {
		messageWindowCentered("The climbing wall makes you wonder whether this place\nwas once planned to be somekind of an obstacle course.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["look", "hammer"])) {
		if(hasItem(1)) {
			messageWindowCentered(msgAlreadyHaveIt, false);
		}
		else {
			messageWindowCentered("Your hammer is not where you expected it to be.\nIt's lying here on the ground!", false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["look", "rock"])) {
		if(hasItem(2)) {
			messageWindowCentered(msgAlreadyHaveIt, false);
		}
		else {
			messageWindowCentered("You can indeed see a rock under the water.", false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["look", "water"])) {
		messageWindowCentered("The water here is clean and crystal clear.\nYou would love to go swimming, but you need\nto complete your quest first.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["get", "water"]) || doesInputMatchThis(enteredWords, ["drink", "water"])) {
		messageWindowCentered("Good idea, but you're not thirsty at the moment.");
	}
	else if(doesInputMatchThis(enteredWords, ["get", "rock"])) {
		if(hasItem(2)) {
			messageWindowCentered(msgAlreadyHaveIt, false);
		}
		else {
			// Rock at X,Y coords 802,767.
			if(
				(spriteXCoords[0] + spriteWidths[0]) >= 796 &&
				spriteXCoords[0] <= 808 &&
				(spriteYCoords[0] + spriteHeights[0]) >= 826 &&
				(spriteYCoords[0] + spriteHeights[0]) <= 848
			) {
				messageWindowCentered("You pick up the underwater rock.");
				inventory[inventory.length] = 2;
				score += 5;
			}
			else {
				var msg = "To pick up the underwater rock, you need to get closer to it.\nYou are too far to the ";
				var sayAnd = false;
				if((spriteXCoords[0] + spriteWidths[0]) < 796) {
					sayAnd = true;
					msg += "west";
				}
				if(spriteXCoords[0] > 808) {
					sayAnd = true;
					msg += "east";
				}
				if((spriteYCoords[0] + spriteHeights[0]) < 826) {
					if(sayAnd) msg += " and to the ";
					msg += "north";
				}
				if((spriteYCoords[0] + spriteHeights[0]) > 848) {
					if(sayAnd) msg += " and to the ";
					msg += "south";
				}
				msg += " from the rock.";
				messageWindowCentered(msg);
			}
		}
	}
	else if(doesInputMatchThis(enteredWords, ["swim"])) {
		messageWindowCentered("You have no time to go swimming right now.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["talk", "people"])) {
		messageWindowCentered("You talk to the Joonas clones.\n\"Hey Joonas clones!\", you say. \"What exactly is my goal in this game?\"\nTo which they reply:\n\"The purpose of this game is to tell all the essential things about Joonas.\nYou probably already know a lot about him, but if there's something you\ndidn't yet know about Joonas, you will learn it upon playing this game.\nIf you get stuck on any of the puzzles of this game, please let me know\nand I can give you a hint file.\"", false);
	}
	else if(doesInputMatchThis(enteredWords, ["get", "people"])) {
		messageWindowCentered("You are not a bodybuilder. Therefore, you don't have the required\nstrength to lift a grown-up person up.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["get", "bush"])) {
		messageWindowCentered("You see no need to carry any vegetation around, so you decide to\nleave the bush alone.", false);
	}
	else if(doesInputMatchThis(enteredWords, ["get", "hammer"])) {
		if(hasItem(1)) {
			messageWindowCentered(msgAlreadyHaveIt, false);
		}
		else {
			if(
				(spriteXCoords[0] + spriteWidths[0]) >= (spriteXCoords[8] - 6) &&
				spriteXCoords[0] <= (spriteXCoords[8] + spriteWidths[8] + 6) &&
				(spriteYCoords[0] + spriteHeights[0]) >= (spriteYCoords[8] - 11) &&
				(spriteYCoords[0] + spriteHeights[0]) <= (spriteYCoords[8] + spriteHeights[8] + 11)
			) {
				messageWindowCentered("Why is your trusty hammer lying here on the ground?\nAnyway, you pick it up and carry it with you.", false);
				inventory[inventory.length] = 1;
				spriteEnabled[8] = false;
				score += 5;
			}
			else {
				messageWindowCentered("You need to get closer to it.", false);
			}
		}
	}
	else if(doesInputMatchThis(enteredWords, ["climb", "fence"])) {
		if(spriteXCoords[0] >= 546 && spriteXCoords[0] <= 1117 && 
			(spriteYCoords[0] >= 430 && spriteYCoords[0] <= 432) ||
			(spriteYCoords[0] >= 422 && spriteYCoords[0] <= 424)
		) {
			// Disable player control while the protagonist is climbing the fence.
			if(spriteYCoords[0] >= 430 && spriteYCoords[0] <= 432) {
				setFlag(FLAG_PLAYERCONTROLDISABLED);   // Disable player control
				setFlag(FLAG_PLAYERCLIMBINGFENCE);   // Player is climbing the fence
				clearFlag(FLAG_PLAYERONOPPOSITESIDEOFFENCE); // Player is not on the opposite side of the fence
				clearFlag(FLAG_PLAYERCLIMBINGFROMN); // Player is climbing the fence from S
			}
			else {
				setFlag(FLAG_PLAYERCONTROLDISABLED);   // Disable player control
				setFlag(FLAG_PLAYERCLIMBINGFENCE);   // Player is climbing the fence
				clearFlag(FLAG_PLAYERONOPPOSITESIDEOFFENCE); // Player is not on the opposite side of the fence
				setFlag(FLAG_PLAYERCLIMBINGFROMN);   // Player is climbing the fence from N
			}
			playerAnimPos = 0;
			gameEngineVariables[0] = 0;
		}
		else {
			messageWindowCentered("You need to get closer to the climbing wall to climb it.", false);
		}
	}
	else if(
		doesInputMatchThis(enteredWords, ["put", "rock"]) ||
		doesInputMatchThis(enteredWords, ["put", "rock", "ground"])
	) {
		if(hasItem(2)) {
			messageWindowCentered("Good idea, but this doesn't quite seem to be\nthe right place to do that.", false);
		}
		else {
			messageWindowCentered(msgWhatRock, false);
		}
	}
	else {
		messageWindowCentered(msgCommandNotUnderstood, false);
	}
}

// ROOM 2
function logicRoom002(enteredWords) {
	if(doesInputMatchThis(enteredWords, ["open", "window"])) {
		if(
			spriteXCoords[0] >= 777 &&
			spriteXCoords[0] <= 914 &&
			spriteYCoords[0] >= 352 &&
			spriteYCoords[0] <= 360
		) {
			if(!getFlag(FLAG_WINDOWSMASHED)) {
				messageWindowCentered("The window is tightly shut.", false);
			}
			else {
				messageWindowCentered("You smashed the window, so, in a way you could say\nthat now it is permanently open.", false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToWindow, false);
		}
	}
	else if(
		doesInputMatchThis(enteredWords, ["smash", "window"]) ||
		doesInputMatchThis(enteredWords, ["smash", "window", "hammer"]) ||
		doesInputMatchThis(enteredWords, ["use", "hammer", "window"])
	) {
		if(
			spriteXCoords[0] >= 777 &&
			spriteXCoords[0] <= 914 &&
			spriteYCoords[0] >= 352 &&
			spriteYCoords[0] <= 360
		) {
			if(hasItem(1)) {
				if(!getFlag(FLAG_WINDOWSMASHED)) {
					messageWindowCentered("You smash the window with your hammer.\nNow you can enter the house.", false);
					spriteEnabled[1] = false;
					score += 10;
					setFlag(FLAG_WINDOWSMASHED);
				}
				else {
					messageWindowCentered("The window is already broken.", false);
				}
			}
			else {
				messageWindowCentered("With your bare hands? You should rather use\nsome tool for it.", false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToWindow, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["enter", "window"])) {
		if(
			spriteXCoords[0] >= 777 &&
			spriteXCoords[0] <= 914 &&
			spriteYCoords[0] >= 352 &&
			spriteYCoords[0] <= 360
		) {
			if(!getFlag(FLAG_WINDOWSMASHED)) {
				messageWindowCentered("The closed window blocks your way.", false);
			}
			else {
				changeRoomAfterMessageWindow = true;
				roomToChangeTo = 3;
				messageWindowCentered("You enter the house through the window.", false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToWindow, false);
		}
	}
	else if(
		doesInputMatchThis(enteredWords, ["put", "rock"]) ||
		doesInputMatchThis(enteredWords, ["put", "rock", "ground"])
	) {
		if(hasItem(2)) {
			if(
				getFlag(FLAG_BEANIEONROCK) &&
				getFlag(FLAG_HEADPHONESONROCK) &&
				getFlag(FLAG_SUNGLASSESONROCK)
			) {
				messageWindowCentered("Good thinking! You place the rock on the ground.", false);
				removeItem(2);
				score += 20;
			}
			else {
				messageWindowCentered("You feel that you should put three strange items\non the rock first.", false);
			}
		}
		else {
			messageWindowCentered(msgWhatRock, false);
		}
	}
	else {
		messageWindowCentered(msgCommandNotUnderstood, false);
	}
}

// ROOM 3
function logicRoom003(enteredWords) {
	if(doesInputMatchThis(enteredWords, ["enter", "window"])) {
		if(
			spriteXCoords[0] < 1001 &&
			spriteYCoords[0] < 397
		) {
			changeRoomAfterMessageWindow = true;
			roomToChangeTo = 2;
			messageWindowCentered("You leave the shed.", false);
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToWindow, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["look"])) {
		var numberOfObjectsToDescribe = 0;
		var objectsOnTable = "";
		var thereAreObjectsOnTheTable = false;
		var objectsDescription = "";
		if(!getFlag(FLAG_GOTWATERINGCAN)) numberOfObjectsToDescribe++;
		if(!getFlag(FLAG_GOTBEANIE)) numberOfObjectsToDescribe++;
		if(!getFlag(FLAG_GOTHEADPHONES)) numberOfObjectsToDescribe++;
		if(!getFlag(FLAG_GOTSUNGLASSES)) numberOfObjectsToDescribe++;
		if(numberOfObjectsToDescribe > 0) thereAreObjectsOnTheTable = true;
		if(!getFlag(FLAG_GOTWATERINGCAN)) {
			objectsOnTable += "a watering can";
			numberOfObjectsToDescribe--;
			if(numberOfObjectsToDescribe == 1) {
				objectsOnTable += " and ";
			}
			if(numberOfObjectsToDescribe > 1) {
				objectsOnTable += ", ";
			}
		}
		if(numberOfObjectsToDescribe > 0) {
			if(!getFlag(FLAG_GOTBEANIE)) {
				objectsOnTable += "a beanie";
				numberOfObjectsToDescribe--;
				if(numberOfObjectsToDescribe == 1) {
					objectsOnTable += " and ";
				}
				if(numberOfObjectsToDescribe > 1) {
					objectsOnTable += ", ";
				}
			}
			if(numberOfObjectsToDescribe > 0 && !getFlag(FLAG_GOTHEADPHONES)) {
				objectsOnTable += "headphones";
				numberOfObjectsToDescribe--;
				if(numberOfObjectsToDescribe == 1) {
					objectsOnTable += " and ";
				}
				if(numberOfObjectsToDescribe > 1) {
					objectsOnTable += ", ";
				}
			}
			if(numberOfObjectsToDescribe > 0 && !getFlag(FLAG_GOTSUNGLASSES)) {
				objectsOnTable += "sunglasses";
				numberOfObjectsToDescribe--;
				if(numberOfObjectsToDescribe == 1) {
					objectsOnTable += " and ";
				}
				if(numberOfObjectsToDescribe > 1) {
					objectsOnTable += ", ";
				}
			}
		}
		if(thereAreObjectsOnTheTable) {
			objectsDescription = "\nYou can see\n" + objectsOnTable + " on the table.";
		}
		messageWindowCentered("You are in an old, tiny shed." + objectsDescription, false);
	}
	else if(doesInputMatchThis(enteredWords, ["get", "can"])) {
		if(
			spriteXCoords[0] < 878
		) {
			if(!getFlag(FLAG_GOTWATERINGCAN)) {
				messageWindowCentered("You pick up the watering can.", false);
				setFlag(FLAG_GOTWATERINGCAN);
				spriteEnabled[1] = false;
				inventory[inventory.length] = 3;
				score += 2;
			}
			else {
				messageWindowCentered(msgNoSuchObjectOnTable, false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToTable, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["get", "beanie"])) {
		if(
			spriteXCoords[0] < 878
		) {
			if(!getFlag(FLAG_GOTBEANIE)) {
				messageWindowCentered("You pick up the beanie.", false);
				setFlag(FLAG_GOTBEANIE);
				spriteEnabled[2] = false;
				inventory[inventory.length] = 5;
				score += 2;
			}
			else {
				messageWindowCentered(msgNoSuchObjectOnTable, false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToTable, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["get", "headphones"])) {
		if(
			spriteXCoords[0] < 878
		) {
			if(!getFlag(FLAG_GOTHEADPHONES)) {
				messageWindowCentered("You pick up the headphones.", false);
				setFlag(FLAG_GOTHEADPHONES);
				spriteEnabled[3] = false;
				inventory[inventory.length] = 6;
				score += 2;
			}
			else {
				messageWindowCentered(msgNoSuchObjectOnTable, false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToTable, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["get", "sunglasses"])) {
		if(
			spriteXCoords[0] < 878
		) {
			if(!getFlag(FLAG_GOTSUNGLASSES)) {
				messageWindowCentered("You pick up the sunglasses.", false);
				setFlag(FLAG_GOTSUNGLASSES);
				spriteEnabled[4] = false;
				inventory[inventory.length] = 7;
				score += 2;
			}
			else {
				messageWindowCentered(msgNoSuchObjectOnTable, false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToTable, false);
		}
	}
	else if(doesInputMatchThis(enteredWords, ["get", "all"])) {
		if(
			spriteXCoords[0] < 878
		) {
			if(
				!getFlag(FLAG_GOTBEANIE) ||
				!getFlag(FLAG_GOTHEADPHONES) ||
				!getFlag(FLAG_GOTSUNGLASSES) ||
				!getFlag(FLAG_GOTWATERINGCAN)
			) {
				messageWindowCentered("You take all the items on the table.", false);
				spriteEnabled[1] = false;
				spriteEnabled[2] = false;
				spriteEnabled[3] = false;
				spriteEnabled[4] = false;
				if(!getFlag(FLAG_GOTWATERINGCAN)) {
					inventory[inventory.length] = 3;
					score += 2;
				}
				if(!getFlag(FLAG_GOTBEANIE)) {
					inventory[inventory.length] = 5;
					score += 2;
				}
				if(!getFlag(FLAG_GOTHEADPHONES)) {
					inventory[inventory.length] = 6;
					score += 2;
				}
				if(!getFlag(FLAG_GOTSUNGLASSES)) {
					inventory[inventory.length] = 7;
					score += 2;
				}
				setFlag(FLAG_GOTBEANIE);
				setFlag(FLAG_GOTHEADPHONES);
				setFlag(FLAG_GOTSUNGLASSES);
				setFlag(FLAG_GOTWATERINGCAN);
			}
			else {
				messageWindowCentered("There are no items on the table.", false);
			}
		}
		else {
			messageWindowCentered(msgNotCloseEnoughToTable, false);
		}
	}
	else if(
		doesInputMatchThis(enteredWords, ["put", "rock"]) ||
		doesInputMatchThis(enteredWords, ["put", "rock", "ground"])
	) {
		if(hasItem(2)) {
			messageWindowCentered("Not here. You have a feeling that it will\nprove more useful to put the rock down\noutdoors.", false);
		}
		else {
			messageWindowCentered(msgWhatRock, false);
		}
	}
	else {
		messageWindowCentered(msgCommandNotUnderstood, false);
	}
}

// ************

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
		var executedGlobalCommand = globalLogic(enteredWords);
		if(!executedGlobalCommand) {
			switch(room) {
				case 1:
					logicRoom001(enteredWords);
					break;
				case 2:
					logicRoom002(enteredWords);
					break;
				case 3:
					logicRoom003(enteredWords);
					break;
			}
		}
	}
	else if(currentWord != "") {
		// This text is shown whenever the parser doesn't recognize one or several words of the given input.
		messageWindowCentered("I don't know the word \"" + currentWord + "\".", false);
	}
}

function colorInventorySelection(r, g, b) {
	if(inventorySelectedIndex == 34) {
		// Draw a thick border around the "OK" button to indicate it has been highlighted.
		var buttonX, buttonY, buttonXEnd, buttonYEnd;
		buttonX = 940;
		buttonY = 610;
		buttonXEnd = buttonX + 50;
		buttonYEnd = buttonY + 30;
		drawBorder(buttonX, buttonY, buttonXEnd, buttonYEnd, r, g, b);
		drawBorder(buttonX + 1, buttonY + 1, buttonXEnd - 1, buttonYEnd - 1, r, g, b);
		drawBorder(buttonX + 2, buttonY + 2, buttonXEnd - 2, buttonYEnd - 2, r, g, b);
		drawBorder(buttonX + 3, buttonY + 3, buttonXEnd - 3, buttonYEnd - 3, r, g, b);
	}
	else {
		// Column 0 start, end X coords: 613, 943
		// Column 1 start, end X coords: 963, 1293
		// Start, end Y coords of 1st line: 201, 220
		var column = Math.floor(inventorySelectedIndex / 17);
		var line = inventorySelectedIndex - (column * 17);
		drawBorder(613 + (column * 350), 201 + (line * 23), 943 + (column * 350), 220 + (line * 23), r, g, b);
	}
}

function highlightInventorySelection() {
	colorInventorySelection(255, 0, 0);
}

function deselectInventorySelection() {
	colorInventorySelection(255, 255, 255);
}

function updateStatusBar() {
	// Put the status bar at the top of the screen.
	for(var y = 0; y < 19; y++) {
		for(var x = 0; x < screenWidth; x++) {
			imgData.data[(y * rowStride) + (x * 4) + 0] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 1] = 255;
			imgData.data[(y * rowStride) + (x * 4) + 2] = 255;
		}
	}
	ctx.putImageData(imgData, 0, 0);
	putTextOnScreen(30, 0, "Score: " + score + " of 500", 0);
	putTextOnScreen(765, 0, "Joonas' JS Adventure", 0);
}

function inputWindow(x, y, winWidth, winHeight, isCenteredHorizontally, isCenteredVertically, inputBoxX, inputBoxY, inputBoxEndX, inputBoxEndY, onlyNumericChars, inputMaxLength, inputText) {
	inputBoxOnlyNumericCharacters = onlyNumericChars;
	inputBoxTextMaxLength = inputMaxLength;
	if(isCenteredHorizontally) {
		x = (Math.floor(screenWidth / 2)) - (Math.floor(winWidth / 2));
	}
	if(isCenteredVertically) {
		y = (Math.floor(screenHeight / 2)) - (Math.floor(winHeight / 2));
	}
	inputBoxX += x;
	inputBoxY += y;
	inputBoxEndX += inputBoxX;
	inputBoxEndY += inputBoxY;
	var targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
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
	putTextOnScreen(x, y, inputText, 0);
	drawBorder(inputBoxX, inputBoxY, inputBoxEndX, inputBoxEndY, 0, 0, 0);
	putTextOnScreen(textInputX, textInputY, textInputText, 0);
	drawCursor(textInputX, textInputY, textInputText);
}

function screen1Load() {
	room = 1;
	spriteEnabled[1] = true;
	spriteEnabled[2] = true;
	spriteEnabled[3] = true;
	spriteEnabled[4] = true;
	spriteEnabled[5] = true;
	spriteEnabled[6] = true;
	spriteEnabled[7] = true;
	spriteEnabled[8] = true;
	if(hasItem(1)) {
		spriteEnabled[8] = false;
	}
	spriteXCoords[0] = screenWidth - 85;

	spriteXCoords[1] = 130;
	spriteXCoords[2] = 200;
	spriteXCoords[3] = 270;
	spriteXCoords[4] = 340;
	spriteXCoords[5] = 410;
	spriteXCoords[6] = 480;
	spriteXCoords[7] = 550;
	spriteXCoords[8] = 1322;

	spriteYCoords[1] = 130;
	spriteYCoords[2] = 200;
	spriteYCoords[3] = 270;
	spriteYCoords[4] = 340;
	spriteYCoords[5] = 410;
	spriteYCoords[6] = 480;
	spriteYCoords[7] = 550;
	spriteYCoords[8] = 233;

	spriteMaskYCoords[1] = 130;
	spriteMaskYCoords[2] = 200;
	spriteMaskYCoords[3] = 270;
	spriteMaskYCoords[4] = 340;
	spriteMaskYCoords[5] = 410;
	spriteMaskYCoords[6] = 480;
	spriteMaskYCoords[7] = 550;
	spriteMaskYCoords[8] = 233;

	spriteWidths[1] = 85;
	spriteWidths[2] = 85;
	spriteWidths[3] = 85;
	spriteWidths[4] = 85;
	spriteWidths[5] = 85;
	spriteWidths[6] = 85;
	spriteWidths[7] = 85;
	spriteWidths[8] = 19;

	spriteHeights[1] = 124;
	spriteHeights[2] = 124;
	spriteHeights[3] = 124;
	spriteHeights[4] = 124;
	spriteHeights[5] = 124;
	spriteHeights[6] = 124;
	spriteHeights[7] = 124;
	spriteHeights[8] = 12;

	spriteWidthsNS[1] = 26;
	spriteWidthsNS[2] = 26;
	spriteWidthsNS[3] = 26;
	spriteWidthsNS[4] = 26;
	spriteWidthsNS[5] = 26;
	spriteWidthsNS[6] = 26;
	spriteWidthsNS[7] = 26;

	spriteCheckBlockOffsetsNS[1] = 29;
	spriteCheckBlockOffsetsNS[2] = 29;
	spriteCheckBlockOffsetsNS[3] = 29;
	spriteCheckBlockOffsetsNS[4] = 29;
	spriteCheckBlockOffsetsNS[5] = 29;
	spriteCheckBlockOffsetsNS[6] = 29;
	spriteCheckBlockOffsetsNS[7] = 29;

	spriteCheckBlockOffsetsE[1] = 55;
	spriteCheckBlockOffsetsE[2] = 55;
	spriteCheckBlockOffsetsE[3] = 55;
	spriteCheckBlockOffsetsE[4] = 55;
	spriteCheckBlockOffsetsE[5] = 55;
	spriteCheckBlockOffsetsE[6] = 55;
	spriteCheckBlockOffsetsE[7] = 55;

	spriteCheckBlockOffsetsW[1] = 28;
	spriteCheckBlockOffsetsW[2] = 28;
	spriteCheckBlockOffsetsW[3] = 28;
	spriteCheckBlockOffsetsW[4] = 28;
	spriteCheckBlockOffsetsW[5] = 28;
	spriteCheckBlockOffsetsW[6] = 28;
	spriteCheckBlockOffsetsW[7] = 28;

	spriteImages[1] = 0;
	spriteImages[2] = 0;
	spriteImages[3] = 0;
	spriteImages[4] = 0;
	spriteImages[5] = 0;
	spriteImages[6] = 0;
	spriteImages[7] = 0;
	spriteImages[8] = 100;

	npcAnimPos = 0;

	npcAnimFrame = 0;

	npcDirections[1] = true;
	npcDirections[2] = true;
	npcDirections[3] = true;
	npcDirections[4] = true;
	npcDirections[5] = true;
	npcDirections[6] = true;
	npcDirections[7] = true;

	ctx.drawImage(screen001picSprite, 0, 0);
	priorityBufferCtx.drawImage(screen001priSprite, 0, 0);
	priorityBufferSdata = priorityBufferCtx.getImageData(0, 0, priorityBuffer.width, priorityBuffer.height);
	depthBufferCtx.drawImage(screen001depSprite, 0, 0);
	depthBufferSdata = depthBufferCtx.getImageData(0, 0, depthBuffer.width, depthBuffer.height);
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	updateStatusBar();
}

function screen2Load() {
	room = 2;
	spriteEnabled[1] = true;
	if(getFlag(FLAG_WINDOWSMASHED)) {
		spriteEnabled[1] = false;
	}
	spriteEnabled[2] = false;
	spriteEnabled[3] = false;
	spriteEnabled[4] = false;
	spriteEnabled[5] = false;
	spriteEnabled[6] = false;
	spriteEnabled[7] = false;
	spriteEnabled[8] = false;
	spriteXCoords[1] = 834;
	spriteYCoords[1] = 359;
	spriteMaskYCoords[1] = 412;
	spriteWidths[1] = 104;
	spriteHeights[1] = 63;
	spriteImages[1] = 38;
	ctx.drawImage(screen002picSprite, 0, 0);
	priorityBufferCtx.drawImage(screen002priSprite, 0, 0);
	priorityBufferSdata = priorityBufferCtx.getImageData(0, 0, priorityBuffer.width, priorityBuffer.height);
	depthBufferCtx.drawImage(screen002depSprite, 0, 0);
	depthBufferSdata = depthBufferCtx.getImageData(0, 0, depthBuffer.width, depthBuffer.height);
	imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	updateStatusBar();
}

window.onload = function() {
	// Initialize all the 32,768 (8 bits * 4096 = 32,768 flags) game engine flags to "clear".
	for(var pos = 0; pos < 4096; pos++) {
		gameEngineFlags[pos] = 0;
		gameEngineVariables[pos] = 0;
	}
	mainFontCtx.drawImage(mainFontSprite, 0, 0);
	mainFontSdata = mainFontCtx.getImageData(0, 0, mainFontBuffer.width, mainFontBuffer.height);
	narrowFontCtx.drawImage(narrowFontSprite, 0, 0);
	narrowFontSdata = narrowFontCtx.getImageData(0, 0, narrowFontBuffer.width, narrowFontBuffer.height);
	item01Ctx.drawImage(item01Sprite, 0, 0);
	item01Sdata = item01Ctx.getImageData(0, 0, item01Buffer.width, item01Buffer.height);
	item02Ctx.drawImage(item02Sprite, 0, 0);
	item02Sdata = item02Ctx.getImageData(0, 0, item02Buffer.width, item02Buffer.height);
	item03Ctx.drawImage(item03Sprite, 0, 0);
	item03Sdata = item03Ctx.getImageData(0, 0, item03Buffer.width, item03Buffer.height);
	item04Ctx.drawImage(item04Sprite, 0, 0);
	item04Sdata = item04Ctx.getImageData(0, 0, item04Buffer.width, item04Buffer.height);
	item05Ctx.drawImage(item05Sprite, 0, 0);
	item05Sdata = item05Ctx.getImageData(0, 0, item05Buffer.width, item05Buffer.height);
	item06Ctx.drawImage(item06Sprite, 0, 0);
	item06Sdata = item06Ctx.getImageData(0, 0, item06Buffer.width, item06Buffer.height);
	item07Ctx.drawImage(item07Sprite, 0, 0);
	item07Sdata = item07Ctx.getImageData(0, 0, item07Buffer.width, item07Buffer.height);
	layer1Ctx.drawImage(layer1Sprite, 0, 0);
	layer1Sdata = layer1Ctx.getImageData(0, 0, layer1Buffer.width, layer1Buffer.height);
	layer2Ctx.drawImage(layer2Sprite, 0, 0);
	layer2Sdata = layer2Ctx.getImageData(0, 0, layer2Buffer.width, layer2Buffer.height);
	layer3Ctx.drawImage(layer3Sprite, 0, 0);
	layer3Sdata = layer3Ctx.getImageData(0, 0, layer3Buffer.width, layer3Buffer.height);

	// We start the game with the title page.
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

	sprite022Ctx.drawImage(sprite022Sprite, 0, 0);
	sprite022Sdata = sprite022Ctx.getImageData(0, 0, sprite022Buffer.width, sprite022Buffer.height);

	sprite023Ctx.drawImage(sprite023Sprite, 0, 0);
	sprite023Sdata = sprite023Ctx.getImageData(0, 0, sprite023Buffer.width, sprite023Buffer.height);

	sprite024Ctx.drawImage(sprite024Sprite, 0, 0);
	sprite024Sdata = sprite024Ctx.getImageData(0, 0, sprite024Buffer.width, sprite024Buffer.height);

	sprite025Ctx.drawImage(sprite025Sprite, 0, 0);
	sprite025Sdata = sprite025Ctx.getImageData(0, 0, sprite025Buffer.width, sprite025Buffer.height);

	sprite026Ctx.drawImage(sprite026Sprite, 0, 0);
	sprite026Sdata = sprite026Ctx.getImageData(0, 0, sprite026Buffer.width, sprite026Buffer.height);

	sprite027Ctx.drawImage(sprite027Sprite, 0, 0);
	sprite027Sdata = sprite027Ctx.getImageData(0, 0, sprite027Buffer.width, sprite027Buffer.height);

	sprite028Ctx.drawImage(sprite028Sprite, 0, 0);
	sprite028Sdata = sprite028Ctx.getImageData(0, 0, sprite028Buffer.width, sprite028Buffer.height);

	sprite029Ctx.drawImage(sprite029Sprite, 0, 0);
	sprite029Sdata = sprite029Ctx.getImageData(0, 0, sprite029Buffer.width, sprite029Buffer.height);

	sprite030Ctx.drawImage(sprite030Sprite, 0, 0);
	sprite030Sdata = sprite030Ctx.getImageData(0, 0, sprite030Buffer.width, sprite030Buffer.height);

	sprite031Ctx.drawImage(sprite031Sprite, 0, 0);
	sprite031Sdata = sprite031Ctx.getImageData(0, 0, sprite031Buffer.width, sprite031Buffer.height);

	sprite032Ctx.drawImage(sprite032Sprite, 0, 0);
	sprite032Sdata = sprite032Ctx.getImageData(0, 0, sprite032Buffer.width, sprite032Buffer.height);

	sprite033Ctx.drawImage(sprite033Sprite, 0, 0);
	sprite033Sdata = sprite033Ctx.getImageData(0, 0, sprite033Buffer.width, sprite033Buffer.height);

	sprite034Ctx.drawImage(sprite034Sprite, 0, 0);
	sprite034Sdata = sprite034Ctx.getImageData(0, 0, sprite034Buffer.width, sprite034Buffer.height);

	sprite035Ctx.drawImage(sprite035Sprite, 0, 0);
	sprite035Sdata = sprite035Ctx.getImageData(0, 0, sprite035Buffer.width, sprite035Buffer.height);

	sprite036Ctx.drawImage(sprite036Sprite, 0, 0);
	sprite036Sdata = sprite036Ctx.getImageData(0, 0, sprite036Buffer.width, sprite036Buffer.height);

	sprite037Ctx.drawImage(sprite037Sprite, 0, 0);
	sprite037Sdata = sprite037Ctx.getImageData(0, 0, sprite037Buffer.width, sprite037Buffer.height);

	sprite038Ctx.drawImage(sprite038Sprite, 0, 0);
	sprite038Sdata = sprite038Ctx.getImageData(0, 0, sprite038Buffer.width, sprite038Buffer.height);

	sprite039Ctx.drawImage(sprite039Sprite, 0, 0);
	sprite039Sdata = sprite039Ctx.getImageData(0, 0, sprite039Buffer.width, sprite039Buffer.height);

	sprite040Ctx.drawImage(sprite040Sprite, 0, 0);
	sprite040Sdata = sprite040Ctx.getImageData(0, 0, sprite040Buffer.width, sprite040Buffer.height);

	sprite041Ctx.drawImage(sprite041Sprite, 0, 0);
	sprite041Sdata = sprite041Ctx.getImageData(0, 0, sprite041Buffer.width, sprite041Buffer.height);

	sprite042Ctx.drawImage(sprite042Sprite, 0, 0);
	sprite042Sdata = sprite042Ctx.getImageData(0, 0, sprite042Buffer.width, sprite042Buffer.height);

	object01Ctx.drawImage(object01Sprite, 0, 0);
	object01Sdata = object01Ctx.getImageData(0, 0, object01Buffer.width, object01Buffer.height);

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
	doSpriteTransparency(sprite022Ctx, sprite022Buffer, sprite022Sdata, 52, 90, 72);
	doSpriteTransparency(sprite023Ctx, sprite023Buffer, sprite023Sdata, 52, 90, 72);
	doSpriteTransparency(sprite024Ctx, sprite024Buffer, sprite024Sdata, 52, 90, 72);
	doSpriteTransparency(sprite025Ctx, sprite025Buffer, sprite025Sdata, 52, 90, 72);
	doSpriteTransparency(sprite026Ctx, sprite026Buffer, sprite026Sdata, 52, 90, 72);
	doSpriteTransparency(sprite027Ctx, sprite027Buffer, sprite027Sdata, 52, 90, 72);
	doSpriteTransparency(sprite028Ctx, sprite028Buffer, sprite028Sdata, 52, 90, 72);
	doSpriteTransparency(sprite029Ctx, sprite029Buffer, sprite029Sdata, 52, 90, 72);
	doSpriteTransparency(sprite030Ctx, sprite030Buffer, sprite030Sdata, 52, 90, 72);
	doSpriteTransparency(sprite031Ctx, sprite031Buffer, sprite031Sdata, 52, 90, 72);
	doSpriteTransparency(sprite032Ctx, sprite032Buffer, sprite032Sdata, 52, 90, 72);
	doSpriteTransparency(sprite033Ctx, sprite033Buffer, sprite033Sdata, 52, 90, 72);
	doSpriteTransparency(sprite034Ctx, sprite034Buffer, sprite034Sdata, 52, 90, 72);
	doSpriteTransparency(sprite035Ctx, sprite035Buffer, sprite035Sdata, 52, 90, 72);
	doSpriteTransparency(sprite036Ctx, sprite036Buffer, sprite036Sdata, 52, 90, 72);
	doSpriteTransparency(sprite037Ctx, sprite037Buffer, sprite037Sdata, 52, 90, 72);
	doSpriteTransparency(sprite039Ctx, sprite039Buffer, sprite039Sdata, 52, 90, 72);
	doSpriteTransparency(sprite040Ctx, sprite040Buffer, sprite040Sdata, 52, 90, 72);
	doSpriteTransparency(sprite041Ctx, sprite041Buffer, sprite041Sdata, 52, 90, 72);
	doSpriteTransparency(sprite042Ctx, sprite042Buffer, sprite042Sdata, 52, 90, 72);
	doSpriteTransparency(object01Ctx, object01Buffer, object01Sdata, 72, 147, 15);
	doSpriteTransparency(layer1Ctx, layer1Buffer, layer1Sdata, 72, 147, 15);
	doSpriteTransparency(layer2Ctx, layer2Buffer, layer2Sdata, 72, 147, 15);
	doSpriteTransparency(layer3Ctx, layer3Buffer, layer3Sdata, 72, 147, 15);
	setIndicesAndTransparenciesForFont(0); // 0 = set indices and transparencies for main (default) font
	setIndicesAndTransparenciesForFont(1); // 1 = set indices and transparencies for narrow font

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

	if(gameState == STATE_TITLE) {
		if(keyDown) {
			keyDown = false;
			startedGame = true;
			gameState = STATE_GAME;
			screen1Load();
		}
	}

	else {
		if(startedGame) {
			startedGame = false;
			messageWindowCentered("Joonas' JS Adventure is a Work In Progress.\nI hope you'll enjoy this game.\n2025 Joonas Lindberg.\n\nThis project is free and open source.\nFor the latest version of the project, please use the GitHub repository:\ngithub.com/JoonasTMS86/joonas-jsadventure", false);
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
						var plus = 0;
						if(spriteYCoords[0] > 622) {
							plus = 22;
						}
						spriteImages[0] = 4 + playerAnimFrame + plus;
					}
					var canMove = true;
					var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsW[0];
					var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 1;
					for(var pos = 1; pos < 9; pos++) {
						if(
							spriteEnabled[pos] &&
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
					switch(blockType) {
						case 0:
							spriteXCoords[0] = spriteXCoords[0] - 1;
							break;
						case 16385:
							screen1Load();
							break;
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
						var plus = 0;
						if(spriteYCoords[0] > 622) {
							plus = 22;
						}
						spriteImages[0] = playerAnimFrame + plus;
					}
					var canMove = true;
					var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsE[0];
					var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 1;
					for(var pos = 1; pos < 9; pos++) {
						if(
							spriteEnabled[pos] &&
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
					switch(blockType) {
						case 0:
							spriteXCoords[0] = spriteXCoords[0] + 1;
							break;
						case 255:
							spriteXCoords[0] = 6;
							screen2Load();
							break;
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
							var plus = 0;
							if(spriteYCoords[0] > 622) {
								plus = 22;
							}
							spriteImages[0] = 8 + playerAnimFrame + plus;
						}
					}
					var canMove = true;
					var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsNS[0];
					var playerFeetY = spriteYCoords[0] + spriteHeights[0] - 2;
					for(var pos = 1; pos < 9; pos++) {
						if(
							(
							spriteEnabled[pos] &&
							playerFeetX + spriteWidthsNS[0] - 1) >= (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos]) && 
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
							var plus = 0;
							if(spriteYCoords[0] > 622) {
								plus = 22;
							}
							spriteImages[0] = 12 + playerAnimFrame + plus;
						}
					}
					var canMove = true;
					var playerFeetX = spriteXCoords[0] + spriteCheckBlockOffsetsNS[0];
					var playerFeetY = spriteYCoords[0] + spriteHeights[0];
					for(var pos = 1; pos < 9; pos++) {
						if(
							(
							spriteEnabled[pos] &&
							playerFeetX + spriteWidthsNS[0] - 1) >= (spriteXCoords[pos] + spriteCheckBlockOffsetsNS[pos]) && 
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

				if(!keyDown && typedKeyCode == 112 && debugMode) {
					messageWindowCentered("debug info\nplayerX: " + spriteXCoords[0] + "\nplayerY: " + spriteYCoords[0], false);
				}

				if(canTypeKey && keyDown && typedKey.length == 1) {
					waitingForEnterPress = true;
					secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
					gameState = STATE_INPUTWINDOW;
					inputState = INPUTSTATE_COMMAND;
					var x = 15;
					var y = 822;
					var winWidth = screenWidth - (x * 2);
					var winHeight = 75;
					inputBoxX = 10;
					inputBoxY = 32;
					inputBoxWidth = winWidth - 25;
					inputBoxHeight = 25;
					inputWindow(x, y, winWidth, winHeight, false, false, inputBoxX, inputBoxY, inputBoxWidth, inputBoxHeight, false, 97, "Enter command:");
				}

				if(showInputWindow) {
					showInputWindow = false;
					waitingForEnterPress = true;
					secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
					gameState = STATE_INPUTWINDOW;
					typedKey = "";
					inputWindow(0, inputWinY, inputWinWidth, inputWinHeight, true, false, inputBoxX, inputBoxY, inputBoxWidth, inputBoxHeight, true, 3, inputWinText);
				}

				// Display the inventory window. You display the inventory by entering "inventory" at the input window or by pressing the Tab key.
				if((canTypeKey && keyDown && typedKeyCode == 9) || saidShowInventory) {
					secondScreenCtx.putImageData(imgDataWithoutSprites, 0, 0);
					gameState = STATE_INVENTORY;
					waitingForEnterPress = true;
					saidShowInventory = false;
					var windowX, windowY, x, y, winWidth, winHeight, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
					windowX = 605;
					windowY = 150;
					x = windowX;
					y = windowY;
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

					inventorySelectedIndex = 34;
					if(inventory.length == 0) {
						putTextOnScreen(822, 391, "Nothing at all", 0);
					}
					else {
						putTextOnScreen(946, 616, "OK", 0);
						var invTextColumn = 0;
						var invTextLine = 0;
						for(var pos = 0; pos < inventory.length; pos++) {
							putTextOnScreen((616 + (invTextColumn * 350)), (202 + (invTextLine * 23)), inventoryItemNames[inventory[pos]], 1);
							invTextLine++;
							if(invTextLine >= 17) {
								if(invTextColumn == 0 && pos < (inventory.length - 1)) {
									imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
									for(var ypos = windowY + 52; ypos < (windowY + 52 + 390); ypos++) {
										imgData.data[(ypos * rowStride) + ((windowX + 347) * 4) + 0] = 0;
										imgData.data[(ypos * rowStride) + ((windowX + 347) * 4) + 1] = 0;
										imgData.data[(ypos * rowStride) + ((windowX + 347) * 4) + 2] = 0;
									}
									ctx.putImageData(imgData, 0, 0);
								}
								invTextLine = 0;
								invTextColumn++;
								if(invTextColumn >= 2) {
									pos = inventory.length;
								}
							}
						}
						highlightInventorySelection();
					}
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
							setFlag(FLAG_PLAYERONOPPOSITESIDEOFFENCE);
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
							clearFlag(FLAG_PLAYERCONTROLDISABLED);
							clearFlag(FLAG_PLAYERCLIMBINGFENCE);
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
							setFlag(FLAG_PLAYERONOPPOSITESIDEOFFENCE);
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
							clearFlag(FLAG_PLAYERCONTROLDISABLED);
							clearFlag(FLAG_PLAYERCLIMBINGFENCE);
							spriteImages[0] = 8;
						}
					}
				}
			}

			// Script for room 1: Move all the NPC characters, the Joonas clones which march back and forth.
			if(room == 1) {
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
		}
		else {
			if(gameState == STATE_INPUTWINDOW && canTypeKey && keyDown && typedKeyCode != 13) {
				var validCharacter = true;
				if(inputBoxOnlyNumericCharacters) {
					validCharacter = false;
					if(typedKeyCode == 8 || (typedKey.charCodeAt(0) >= 48 && typedKey.charCodeAt(0) <= 57)) {
						validCharacter = true;
					}
				}
				if(validCharacter) {
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
					if(typedKey.length == 1 && textInputText.length < inputBoxTextMaxLength) {
						textInputText += typedKey;
					}
					putTextOnScreen(textInputX, textInputY, textInputText, 0);
					drawCursor(textInputX, textInputY, textInputText);
				}
			}
			if(gameState == STATE_INVENTORY && inventory.length > 0) {
				if(canTypeKey && keyDown) {
					switch(typedKeyCode) {
						case 38:
							// Up arrow key on selection
							deselectInventorySelection();
							if(inventorySelectedIndex == 34) {
								inventorySelectedIndex = inventory.length - 1;
							}
							else if(inventorySelectedIndex > 0){
								inventorySelectedIndex--;
							}
							highlightInventorySelection();
							break;
						case 40:
							// Down arrow key on selection
							deselectInventorySelection();
							if(inventorySelectedIndex == 16 || inventorySelectedIndex == 33 || inventorySelectedIndex == (inventory.length - 1)) {
								inventorySelectedIndex = 34;
							}
							else if(inventorySelectedIndex < 34){
								inventorySelectedIndex++;
							}
							highlightInventorySelection();
							break;
						case 37:
							// Left arrow key on selection
							if(inventorySelectedIndex != 34 && inventorySelectedIndex >= 17) {
								deselectInventorySelection();
								inventorySelectedIndex -= 17;
								highlightInventorySelection();
							}
							break;
						case 39:
							// Right arrow key on selection
							if(inventorySelectedIndex != 34 && inventory.length >= 18 && inventorySelectedIndex < 17) {
								deselectInventorySelection();
								inventorySelectedIndex += 17;
								if(inventorySelectedIndex > (inventory.length - 1)) {
									inventorySelectedIndex = inventory.length - 1;
								}
								highlightInventorySelection();
							}
							break;
					}
				}
			}
			canTypeKey = false;
			keyDown = false;
			if(!keyDown) {
				canTypeKey = true;
			}

			if(enterTyped) {
				enterTyped = false;
				if(gameState == STATE_INVENTORY) {
					if(inventorySelectedIndex == 34) {
						waitingForEnterPress = false;
						imgData = secondScreenCtx.getImageData(0, 0, secondScreenBuffer.width, secondScreenBuffer.height);
						ctx.putImageData(imgData, 0, 0);
						gameState = STATE_GAME;
					}
					else {
						imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
						thirdScreenCtx.putImageData(imgData, 0, 0);
						gameState = STATE_ITEMDESCRIPTION;

						var x, y, winWidth, winHeight, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY;
						x = 775;
						y = 60;
						winWidth = 360;
						winHeight = 360;
						targetX = x + winWidth;
						targetY = y + winHeight;
						borderTargetX = x + Math.floor(messageWindowMarginWidth / 2) + winWidth - (Math.floor(messageWindowMarginWidth / 2) * 2) - 1;
						borderTargetY = y + Math.floor(messageWindowMarginHeight / 2) + winHeight - (Math.floor(messageWindowMarginHeight / 2) * 2) - 1;
						borderStartX = x + Math.floor(messageWindowMarginWidth / 2);
						borderStartY = y + Math.floor(messageWindowMarginHeight / 2);
						drawWindowOnScreen(x, y, targetX, targetY, borderStartX, borderStartY, borderTargetX, borderTargetY);
						ctx.putImageData(imgData, 0, 0);
						var spriteToDraw;
						switch(inventory[inventorySelectedIndex]) {
							case 1:
								spriteToDraw = item01Sprite;
								break;
							case 2:
								spriteToDraw = item02Sprite;
								break;
							case 3:
								spriteToDraw = item03Sprite;
								break;
							case 4:
								spriteToDraw = item04Sprite;
								break;
							case 5:
								spriteToDraw = item05Sprite;
								break;
							case 6:
								spriteToDraw = item06Sprite;
								break;
							case 7:
								spriteToDraw = item07Sprite;
								break;
						}
						ctx.drawImage(spriteToDraw, x + messageWindowMarginWidth + 3, y + messageWindowMarginHeight + 3);

						if(inventory[inventorySelectedIndex] == 2) {
							if(getFlag(FLAG_SUNGLASSESONROCK)) ctx.drawImage(layer3Buffer, x + messageWindowMarginWidth + 3 + 22, y + messageWindowMarginHeight + 3 + 91);
							if(getFlag(FLAG_HEADPHONESONROCK)) ctx.drawImage(layer2Buffer, x + messageWindowMarginWidth + 3 + 3, y + messageWindowMarginHeight + 3);
							if(getFlag(FLAG_BEANIEONROCK))     ctx.drawImage(layer1Buffer, x + messageWindowMarginWidth + 3 + 40, y + messageWindowMarginHeight + 3);
							if(getFlag(FLAG_BEANIEONROCK) || getFlag(FLAG_HEADPHONESONROCK) || getFlag(FLAG_SUNGLASSESONROCK) ) {
								messageWindowHorizontallyCentered("You have put some objects on the rock.", 425, true);
							}
							else {
								messageWindowHorizontallyCentered(itemDescriptions[inventory[inventorySelectedIndex]], 425, true);
							}
						}
						else {
							messageWindowHorizontallyCentered(itemDescriptions[inventory[inventorySelectedIndex]], 425, true);
						}
					}
				}
				else if(gameState == STATE_ITEMDESCRIPTION) {
					imgData = thirdScreenCtx.getImageData(0, 0, secondScreenBuffer.width, secondScreenBuffer.height);
					ctx.putImageData(imgData, 0, 0);
					gameState = STATE_INVENTORY;
				}
				else {
					waitingForEnterPress = false;
					imgData = secondScreenCtx.getImageData(0, 0, secondScreenBuffer.width, secondScreenBuffer.height);
					updateStatusBar();
					ctx.putImageData(imgData, 0, 0);
					if(gameState == STATE_INPUTWINDOW) {
						gameState = STATE_GAME;
						switch(inputState) {
							case INPUTSTATE_COMMAND:
								parse(textInputText);
								break;
							case INPUTSTATE_GETITEM:
								if(textInputText.length > 0) {
									var itemNumber = parseInt(textInputText);
									if(itemNumber == 0 || itemNumber >= inventoryItemNames.length) {
										messageWindowCentered("Invalid item number.\nValid item numbers are: 1 to " + (inventoryItemNames.length - 1) + ".");
									}
									else {
										var itemAlreadyInInventory = false;
										for(var pos = 0; pos < inventory.length; pos++) {
											if(inventory[pos] == itemNumber) {
												itemAlreadyInInventory = true;
											}
										}
										if(itemAlreadyInInventory) {
											messageWindowCentered("Item already in inventory.");
										}
										else {
											inventory[inventory.length] = itemNumber;
										}
									}
								}
								break;
							case INPUTSTATE_CHECKFLAG:
								if(textInputText.length > 0) {
									var flagNumber = parseInt(textInputText);
									if(flagNumber > 32767) {
										messageWindowCentered(msgInvalidFlagNumber);
									}
									else {
										if(getFlag(flagNumber)) {
											messageWindowCentered("Flag " + flagNumber + " = SET");
										}
										else {
											messageWindowCentered("Flag " + flagNumber + " = CLEAR");
										}
									}
								}
								break;
							case INPUTSTATE_SETFLAG:
								if(textInputText.length > 0) {
									var flagNumber = parseInt(textInputText);
									if(flagNumber > 32767) {
										messageWindowCentered(msgInvalidFlagNumber);
									}
									else {
										setFlag(flagNumber);
									}
								}
								break;
							case INPUTSTATE_CLEARFLAG:
								if(textInputText.length > 0) {
									var flagNumber = parseInt(textInputText);
									if(flagNumber > 32767) {
										messageWindowCentered(msgInvalidFlagNumber);
									}
									else {
										clearFlag(flagNumber);
									}
								}
								break;
						}
					}
					else if(changeRoomAfterMessageWindow) {
						changeRoomAfterMessageWindow = false;
						switch(roomToChangeTo) {
							case 2:
								spriteXCoords[0] = 842;
								spriteYCoords[0] = 352;
								spriteMaskYCoords[0] = 352;
								spriteImages[0] = 12;
								screen2Load();
								break;
							case 3:
								room = 3;
								spriteEnabled[1] = true;
								spriteEnabled[2] = true;
								spriteEnabled[3] = true;
								spriteEnabled[4] = true;
								if(getFlag(FLAG_GOTWATERINGCAN)) spriteEnabled[1] = false;
								if(getFlag(FLAG_GOTBEANIE)) spriteEnabled[2] = false;
								if(getFlag(FLAG_GOTHEADPHONES)) spriteEnabled[3] = false;
								if(getFlag(FLAG_GOTSUNGLASSES)) spriteEnabled[4] = false;
								spriteEnabled[5] = false;
								spriteEnabled[6] = false;
								spriteEnabled[7] = false;
								spriteEnabled[8] = false;
								spriteXCoords[0] = 928;
								spriteYCoords[0] = 379;
								spriteXCoords[1] = 760;
								spriteYCoords[1] = 445;
								spriteXCoords[2] = 814;
								spriteYCoords[2] = 459;
								spriteXCoords[3] = 843;
								spriteYCoords[3] = 451;
								spriteXCoords[4] = 884;
								spriteYCoords[4] = 464;
								spriteMaskYCoords[0] = 379;
								spriteMaskYCoords[1] = 445;
								spriteMaskYCoords[2] = 459;
								spriteMaskYCoords[3] = 451;
								spriteMaskYCoords[4] = 464;
								spriteWidths[1] = 41;
								spriteWidths[2] = 15;
								spriteWidths[3] = 26;
								spriteWidths[4] = 20;
								spriteHeights[1] = 28;
								spriteHeights[2] = 11;
								spriteHeights[3] = 21;
								spriteHeights[4] = 8;
								spriteImages[0] = 12;
								spriteImages[1] = 39;
								spriteImages[2] = 40;
								spriteImages[3] = 41;
								spriteImages[4] = 42;
								ctx.drawImage(screen003picSprite, 0, 0);
								priorityBufferCtx.drawImage(screen003priSprite, 0, 0);
								priorityBufferSdata = priorityBufferCtx.getImageData(0, 0, priorityBuffer.width, priorityBuffer.height);
								depthBufferSdata = depthBufferCtx.getImageData(0, 0, depthBuffer.width, depthBuffer.height);
								for(var pos = 0; pos < (depthBuffer.width * 4 * depthBuffer.height); pos += 4) {
									depthBufferSdata.data[pos + 0] = 0;
									depthBufferSdata.data[pos + 1] = 0;
									depthBufferSdata.data[pos + 2] = 0;
								}
								imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
								updateStatusBar();
								break;
						}
					}
				}
			}
		}
	}
}
